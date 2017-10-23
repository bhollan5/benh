<template>
    <div id="bg" class="bg6">
      <div class="design6">
      <div id="squid">
        <div id="squidHead" class="squidPart">
          <div id="squidEye">
            <div id="squidEyelid" class="squidPart"></div>
            <div id="squidPupil"></div>
          </div>
        </div>
        <div id="squidBody" class="squidPart"></div>
      </div>
    </div>
  <div id="container">
    
    
    
      <div id="aboveGround">
    <h1 id="BenH" class="threed6">Ben H</h1>
    
    <p id="about" class="threedDown6 menuitem"><router-link class="threedDown6" to="about">ABOUT</router-link></p>
    <p id="projects" class="threedDown6 menuitem" ><router-link class="threedDown6" to="projects">PROJECTS</router-link></p>
    <p id="resume" class="threedDown6 menuitem" @click="$parent.showResume = true">RESUME</p>
    
    <div id="qpos">
      <div id="qbutton" class="threedDownButton6 menuitem qbutton6" @click="$parent.changeView()">?</div>
    </div>
<!--      TO BE IMPLEMENTED:
          <div id="codepenDiv" class="menuitem">
              <div id="codepenScale">
          <div class="codepenLogo">
                  </div>
          </div>
          </div>
-->
          
<!--          ASSETS FOR DESIGN 6-->
          
          
      
      </div>
    
    <div id="groundWrapper">
    <div id="ground" class="ground6"><div class="bhshadow">Ben H</div></div>
      </div>
    
    
  </div>
        
        </div>
</template>

<script>
    
export default {
  name: 'Main1',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  overflow-x: hidden;
    display: flex;
/*    align-items: center;*/
  justify-content: center;
    
}

#container {
  position: absolute;
/*  width: 40%;*/
/*  margin-left: 30%;*/
  min-width: 500px;
  padding-top: 30px;
    -webkit-transform: translate3d(0,0,0);

}

#BenH {
  font: bold 100px Helvetica, Arial, Sans-Serif;
  transform: skewY(-10deg);
  margin-left: -170px;
  margin-top: 95px;
  margin-bottom: 50px;

}
.menuitem {
  position: absolute;
  font: bold 40px Helvetica, Arial, Sans-Serif;
  transform: skewY(-10deg) skewX(30deg) rotateX(-40deg);
  
  width: 30px;
}

#about {
  display: block;
    z-index: 10000;
  margin-top: -50px;
  margin-left: 30px;
}
#projects {
    display: block;
  margin-top: -15px;
  margin-left: 60px;
}
#resume {
    display: block;
  margin-top: 20px;
  margin-left: 90px;
}


/*
Codepen logo courtesy of Joshua Hibbert
https://codepen.io/joshnh/pen/ELvdt
*/
#codepenDiv {
/*    transform: scale(.2,.2);*/
    position: absolute;
}
#codepenScale {
    transform: scale(.1,.1);
}
.codepenLogo {
    transform-style: preserve-3d;
  background-color: #aaa;
  box-shadow: 0 1em 0 #aaa,
              0 2em 0 #aaa,
              0 3em 0 #aaa,
              0 3.5em 0 #aaa,
              0 8.5em 0 #aaa,
              0 9.5em 0 #aaa,
              0 10.5em 0 #aaa,
              0 11.5em 0 #aaa,
              0 12em 0 #aaa,
              7em 4.35em 0 #aaa,
              7em 5.35em 0 #aaa,
              7em 6.35em 0 #aaa,
              7em 7.35em 0 #aaa,
              7em 7.85em 0 #aaa,
              -7em 4.35em 0 #aaa,
              -7em 5.35em 0 #aaa,
              -7em 6.35em 0 #aaa,
              -7em 7.35em 0 #aaa,
              -7em 7.85em 0 #aaa;
  height: 1em;
  position: relative;
  width: 1em;
}
.codepenLogo:after,
.codepenLogo:before {
  box-shadow: inset 0 0 0 1.25em #aaa;
  content: '';
  height: 10.5em;
  left: .5em;
  position: absolute;
  top: -.5em;
  transform: perspective(9999px) rotateX(50deg) rotateZ(45deg);
  transform-origin: 0 0;
  width: 10.5em;
}
.codepenLogo:before {
  top: 4em;
}

/*
//
// Design 6
// #DCEDC1
*/


.threed6 { 
   color: #0066DD; 
   text-decoration: none;
   text-shadow: -1px -1px #0044AA, 
                -2px -2px #0044AA, 
                -3px -3px #0044AA,
                -4px -4px #0044AA,
                -5px -5px #0044AA,
                -6px -6px #0044AA,
                -7px -7px #0044AA,
                -8px -8px #0044AA,
                -9px -9px #0044AA,
                -10px -10px #0044AA,
                -11px -11px #0044AA;
}
.threedDown6 { 
   color: #0066DD; 
   text-decoration: none;
   text-shadow: -1px 1px #0044AA, 
                -1px 2px #0044AA, 
                -2px 3px #0044AA,
                -2px 4px #0044AA,
                -3px 5px #0044AA,
                -3px 6px #0044AA,
                -4px 7px #0044AA,
                -4px 8px #0044AA,
                -5px 9px #0044AA,
                -5px 10px #0044AA;
  
  
  -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
}

.threedDown6:hover { 
   color: #99DDFF; 
   padding-top: 3px;
  cursor: pointer;
   
   text-shadow: -1px 1px #0044AA, 
                -1px 2px #0044AA, 
                -2px 3px #0044AA,
                -2px 4px #0044AA,
                -3px 5px #0044AA,
                -3px 6px #0044AA,
                -4px 7px #0044AA;
  
}

.threedDownButton6 { 
    background-color: #0066DD;
   
   box-shadow: -1px 1px #0044AA, 
                -1px 2px #0044AA, 
                -2px 3px #0044AA,
                -2px 4px #0044AA,
                -3px 5px #0044AA,
                -3px 6px #0044AA,
                -4px 7px #0044AA,
                -4px 8px #0044AA,
                -5px 9px #0044AA,
                -5px 10px #0044AA;
  
  -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
}
.threedDownButton6:hover { 
   margin-top: 3px;
   cursor: help;
  background-color: #99DDFF;
   box-shadow: -1px 1px #0044AA, 
                -1px 2px #0044AA, 
                -2px 3px #0044AA,
                -2px 4px #0044AA,
                -3px 5px #0044AA,
                -3px 6px #0044AA,
                -4px 7px #0044AA;
  
}

.ground6 {
  overflow: hidden;
  position: absolute;
  width: 400px;
  height: 350px;
/*  background-color: #FFD3B6;*/
    background: #0022AA;	
background-size: 100px 100px;
background-color: #0022AA;
    
  border-radius: 50%;
  top: 100px;
  margin-left: -25px;
  z-index: -100;
  transform: skewY(-10deg) skewX(30deg) rotateX(-40deg);
    
    box-shadow: 
        
        -6px 18px #001133;
  
}
  
#groundWrapper {
  position: absolute;
  top: 0px;
  transform: translateZ(-1000px);
  z-index: -1000;
}

.qbutton6 {
  color: black;
  text-align: center;
  padding-top: 2px;
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #0066DD;
  border-radius: 50%;
  font: bold 20px Helvetica, Arial, Sans-Serif;
  
  
}
.bg6 {
  background: #001144;
/*  background-size: 2000px 2000px;*/
}
  
  #squid {
    position: absolute;
    top: 0;
    left: 300px;
    
/*    background-color: #001133;*/
    border: solid 1px white;
  }
  
  .squidPart {
    background-color: #001122;
    border-color: #001133;
  }
  
  
  #squidHead {
    position: absolute;
    left: 400px;
    width: 1px;
    height: 20px;
    border-top: solid #001144 300px ;
    border-bottom: solid #001144 300px ;
    border-left: solid #001122 800px ;
  }
  
  #squidEye {
    position: absolute;
    left: -700px;
    top: -150px;
    height: 300px;
    width: 300px;
    background-color: #EEEEAA;
/*    z-index: 1000;*/
    border-radius: 50%;
    z-index: 0;
/*    overflow: hidden;*/
    border: solid 1px #001122;
  }
  #squidEyelid {
    position: absolute;
    z-index: 20;
    height: 300px;
    width: 0px;
    right: 0;
    
    animation: eyeOpen 4s linear;
/*    animation-delay: 9s;*/
  }
  #squidPupil {
    height: 100px;
    width: 300px;
    background: black;
    border-radius: 100px;
    position: absolute;
    top: 100px;
    z-index: 10;
  }
  
  #squidBody {
    top: 150px;
    position: absolute;
    left: 0px;
    width: 400px;
    height: 300px;
    border-radius: 100px 0px 0px 100px;
  }
  
  @keyframes eyeOpen {
    0% {
      width: 300px;
    }
    99% {
      width: 300px;
    }
    
    100% {
      width: 0px;
    }
  }
  
  

/*// Needed to give ? button a position that doesn't mess with the hover anim*/
#qpos {
  position: absolute;
  margin-left: 300px;
  margin-top: -60px;
}

#flower {
  position: absolute;
  display: none;
  width: 10px;
  height: 20px;
  background-color: #99dd99;
  border-radius: 10px 0px 10px 0px;
  transform: rotate(-20deg);
}
.flower1 {
  margin-top: -10px;
}
.flower1:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #aeaafa;
  border-radius: 50%;
  margin-top: -10px;
  margin-left: 7px;
}
.flower2 {
  margin-top: 20px;
  margin-left: 10px;
}
.flower2:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #cf5faa;
  border-radius: 50%;
  margin-top: -10px;
  margin-left: 7px;
}
.flower3 {
  margin-top: 15px;
  margin-left: 40px;
}
.flower3:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #ffbfaa;
  border-radius: 50%;
  margin-top: -10px;
  margin-left: 7px;
}
.flower4 {
  margin-top: -80px;
  margin-left: 280px;
}
.flower4:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  margin-top: -10px;
  margin-left: 7px;
}
.flower5 {
  margin-top: -70px;
  margin-left: 260px;
}
.flower5:after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: yellow;
  border-radius: 50%;
  margin-top: -10px;
  margin-left: 7px;
}

.cloud {
  display: none;
  position: absolute;
  width: 120px;
  height: 20px;
  background-color: white;
  border-radius: 40px;
  margin-top: -250px;
  opacity: 1;
  animation: clouddrift 150s linear infinite;
  animation-delay: -30s;
}
.cloud:after {
  content: '';
  position: absolute;
  width: 220px;
  height: 20px;
  background-color: white;
  border-radius: 40px;
  margin-top: 25px;
  margin-left: -40px;
  
}

.cloud:before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 0px;
  margin-top: 15px;
  margin-left: 20px;
}

@keyframes rotateanim {
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}
@keyframes clouddrift {
  0% {
    left: -20%;
  }
  100% {
    left: 120%;
  }
}
@keyframes flowerSway {
  0% {
    
  }
}


.bhshadow {
  position: relative;
  overflow: hidden;
  z-index: -50;
  color: rgba(0,0,0,0);
  text-shadow: 0px 0px 5px rgba(0,0,0,.3);
  font: bold 100px Helvetica, Arial, Sans-Serif;
  transform: skewY(0deg) skewX(0deg) rotateX(0deg);
  margin-top: 0px;
  margin-left: 42px;
}


/*// ABOUT PAGE*/

#aboutPage {
  position: absolute;
  display: none;
  width: 100%;
  padding-left: 40px;
  left: -20px;
  top: 0px;
  min-height: 100%;
    padding-bottom: 100px;
  background-color: white;
  z-index: 1000;
  font: bold 25px Helvetica, Arial, Sans-Serif;
        text-shadow: -4px 4px white;
    overflow: hidden;

}
#suit {
    position: absolute;
    display: none;
    margin-left: 50%;
    bottom: -100px;
}

#abtcontent {
/*    width: 100%;*/
/*    //padding: 40px;*/
    display: none;
    background-color: lightpink;
    margin-right: 40%;
    margin-top: 20px;
    min-width: 400px;
    padding: 40px;
}

#projectsPage {
  position: absolute;
  display: none;
    align-content: center;
    
    text-align: center;
  width: 100%;
  padding-left: 40px;
  left: -20px;
  top: 0px;
  min-height: 100%;
    padding-bottom: 700px;
  background-color: black;
  z-index: 1000;
  font: 30px Helvetica, Arial, Sans-Serif;
    color: black;    
    overflow: hidden;
    
        
    
}

#wall {
    width: 120%;
   
/*    left: 0px;*/
    position: absolute;
    z-index: 0;
    
    background: repeating-linear-gradient(
        90deg,
        #606dbc,
        #606dbc 40px,
        #465298 40px,
        #465298 80px
);
}
#floor {
    
    position: absolute;
    z-index: 0;
    background: repeating-linear-gradient(
        30deg,
        #505dac,
        #505dac 20px,
        #364288 20px,
        #364288 40px
        
);
}

.floor1 {
    width: 120%;
    height: 50px;
    left: -74px;
    top: 200px;
}
.floor2 {
    width: 120%;
    height: 50px;
    left: -69px;
    top: 350px;
}
.floor3 {
    top: 850px;
    height: 50px;
    width: 120%;
    left: -66px;
}
.floor4 {
    top: 1350px;
    height: 50px;
    width: 120%;
    left: -63px;
}

.wall1 {
     height: 200px;
    left: 0px;
}
.wall2 {
     height: 100px;
    margin-top: 250px;
    left: -74px;
}
.wall3 {
    height: 450px;
    margin-top: 400px;
    left: -71px;
}
.wall4 {
    height: 450px;
    margin-top: 900px;
    left: -67px;
}
.wall5 {
    height: 1850px;
    margin-top: 1400px;
    left: -63px;
}

#projectsContent {
/*    width: 100%;*/
/*    //padding: 40px;*/
        font-family: monospace;

    display: none;
    margin: 0 auto;
    text-align: center;
    background-color: black;
/*    margin-top: 100px;*/
    min-width: 700px;
    width: 80%;
    z-index: 100;
    overflow: hidden;
/*    padding: 40px;*/
/*    animation: swivel 30s infinite linear;*/
    
}
#projectsPen {
    color: lightsalmon;
        transform: scale(1, 1);

    text-shadow: -1px -1px #912a55, 
                -3px -2px #912a55, 
                -5px -3px #912a55,
                -7px -4px #912a55;
        
        
        ;
    -webkit-transition: all 1s ease-out;
   -moz-transition:    all 1s ease-out;
   -ms-transition:     all 1s ease-out;
   -o-transition:      all 1s ease-out;
}
#projectsPen:hover {
    color: lightgreen;
    letter-spacing: 0px;
}
#projectsH1 {
    
    text-shadow: -1px -1px #912a55, 
                -3px -2px #912a55, 
                -5px -3px #912a55,
                -7px -4px #912a55,
                -9px -5px #912a55,
                -11px -6px #912a55,
                -13px -7px #912a55;
    -webkit-transition: all 1s ease-out;
   -moz-transition:    all 1s ease-out;
   -ms-transition:     all 1s ease-out;
   -o-transition:      all 1s ease-out;
    color: skyblue;
    font-size: 90px;
    margin-top: 0px;
    margin-left: 0px;
        padding-top: 140px;
        transform: scale(1, 1);
    height: 100px;

    
}
#projectsH1:hover {
    letter-spacing: 20px;
/*
        -15px -8px #912a55,
        -17px -9px #912a55,
        -19px -10px #912a55,
        -21px -11px #912a55;
    margin-top: 4px;
    margin-left: 8px;
*/
    transform: scale(1.1, 1);
}
#projectsDB {
    color: lightcyan;
    transform: scale(1,1);
    text-shadow: -1px -1px #912a55, 
                -3px -2px #912a55, 
                -5px -3px #912a55;
    -webkit-transition: all 1s ease-out;
   -moz-transition:    all 1s ease-out;
   -ms-transition:     all 1s ease-out;
   -o-transition:      all 1s ease-out;
}
#projectsDB:hover {
    
}
#projectsFB {
    color: lightgoldenrodyellow;
    text-shadow: -1px -1px #912a55, 
                -3px -2px #912a55, 
                -5px -3px #912a55;
    -webkit-transition: all 1s ease-out;
   -moz-transition:    all 1s ease-out;
   -ms-transition:     all 1s ease-out;
   -o-transition:      all 1s ease-out;
        transform: scale(1, 1);

}
#projectsFB:hover {
/*    color: dodgerblue;*/
/*    text-shadow: 0px 0px;*/
}
#projectsHex {
    color: lightgreen;
        transform: scale(1, 1);

    text-shadow: -1px -1px #912a55, 
                -3px -2px #912a55, 
                -5px -3px #912a55,
                -7px -4px #912a55;
        
        
        ;
    -webkit-transition: all 1s ease-out;
   -moz-transition:    all 1s ease-out;
   -ms-transition:     all 1s ease-out;
   -o-transition:      all 1s ease-out;
}
#projectsHex:hover {
    color: lightgreen;
    letter-spacing: 0px;
}
.hexD {
    height: 150px;
/*    background-color: pink;*/
}

#projIMG {
    max-height: 200px;
    transform: scale(1,1);
    -webkit-transition: all .2s ease-out;
   -moz-transition:    all .2s ease-out;
   -ms-transition:     all .2s ease-out;
   -o-transition:      all .2s ease-out;
    box-shadow: -1px -1px #912a55, 
                -3px -2px #912a55, 
                -5px -3px #912a55,
                -7px -4px #912a55,
                -9px -5px #912a55,
                -11px -6px #912a55,
                -13px -7px #912a55;
    border: 3px solid green;
    
}
#projIMG:hover {
    box-shadow: -1px -1px #912a55, 
                -3px -2px #912a55, 
                -5px -3px #912a55,
                -7px -4px #912a55;
/*
                -9px -5px #912a55,
                -11px -6px #912a55,
                -13px -7px #912a55;

*/
    margin-top: -3px;
    margin-bottom: 3px;
    margin-left: -13px;
}
#projA {
    text-decoration: none;
}
#projBack {
    color: white;
        transform: scale(1, 1);
    margin-top: -20px;

    text-shadow: -1px -1px #912a55, 
                -3px -2px #912a55, 
                -5px -3px #912a55;
        
    -webkit-transition: all .1s ease-out;
   -moz-transition:    all .1s ease-out;
   -ms-transition:     all .1s ease-out;
   -o-transition:      all .1s ease-out;
}
#projBack:hover {
    text-shadow: -2px -1px #912a55,
            -3px -2px #912a55;
    margin-top: -21px;
    padding-bottom: 1px;
    margin-left: -3px;
    padding-bottom: 1px;
    
    color: white;
    cursor: pointer;
/*    transform: scale(1.1, 1.1);*/
}

#x {
    display: none;
    top: 0px;
    left: 0px;
    background-color: black;
    opacity: .5;
    position: absolute;
    height: 200%;
    width: 100%;
}

#resumePage {
    position: absolute;
    z-index: 10000;
    display: none;
    background-color: beige;
    margin: 0 auto;
    border: solid 10px darkred;
/*    height: 40%;*/
    min-width: 350px;
    width: 40%;
    margin-top: 30px;
    padding-bottom: 40px;
      font: 30px Helvetica, Arial, Sans-Serif;
    text-align: center;

}

@keyframes swivel {
    0% {
            transform: rotateY(10deg) skewY(3deg);

    }
    25% {
            transform: rotateY(0deg) skewY(0deg);

    }
    50% {
            transform: rotateY(-10deg) skewY(-3deg);

    }
    75% {
            transform: rotateY(0deg) skewY(0deg);

    }
    100% {
            transform: rotateY(10deg) skewY(3deg);

    }
}


a {
    color: blueviolet;
    text-shadow: -4px 4px yellow;
}

button {
    font: bold 18px Helvetica, Arial, Sans-Serif;
    color: deeppink;
    padding: 10px 30px 10px 30px;
    background-color: aqua;
    border: 7px solid yellow;
    box-shadow: -5px 5px deeppink;
    margin-bottom: 3px;
}
button:hover {
    
    color: aqua;
    margin-top: 3px;
    margin-left: -3px;
    margin-bottom: 0px;5
    padding: 10px 30px 10px 30px;
    background-color: deeppink;
    border: 7px solid yellow;
    box-shadow: -2px 2px deeppink;
}
</style>
