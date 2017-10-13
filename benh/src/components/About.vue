<template>
  <div id="about">
    <div id="aboutBox" v-bind:style="{
                  transform: 'rotateY(' + (-rotate) + 'deg)'
                  }">
      <div id="face1" class="face general">
        <div class="faceText">
          <h2 class="aboutTitle">ABOUT</h2>
          <span class="aboutBack"><router-link to="/">BACK HOME</router-link></span>
          <h4>
            <span class="opt selected"
                  @click="rotate = 0">General</span>
             • 
            <span class="opt"
                  @click="rotate = 90">Coding</span>
             • 
            <span class="opt"
                  @click="rotate = 180">Design</span>
             • 
            <span class="opt"
                  @click="rotate = 270">Music</span>
          </h4>
          <p>Hey, I'm Ben Holland! I'm going by Ben H on this site because it makes the URL shorter, and is maybe more memorable. Hi!<br><br>I'm a junior computer science major at Kent State University.  I was raised in Medina Ohio, and the north-east Ohio community means a lot to me, especially the DIY music scene and the tech industry. Check out my projects here! </p>
        </div>
      </div>
      <div id="face2" class="face music">
        <div class="faceText">
          <h2 class="aboutTitle">ABOUT</h2>
          <span class="aboutBack"><router-link to="/">BACK HOME</router-link></span>
          <h4>
            <span class="opt"
                  @click="rotate = 0">General</span>
             • 
            <span class="opt"
                  @click="rotate = 90">Coding</span>
             • 
            <span class="opt"
                  @click="rotate = 180">Design</span>
             • 
            <span class="opt selected"
                  @click="rotate = 270">Music</span>
          </h4>
          <p>I have played the drums for 8+ years-- two of which were in my current band, <a href="www.thedrawingblanks.com">The Drawing Blanks.</a>  I also play guitar, bass, and sing.  <br><br>Music theory is a big passion of mine- I only ever took one formal music theory class, but learned plenty from making <a href="www.soundcloud.com/benholland21">dumb 8-bit songs on Garageband</a>, and learning from my <a href="https://twitter.com/bandforeveryone">extremely talented friends.</a></p>
        </div>
      </div>
      <div id="face3" class="face coding">
        <div class="faceText">
          <h2 class="aboutTitle">ABOUT</h2>
          <span class="aboutBack"><router-link to="/">BACK HOME</router-link></span>
          <h4>
            <span class="opt"
                  @click="rotate = 0">General</span>
             • 
            <span class="opt selected"
                  @click="rotate = 90">Coding</span>
             • 
            <span class="opt "
                  @click="rotate = 180">Design</span>
             • 
            <span class="opt"
                  @click="rotate = 270">Music</span>
          </h4>
          <p>
          JS junkie, front end friend. I've always loved making things, especially pretty/unique things and interactive things.  Check out my Projects page or Resume to learn more.<br><br><b>If you're looking to hire a programmer/designer, reach out to me!!</b> I love this stuff and would love nothing more than to make my living doing it.
          </p>
        </div>
      </div>
      <div id="face4" class="face design">
        <div class="faceText">
          <h2 class="aboutTitle">ABOUT</h2>
          <span class="aboutBack"><router-link to="/">BACK HOME</router-link></span>
          <h4>
            <span class="opt"
                  @click="rotate = 0">General</span>
             • 
            <span class="opt"
                  @click="rotate = 90">Coding</span>
             • 
            <span class="opt selected"
                  @click="rotate = 180">Design</span>
             • 
            <span class="opt "
                  @click="rotate = 270">Music</span>
          </h4>
          <p>I love front end -- hopefully you can tell? -- but I'm also pretty decent at photoshop, mostly poster design pixel art. Hoping to get better at vector art too!<br><br>I'll put some of my stuff up here when I get the chance. If you want some design work done, feel free to reach out. </p>
        </div>
      </div>
<!--
      <div id="face5" class="face"></div>
      <div id="face6" class="face"></div>
-->
    </div>
  </div>
</template>

<script>
    
export default {
  name: 'About',
  components: {
  },
  data () {
    return {
      rotate: 0
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html {
    height: 100%;
  }
  
  .aboutBack {
    position: absolute;
    right: 20px;
    top: 30px;
    cursor: pointer;
    text-decoration: underline;
    font-size: 12px;
    color: black;
  }
  .aboutBack:hover {
    color: purple;
  }
  
  .aboutTitle {
    margin-bottom: -20px;
  }
  .faceText {
    padding: 20px;
  }
  .opt {
    color: black;
  }
  .opt:hover {
    color: red;
    cursor: pointer;
  }
  .selected {
    text-decoration: underline
  }
  
  #about {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
/*    background: linear-gradient( #626EEF, #09A8FA) no-repeat fixed;*/
    background: #09A8FA;
    margin: 0;
    background-position: 0px -200px;
    perspective: 1000px;
    text-align: left;
    
  }
  
  #aboutBox {
    width: 400px;
    min-height: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    transform-style: preserve-3d;
    transition-duration: 1s;
/*    animation: rotate 10s linear;*/
  }
  
  .face {
    width: 400px;
    height: 50vh;
    transform-style: preserve-3d;
    position: absolute;
    opacity: 1;
/*    overflow: scroll;*/
  }
  
  #face1 {
    
    background: #FFFFC1;
    transform: translateZ(200px);
  }
  #face2 {
    background: #FFD2A5;
    transform: rotateY(-90deg) translateZ(200px) translateX(0px);
  }
  #face3 {
    background: #D988BC;
    transform: rotateY(90deg) translateZ(200px) translateX(0px);
  }
  #face4 {
    background: #FFA8B8;
    transform: rotateY(180deg) translateZ(200px);
  }
  
  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    } to {
      transform: rotateY(360deg);
    }
  }
  
  
</style>
