<template>
<div id="page404">
  <div id="bg"></div>
  <p id="text404" class="cutout">
    4<span class="cutoutG">0</span><span class="cutoutR">4</span>
  </p>
  <a href="http://benh.io" id="back" class="cutout">
    C<span class="cutoutR">l</span>i<span class="cutoutG">c</span>k 
    t<span class="cutoutG">o</span> 
    <span class="cutoutR">g</span>o 
    <span class="cutoutG">b</span>a<span class="cutoutR">c</span>k 
    <span class="cutoutR">h</span>om<span class="cutoutR">e</span></a>
  </div>


</template>

<style scoped>
  #page404 {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    color: white;
    background-image: url("../../static/galaxy.jpg");
    background-size: cover;
    perspective: 300px;
  }
  a {
    color: white;
  }
  
  #text404 {
    position: absolute;
    top: 100px;
    left: 100px;
    margin-top: 0px;
    font-size: 200px;
    
  }
  
  #back {
    font-size: 50px;
    position: absolute;
    bottom: 100px;
    right: 100px;
    text-decoration: none;
  }
  
  .cutout {
    transition-duration: 2s;
    font-weight: bolder;
    background-color: #565656;
    color: transparent;
    text-shadow: 0px 2px 3px rgba(255,255,255,0.8);
    -webkit-background-clip: text;
     -moz-background-clip: text;
          background-clip: text;
  }
  .cutoutR {
    text-shadow: 0px 2px 3px rgba(248, 180, 253,0.8);
  }
  .cutoutG {
    text-shadow: 0px 2px 3px rgba(181, 254, 193,0.8);
  }

  #bg {
    position: absolute;
    width: 150%;
    height: 150%;
    top: -45%;
    left: -45%;
    background-image: url("../../static/galaxy.jpg");
    background-size: cover;
    animation: rotate linear infinite 320s;
  }
  
  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    } 25% {
      transform: rotateZ(15deg);
    } 50% {
      transform: rotateZ(0deg);
    } 75% {
      transform: rotateZ(-15deg);
    } 100% {
      transform: rotateZ(0deg);
    }
  }

</style>