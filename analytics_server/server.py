#!/usr/bin/env python
#
#
__author__ = 'cagatay@fitnescity.com'

import time
import sys
import numpy as np
#import matplotlib.pyplot as plt
from scipy.stats import norm

from keras.layers import Input, Dense, Lambda, Layer
from keras.models import Model
from keras import backend as K
from keras import metrics
from keras.models import load_model
import tensorflow as tf

from flask import Flask
from flask import jsonify
from flask import request
from flask_cors import CORS

mnist_z2=load_model('mnist-va-decoder-zdim-2.h5')
mnist_z2._make_predict_function()
graph_mnist_z2 = tf.get_default_graph()
mnist_z4=load_model('mnist-va-decoder-zdim-4.h5')
graph_mnist_z4 = tf.get_default_graph()
fashion_z2=load_model('fashion-va-decoder-zdim-2.h5')
fashion_z2._make_predict_function()
graph_fashion_z2 = tf.get_default_graph()
fashion_z4=load_model('fashion-va-decoder-zdim-4.h5')
fashion_z4._make_predict_function()
graph_fashion_z4 = tf.get_default_graph()
digit_size = 28

decoders = dict(mnist_z2=(mnist_z2,graph_mnist_z2), mnist_z4=(mnist_z4,graph_mnist_z4), fashion_z2=(fashion_z2,graph_fashion_z2), fashion_z4=(fashion_z4,graph_fashion_z4))


app = Flask(__name__)
cors = CORS(app)


def single_sample(decoder,graph,z):
    z_sample=norm.ppf(np.array([z]))
    with graph.as_default():
        decoded = decoder.predict(z_sample)
        sampled_digit = decoded[0].reshape(digit_size, digit_size)
        sampled_digit -= np.min(sampled_digit)
        sampled_digit = np.round(sampled_digit * (255.0 / np.max(sampled_digit)))
    return sampled_digit.tolist()

def grid_sample(decoder,graph,z,grid):
    start,end,num=grid
    grid_x = np.linspace(start,end,num) 
    grid_y = grid_x 
    grid_list = [[[] for j in range(num)] for i in range(num)] 
    for i, yi in enumerate(grid_y):
        for j, xi in enumerate(grid_x):
            z_new = [xi, yi, z[0], z[1]]
            grid_list[i][j]=single_sample(decoder, graph, z_new)

    return grid_list

@app.route('/api/sample/', methods=['POST'])
def sample():
    if not request.json or 'name' not in request.json or 'z' not in request.json: 
       return None 
    args = request.get_json()
    z=args['z']
    name = args['name'] 
    decoder,graph=decoders[name]
    z_sample=norm.ppf(np.array([z]))
    sample_fmt=args['format']
    if sample_fmt == 'single':
        sampled=single_sample(decoder,graph,z)
    else:
        sampled=grid_sample(decoder,graph, z, args['grid'])

    return jsonify({ "sample":sampled}), 201 


if __name__ == '__main__':
    app.run(debug=False, threaded=True)

