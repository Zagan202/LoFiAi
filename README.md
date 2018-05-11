# LoFiAi
### AI Driven Music Composition

Based on a [TensorFlow implementation](https://github.com/ibab/tensorflow-wavenet) of [Google WaveNet](https://deepmind.com/blog/wavenet-generative-model-raw-audio/)

[Training data](https://github.com/ajperrot/testAI/tree/master/tfwavenet/music) is fed to the neural network afterwards the network models</br>
the conditional probability to generate the next audio sample 
in respect</br>
to the previous samples and parameters.

**The deep convolutional neural network (CNN) takes the data as an input and synthesises an output one sample at a time.**</br>
this requires immense computational power, therefore training is done on [Google's computers](https://cloud.google.com/products/compute/)

Also, utilizing (MongoDB, Express, React, Node.js, Google Cloud Platform), developed a web application to listen and share</br>
the CNN generated music.


#### TL;DR: Using AI trained on Google's computers to compose new music.</br> 
#### Currently training to output more [lofi hip hop beats to relax/study to](https://www.youtube.com/watch?v=IjWfwkLSKtA)
