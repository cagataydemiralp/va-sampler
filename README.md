
Variational Autoencoder Viewer  
============================== 

<img src=https://github.com/cagataydemiralp/va-viewer/raw/master/screenrec.gif  width="768" style="box-shadow: 5px 10px;"/>

This is a basic variational autoencoder  visualizer that I've created to support the discussion of
the paper, [Auto-Encoding Variational Bayes](https://arxiv.org/pdf/1312.6114.pdf), at our reading 
group. It may also help others reading the paper. The autoencoder implementation is based 
on [Keras](https://github.com/keras-team/keras/blob/master/examples/variational_autoencoder.py). 

You can play with [the live app](http://hci.stanford.edu/~cagatay/projects/va-viewer/) or download, 
build and experiment with the source code, which I
recommend. The live app uses a free, low power compute server for autoencoder
computations. So, you may experience some lag while interacting with the grid
visualizations (the third column). Otherwise, slider interactions should be
fluid.  

To install, download or clone the repo and then run `npm install` in the
va-viewer folder. As for the backend, you'll need to run `pip install -r requirements.txt`
in the analytics_server folder. If you don't have `pip` installed, install following 
the instructions [here](https://pip.pypa.io/en/stable/installing/).  
    

To build & run, `npm run start`.

