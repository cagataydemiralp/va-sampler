
Interactive Variational Autoencoder Sampling and Visualization
============================== 

<img src=https://github.com/cagataydemiralp/va-viewer/raw/master/screenrec.gif  width="768" style="box-shadow: 5px 10px;"/>

This is a basic variational autoencoder sampler that I've created to support
the discussion of  [Auto-Encoding Variational
Bayes](https://arxiv.org/pdf/1312.6114.pdf) at our reading group. It may also
help others reading the paper. The autoencoder implementation is based on
[Keras](https://github.com/keras-team/keras/blob/master/examples/variational_autoencoder.py). 

You can play with [the live
version](http://hci.stanford.edu/~cagatay/projects/va-viewer/) or download,
build and experiment with the source code, which I recommend. The live app uses
a low-power compute server for autoencoder computations. So, you may experience
some lag while interacting with the grid visualizations (the third column).
Otherwise, slider interactions should be fluid.  

The viewer enables interactive  sampling from the 2- and 4-dimensional latent
encoding spaces of the [MNIST](http://yann.lecun.com/exdb/mnist/)(_first row_)
and [Fashion MNIST](https://github.com/zalandoresearch/fashion-mnist)(_second
row_) datasets,  obtained using the probabilistic encoding proposed in the
paper.  The encoding space learned by the variational autoencoder here is the
parameter space (z) of a probabilistic representation of the dataset, which can
be sampled from (i.e., generative). You can change the z values using the
sliders and see the corresponding image samples. Sliders range between 0.05 and
0.95, and z values for sampling are obtained by applying the inverse cumulative
distribution function (CDF) of the Gaussian to the slider values. You can
sample a single image from the encoding space (first two columns) or a grid of
images (third column), where the first two latent dimensions are used (fixed)
to create image samples using z values sampled on a 4-by-4 grid and the
remaining two can be dynamically changed using the sliders. For example, the
image sample on the grid location (row#3,col#4)  represents the sample obtained
using z = _GaussianInverseCDF_([0.95, 0.65, _slider#0value_, _slider#1value_]).
You can try to increase the grid resolution if you have the compute power.         

To install, download or clone the repo and then run `npm install` in the
`va-sampler` folder. As for the backend, you'll need to run `pip install -r
requirements.txt` in the `analytics_server` folder. If you don't have `pip`
installed, install it by following the instructions
[here](https://pip.pypa.io/en/stable/installing/).  
    

To build & run,  first enter `npm run analytics` in `va-sampler/`
(alternatively, change dir to `analytics_server/'  and `python ./server.py`) to
start the Python server and then open another terminal and enter `npm run
start` to start the web client. The last step will open a tab in your default
browser to show the running application.  


