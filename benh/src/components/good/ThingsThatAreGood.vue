<template>
  <div id="ttag">
    
    <div id="title" class="widget">
      <h1 class="h1-1">Things that</h1>
      <h1 class="h1-2">are Good</h1>
      <p class="p-1">This is a collection of things that inspire me
      <p class="p-2">- art tv books, you know whatever - </p>
      <p class="p-3">and also a convenient way for me to catalogue</p>
      <p class="p-4">the things I'm into into as a sort of taste-diary for any</p>
      <p class="p-5">given part of my life. Plus, I 
        often want to recommend stuff to people</p>
      <p class="p-6">and forget what I like, you know?
        So yeah, thanks for checkin' it out haha, uh, yeah cool.</p>
      <div class="bottom-square" style="height:1px;"></div>
      <div class="bottom-square"></div>
      <div class="bottom-square" style="height:10px;"></div>
      <div class="bottom-square" style="height:15px;"></div>
      <div class="bottom-square" style="height:25px;"></div>
      <div class="bottom-square" style="height:35px;"></div>

      
    </div>
    <div class="widget">
      <h2 class="subtitle">Music:</h2>
      <flickity ref="musicFlickity" :options="flickityOptions"
                style="width: 100%;">
        <div class="item">
          <img src="../../../static/goodthings/music/damn.jpg"
               class="itemImage">
          <div class="itemText">
            <h3>Damn. by Kendrick</h3>
          </div>
        </div>
        <div class="item">
          <img src="../../../static/goodthings/music/damn.jpg"
               class="itemImage">
        </div>
      </flickity>
                              

    </div>
  </div>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
  data() {
    return {
      flickityOptions: {
      prevNextButtons: true,
      pageDots: true,
      wrapAround: false
 
      // any options from Flickity can be used
      }
    }
  }, 
  components: {
    Flickity
  },
  methods: {
    next: function() {
      this.$refs.musicFlickity.next();
    },
 
    previous: function() {
      this.$refs.musicFlickity.previous();
    }
  }, 
  mounted() {
    
  }
}
</script>

<style scoped>
  #ttag {
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0px;
    left: 0px;
    color: #DEB52D;
    padding-top: 100px;
    background: #201C25;
    text-align: left;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  .widget {
    margin: 0px;
    min-height: 500px;
    width: 500px;
/*    border: solid red 1px;*/
  }
  h1 {
    font-size: 90px;
    margin: 0px;
    line-height: 90px;
  }
  .h1-1 {
    letter-spacing: 0px;
  }
  .h1-2 {
    letter-spacing: 11px;
  }
  p {
    margin: 0px;
    font-weight:700;
    letter-spacing: normal;
  }
  .p-1 {
    font-size: 23px;
    line-height: 20px;
  }
  .p-2 {
    font-size: 28px;
    line-height: 26px;
  }
  .p-3 {
    font-size: 20px;
    line-height: 18px;
    letter-spacing: .7px;
  }
  .p-4 {
    letter-spacing: 1.2px;
    line-height: 19px;
  }
  .p-5 {
    font-size: 14px;
    letter-spacing: .15px;
    line-height: 12px;
  }
  .p-6 {
    font-size: 11px;
    line-height: 9px;
    letter-spacing: .15px;
  }
  .bottom-square {
    height: 5px;
    width: 93.5%;
    margin-top: 5px;
    background: #DEB52D;
  }
  .subtitle {
    color:#201C25;
    margin: 0px;
    font-size: 45px;
    filter: brightness(300%);
  }
  .item {
    height: 350px;
    overflow: hidden;
    width: 100%;
    margin: 0px;
    padding:0px;
    text-align: center;
  }
  .itemImage {
    width: 460px;
    max-width: 100%;
    z-index: 0;
    margin: 0px;
    transition-duration: .5s;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .itemImage:hover {
    filter: brightness(40%);
    margin-top: -20px;
  }
  .itemText {
    position: absolute;
    z-index: 100;
    color: white;
    left: 25px;
    opacity: 0;
    transition-duration: .5s;
  }
  .item:hover .itemText {
    opacity: 1;
  }
  h3 {
    font-size: 30px;
  }
  
</style>