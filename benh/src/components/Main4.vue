<template>
    <div id="bg" class="bg4">
  <div id="container">
      <div id="aboveGround">
    <h1 id="BenH" class="threed4">Ben H</h1>
    
    <p id="about" class="threedDown4 menuitem"><router-link class="threedDown4" to="about">ABOUT</router-link></p>
    <p id="projects" class="threedDown4 menuitem" ><router-link class="threedDown4" to="projects">PROJECTS</router-link></p>
    <p id="resume" class="threedDown4 menuitem" @click="$parent.showResume = true">RESUME</p>
    
    <div id="qpos">
      <div id="qbutton" class="threedDownButton4 menuitem qbutton4" @click="$parent.changeView()">?</div>
    </div>
<!--      TO BE IMPLEMENTED:
          <div id="codepenDiv" class="menuitem">
              <div id="codepenScale">
          <div class="codepenLogo">
                  </div>
          </div>
          </div>
-->
          
<!--          ASSETS FOR DESIGN 5-->
          
          <div class="design5">
          <div id="stem"></div>
          </div>
          
<!--    ASSETS FOR DESIGN 4-->
          
          <div class="design4">
          <div id="cube1">
              <div id="back" class="smSquare">
      </div>
      <div id="front" class="smSquare">
      </div>
      <div id="left" class="smSquare">
      </div>
      <div id="right" class="smSquare">
      </div>
      <div id="top" class="smSquare">
      </div>
      <div id="bottom" class="smSquare">
      </div>
              </div>
              <div id="scaleDown">
              <div id="cube2">
              <div id="back" class="smSquare">
      </div>
      <div id="front" class="smSquare">
      </div>
      <div id="left" class="smSquare">
      </div>
      <div id="right" class="smSquare">
      </div>
      <div id="top" class="smSquare">
      </div>
      <div id="bottom" class="smSquare">
      </div>
              </div>
              </div>
          </div>
    
    <!-- ASSETS FOR DESIGN 3 -->
    
    <div class="design3">
      <div class="volcano">
          <div class="smoke"></div>
          <div class="smoke2"></div>
        </div>
    <div class="volcano2">
        <div class="smoke"></div>
          <div class="smoke2"></div>
        </div>
    <div class="volcano3">
        <div class="smoke"></div>
          <div class="smoke2"></div>
        </div>
    </div>
    
    <!-- ASSETS FOR DESIGN 2 -->
    
    <div class="spheres">
    <div id="flt1"><div id="sphere1"></div></div>
    <div id="flt2"><div id="sphere2"></div></div>
      <div id="flt3"><div id="sphere3"></div></div>
    <div id="flt4"><div id="sphere4"></div></div>
    <div id="flt5"><div id="sphere5"></div></div>
    <div id="flt6"><div id="sphere6"></div></div>
    <div id="flt7"><div id="sphere7"></div></div>
    </div>
    
    <!-- ASSETS FOR DESIGN 1 -->
    
    <div class="cloud"></div>
    <div id="flowers">
    <div id="flower" class="flower1"></div>
    <div id="flower" class="flower2"></div>
    <div id="flower" class="flower3"></div>
    <div id="flower" class="flower4"></div>
    <div id="flower" class="flower5"></div>
    </div>
      </div>
    
    <div id="groundWrapper">
    <div id="ground" class="ground4"><div class="bhshadow">Ben H</div></div>
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

.bg1 {
    background-color: cyan;
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
// Design 4
//
*/


.threed4 { 
   color: white; 
   
   text-shadow: -1px -1px cyan, 
                -2px -2px cyan, 
                -3px -3px cyan,
                -4px -4px cyan,
                -5px -5px cyan,
                -6px -6px cyan,
                -7px -7px cyan,
                -8px -8px cyan,
                -9px -9px cyan,
                -10px -10px cyan,
                -11px -11px cyan;
}
.threedDown4 { 
   color: white; 
   text-decoration: none;
   text-shadow: -1px 1px yellow, 
                -1px 2px yellow, 
                -2px 3px yellow,
                -2px 4px yellow,
                -3px 5px yellow,
                -3px 6px yellow,
                -4px 7px yellow,
                -4px 8px yellow,
                -5px 9px yellow,
                -5px 10px yellow;
  
  
  -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
}

.threedDown4:hover { 
   color: white; 
   padding-top: 3px;
  cursor: pointer;
   
   text-shadow: -1px 1px yellow, 
                -1px 2px yellow, 
                -2px 3px yellow,
                -2px 4px yellow,
                -3px 5px yellow,
                -3px 6px yellow,
                -4px 7px yellow;
  
}

.threedDownButton4 { 
    background-color: white;
   
   box-shadow: -1px 1px hotpink, 
                -1px 2px hotpink, 
                -2px 3px hotpink,
                -2px 4px hotpink,
                -3px 5px hotpink,
                -3px 6px hotpink,
                -4px 7px hotpink,
                -4px 8px hotpink,
                -5px 9px hotpink,
                -5px 10px hotpink;
  
  -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
}
.threedDownButton4:hover { 
   margin-top: 3px;
   cursor: help;
  background-color: white;
   box-shadow: -1px 1px hotpink, 
                -1px 2px hotpink, 
                -2px 3px hotpink,
                -2px 4px hotpink,
                -3px 5px hotpink,
                -3px 6px hotpink,
                -4px 7px hotpink;
  
}

.ground4 {
  overflow: hidden;
  position: absolute;
  width: 400px;
  height: 350px;
  background-color: white;
  border-radius: 50%;
  top: 100px;
  margin-left: -25px;
  z-index: -100;
  transform: skewY(-10deg) skewX(30deg) rotateX(-40deg);
    
    box-shadow: 
        -3px 9px yellow,
        -6px 18px hotpink,
        -9px 27px cyan;
  
}

.qbutton4 {
  color: black;
  text-align: center;
  padding-top: 2px;
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: lightyellow;
  border-radius: 50%;
  font: bold 20px Helvetica, Arial, Sans-Serif;
  
  
}
.bg4 {
  background:  linear-gradient(white, lightcyan) no-repeat;
/*  background-size: 2000px 2000px;*/
}


/*
//
// Design 5
// #DCEDC1
*/


.threed5 { 
   color: #FF8A85; 
   
   text-shadow: -1px -1px #FFAAA5, 
                -2px -2px #FFAAA5, 
                -3px -3px #FFAAA5,
                -4px -4px #FFAAA5,
                -5px -5px #FFAAA5,
                -6px -6px #FFAAA5,
                -7px -7px #FFAAA5,
                -8px -8px #FFAAA5,
                -9px -9px #FFAAA5,
                -10px -10px #FFAAA5,
                -11px -11px #FFAAA5;
}
.threedDown5 { 
   color: #FF8A85; 
   text-decoration: none;
   text-shadow: -1px 1px #FFAAA5, 
                -1px 2px #FFAAA5, 
                -2px 3px #FFAAA5,
                -2px 4px #FFAAA5,
                -3px 5px #FFAAA5,
                -3px 6px #FFAAA5,
                -4px 7px #FFAAA5,
                -4px 8px #FFAAA5,
                -5px 9px #FFAAA5,
                -5px 10px #FFAAA5;
  
  
  -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
}

.threedDown5:hover { 
   color: #FF8A85; 
   padding-top: 3px;
  cursor: pointer;
   
   text-shadow: -1px 1px #FFAAA5, 
                -1px 2px #FFAAA5, 
                -2px 3px #FFAAA5,
                -2px 4px #FFAAA5,
                -3px 5px #FFAAA5,
                -3px 6px #FFAAA5,
                -4px 7px #FFAAA5;
  
}

.threedDownButton5 { 
    background-color: #FF8A85;
   
   box-shadow: -1px 1px #FFAAA5, 
                -1px 2px #FFAAA5, 
                -2px 3px #FFAAA5,
                -2px 4px #FFAAA5,
                -3px 5px #FFAAA5,
                -3px 6px #FFAAA5,
                -4px 7px #FFAAA5,
                -4px 8px #FFAAA5,
                -5px 9px #FFAAA5,
                -5px 10px #FFAAA5;
  
  -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
}
.threedDownButton5:hover { 
   margin-top: 3px;
   cursor: help;
  background-color: #FF8A85;
   box-shadow: -1px 1px #FFAAA5, 
                -1px 2px #FFAAA5, 
                -2px 3px #FFAAA5,
                -2px 4px #FFAAA5,
                -3px 5px #FFAAA5,
                -3px 6px #FFAAA5,
                -4px 7px #FFAAA5;
  
}

.ground5 {
  overflow: hidden;
  position: absolute;
  width: 400px;
  height: 350px;
/*  background-color: #FFD3B6;*/
    background: 
linear-gradient(135deg, #FFC3A6 25%, transparent 25%) -50px 0,
linear-gradient(225deg, #FFC3A6 25%, transparent 25%) -50px 0,
linear-gradient(315deg, #FFC3A6 25%, transparent 25%),
linear-gradient(45deg, #FFC3A6 25%, transparent 25%);	
background-size: 100px 100px;
background-color: #FFD3B6;
    
  border-radius: 50%;
  top: 100px;
  margin-left: -25px;
  z-index: -100;
  transform: skewY(-10deg) skewX(30deg) rotateX(-40deg);
    
    box-shadow: 
        
        -6px 18px #DFB396;
  
}

.qbutton5 {
  color: black;
  text-align: center;
  padding-top: 2px;
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #FF8A85;
  border-radius: 50%;
  font: bold 20px Helvetica, Arial, Sans-Serif;
  
  
}
.bg5 {
  background: #A8E6CF;
/*  background-size: 2000px 2000px;*/
}

/*
//
// ASSETS FOR DESIGN 4
//
*/

@keyframes rotateXYZ {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform:  rotateX(360deg) rotateY(360deg);
  }
}
@keyframes orbit {
    from {
        transform: rotateX(45deg) rotateY(0deg);
    }
    to {
        transform: rotateX(45deg) rotateY(360deg);
    }
}


.design4 {
    display: block;
    z-index: -300;
/*      transform-style: preserve-3d;*/

    perspective: 1200px;
}

#orbit {
    animation: orbit 20s linear infinite;
    position: absolute;
    left: -300px;
    width: 800px;
}

#scaleDown {
    transform: scale(.5,.5);
    
}

#cube1 {
    animation: rotateXYZ 10s linear infinite;
    
    position: absolute;
    top: -100px;
    right: -100px;
  width: 5em;
  height: 5em;
  margin: 0 auto;
  margin-top: 1.25em;
  transform-style: preserve-3d;
  transform: translateZ(-200px);
}
#cube2 {
    animation: rotateXYZ 10s linear infinite;
    animation-delay: -5s;
    position: absolute;
    top: 400px;
    left: -600px;
  width: 5em;
  height: 5em;
  margin: 0 auto;
  margin-top: 1.25em;
  transform-style: preserve-3d;
/*  transform: translateZ(-500px) scale(2,2);*/
}

.smSquare {
  left: 0;
  right: 0;
  transform-style: preserve-3d;

  position: absolute;
  width: 5em;
  height: 5em;
  opacity: .9;
/*  border: solid 1px black;*/
}



#front {
  background-color: cyan;
  transform: translateZ(2.5em);
}
#back {
  background-color: #FFAA00;
  transform: translateZ(-2.5em);
}
#left{
  transform: rotateY(90deg) translateZ(-2.5em);
  background-color: #AAFF00;
}
#right{
  transform: rotateY(90deg) translateZ(2.5em);
  background-color: #AA00FF;
}
#top{
  transform: rotateX(90deg) translateZ(-2.5em);
  background-color: yellow;
}
#bottom{
  transform: rotateX(90deg) translateZ(2.5em);
  background-color: hotpink;
}


/*
//
// ASSETS FOR DESIGN 3
//
*/



.design3 {
  display: none;
    height: 100px;
/*    transform: translateZ(-1000px);*/
/*    overflow-y: hidden;*/
}

#floaty {
    transform: scale(1,1);
    position: absolute;
  z-index: -150;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background-color: pink;
  
}

.smoke:before {
    content: '';
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: gray;
    z-index: 10000;
    position: absolute;
/*    top: -6px;*/
    opacity: .5;
    animation: smokeUp 3s linear infinite;
}

.smoke:after {
    content: '';
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background-color: gray;
    z-index: 10000;
/*    top: -60px;*/
    position: absolute;
    opacity: .4;
    animation: smokeUp 4s linear infinite;
    animation-delay:  -3s;
    top: 5px;
}
.smoke2:before {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: gray;
    z-index: 10000;
    position: absolute;
    margin-left: 5px;
/*    top: -6px;*/
    opacity: .5;
    animation: smokeUp 3s linear infinite;
    animation-delay: -2s;
}

.smoke2:after {
    content: '';
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: gray;
    z-index: 10000;
/*    top: -60px;*/
    position: absolute;
    opacity: .4;
    animation: smokeUp 2s linear infinite;
    animation-delay:  3s;
    top: 5px;
}

.volcano {
  width: 10px;
	height: 0;
	border-left: 20px solid transparent;
	border-right: 15px solid transparent;
	border-bottom: 40px solid #5b0000;
  border-radius: 30%;
  position: absolute;
  
}
.volcano:after {
  content:'';
  width: 10px;
  height: 5px;
  margin-top: -3px;
  border-radius: 50%;
  animation: lavaglow 5s linear infinite;
  position: absolute;
  
}
.volcano2 {
  width: 7px;
	height: 0;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 35px solid #3b0000;
  border-radius: 20%;
  position: absolute;
  margin-left: 30px;
  margin-top: 20px;
}
.volcano2:after {
  content:'';
  width: 7px;
  height: 4px;
  margin-top: -3px;
  border-radius: 50%;
  animation: lavaglow 7s linear infinite;
  position: absolute;
  z-index: 1100;
}
.volcano3 {
  width: 10px;
	height: 0;
	border-left: 15px solid transparent;
	border-right: 20px solid transparent;
	border-bottom: 30px solid #5b0000;
  border-radius: 30%;
  position: absolute;
  margin-left: 300px;
}
.volcano3:after {
  content:'';
  width: 10px;
  height: 3px;
  margin-top: -3px;
  border-radius: 50%;
  animation: lavaglow 4s linear infinite;
  position: absolute;
  
}

@keyframes floatDown {
  to {
    top: -200px;
    background-color: red;
  }
  from {
    top: 1000px;
    background-color: white;
  }
}
@keyframes lavaglow {
  0% {
    background-color: yellow;
  }
  50% {
    background-color: #fd7533;
  }
  100% {
    background-color: yellow;
  }
}
@keyframes smokeUp {
    from {
        margin-top: -10px;
    }
    to {
        margin-top: -20px;
        opacity: .2;
    }
}

/*
//
// ASSETS FOR DESIGN 2
// 
*/

.spheres {
  display: none;
  
}


#sphere1 {
  animation: hue-change 20s linear infinite;
  position: absolute;
  width: 75px;
  height:75px;
  background: #7dff63; /* Old browsers */
background: -moz-linear-gradient(-45deg, #7dff63 0%, #6d6d6d 0%, #2989d8 50%, #207cca 51%, #7db9e8 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #7dff63 0%,#6d6d6d 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #7dff63 0%,#6d6d6d 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7dff63', endColorstr='#7db9e8',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 50%;
  
  margin-left: -90px;
    
    -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
}
#sphere2 {
  animation: hue-change 20s linear infinite;
  position: absolute;
  width: 300px;
  height:300px;
  background: #7dff63; /* Old browsers */
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#683b40+0,ff1a00+100 */
background: #683b40; /* Old browsers */
background: -moz-linear-gradient(-45deg, #683b40 0%, #ff1a00 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #683b40 0%,#ff1a00 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #683b40 0%,#ff1a00 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#683b40', endColorstr='#ff1a00',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 50%;
  
  margin-left: -90px;
  margin-top: -300px;
  z-index: -110;
    
    -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
  
}
#sphere3 {
  animation: hue-change 20s linear infinite;
  position: absolute;
  width: 200px;
  height:200px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#683b40+0,0f7500+0,17ea00+100 */
background: #683b40; /* Old browsers */
background: -moz-linear-gradient(-45deg, #683b40 0%, #0f7500 0%, #17ea00 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #683b40 0%,#0f7500 0%,#17ea00 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #683b40 0%,#0f7500 0%,#17ea00 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#683b40', endColorstr='#17ea00',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 50%;
  
  margin-left: -290px;
  margin-top: -200px;
  z-index: -110;
    
    -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
  
}
#sphere4 {
  animation: hue-change 20s linear infinite;
  position: absolute;
  width: 100px;
  height:100px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#683b40+0,848000+0,fcf400+100 */
background: #683b40; /* Old browsers */
background: -moz-linear-gradient(-45deg, #683b40 0%, #848000 0%, #fcf400 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #683b40 0%,#848000 0%,#fcf400 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #683b40 0%,#848000 0%,#fcf400 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#683b40', endColorstr='#fcf400',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#683b40', endColorstr='#17ea00',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 50%;
  
  margin-left: 300px;
  margin-top: -200px;
  z-index: -110;
  
    -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
}
#sphere5 {
  animation: hue-change 20s linear infinite;
  position: absolute;
  width: 25px;
  height:25px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#683b40+0,8e008e+1,f200ff+100 */
background: #683b40; /* Old browsers */
background: -moz-linear-gradient(-45deg, #683b40 0%, #8e008e 1%, #f200ff 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #683b40 0%,#8e008e 1%,#f200ff 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #683b40 0%,#8e008e 1%,#f200ff 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#683b40', endColorstr='#f200ff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 50%;
  
  margin-left: 450px;
  margin-top: -70px;
  z-index: -110;
    
    -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
  
}
#sphere6 {
  animation: hue-change 20s linear infinite;
  position: absolute;
  width: 80px;
  height:89px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#683b40+0,965a00+1,ff8c00+100 */
background: #683b40; /* Old browsers */
background: -moz-linear-gradient(-45deg, #683b40 0%, #965a00 1%, #ff8c00 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #683b40 0%,#965a00 1%,#ff8c00 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #683b40 0%,#965a00 1%,#ff8c00 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#683b40', endColorstr='#ff8c00',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#683b40', endColorstr='#fcf400',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#683b40', endColorstr='#17ea00',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 50%;
  
  margin-left: 350px;
  margin-top: 10px;
  z-index: 110;
    
    -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
  
}
#sphere7 {
  animation: hue-change 20s linear infinite;
  position: absolute;
  width: 150px;
  height: 150px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#b7acb4+0,fba6e1+50,ff7cd8+100 */
background: #b7acb4; /* Old browsers */
background: -moz-linear-gradient(-45deg, #b7acb4 0%, #fba6e1 50%, #ff7cd8 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(-45deg, #b7acb4 0%,#fba6e1 50%,#ff7cd8 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(135deg, #b7acb4 0%,#fba6e1 50%,#ff7cd8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b7acb4', endColorstr='#ff7cd8',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  border-radius: 50%;
  
  margin-left: 100px;
  margin-top: 50px;
  z-index: 110;
  
    -webkit-transition: all 0.12s ease-out;
   -moz-transition:    all 0.12s ease-out;
   -ms-transition:     all 0.12s ease-out;
   -o-transition:      all 0.12s ease-out;
}

/*
#sphere1:hover {
    margin-top: -20px;
      animation: hue-change 1s linear infinite;

}
#sphere2:hover {
    margin-top: -20px;
      animation: hue-change 1s linear infinite;

}
#sphere3:hover {
    margin-top: -20px;
      animation: hue-change 1s linear infinite;

}
#sphere4:hover {
    margin-top: -20px;
      animation: hue-change 1s linear infinite;

}
#sphere5:hover {
    margin-top: -20px;
      animation: hue-change 1s linear infinite;

}
#sphere6:hover {
    margin-top: -20px;
      animation: hue-change 1s linear infinite;

}
#sphere7:hover {
    margin-top: -20px;
      animation: hue-change 1s linear infinite;

}
*/


#flt1 {
  position: absolute;
  animation: sphereFloat 20s linear infinite;
}
#flt2 {
  position: absolute;
  animation: sphereFloat 20s linear infinite;
  animation-delay: -5s;
}
#flt3 {
  position: absolute;
  animation: sphereFloat 20s linear infinite;
  animation-delay: -10s;
}
#flt4 {
  position: absolute;
  animation: sphereFloat 20s linear infinite;
  animation-delay: -13s;
}
#flt5 {
  position: absolute;
  animation: sphereFloat 20s linear infinite;
  animation-delay: -8s;
}
#flt6 {
  position: absolute;
  animation: sphereFloat 20s linear infinite;
  animation-delay: -17s;
}
#flt7 {
  position: absolute;
  animation: sphereFloat 20s linear infinite;
  animation-delay: -9s;
}


@keyframes sphereFloat {
  0% {
    margin-top: 0px;
  }
  50% { margin-top: 50px; }
  100% {margin-top: 0px; }
}

@keyframes hue-change {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);;
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
