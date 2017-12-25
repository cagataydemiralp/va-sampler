
Variational Autoencoder Viewer  
============================== 
This is a basic AE visualizer that I've created to support the discussion of
the paper https://arxiv.org/pdf/1312.6114.pdf at our reading group. It may also 
help others reading the paper. The autoencoder implementation is based 
on https://github.com/keras-team/keras/blob/master/examples/variational_autoencoder.py. 

You can play with (the live app)[http://hci.stanford.edu/~cagatay/projects/va-viewer/]
or download, build and experiment with it, which I suggest. The live app uses a free, 
low power compute server for autoencoder computations. So, you may experience some lag 
while interacting with the grid visualizations (the third column). Otherwise, slider 
interactions should be fluid.  

To install, download or clone the repo and then run `npm install` in 
the va-viewer folder. As for the backend, you'll 
need to `pip install requirements` in the analytics_server folder.    

To build & run, `npm run start`.

