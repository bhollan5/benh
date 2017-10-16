<template>
  <div id="space">
<planet
        v-bind:continentNum="Number(continentNum)"
        v-bind:cloudNum="Number(cloudNum)"
        v-bind:planetColor="planetColor"
        v-bind:landColor="landColor"
        v-bind:cloudColor="cloudColor"
        ></planet>

<div id="moon"></div>

<div id="controls">
  <div class="optRow" style="display: none;">
    <p>Auto update:</p>
    <label class="switch">
      <input type="checkbox">
      <span class="slider round"></span>
    </label>
  </div>
  <div class="optRow">
  <div class="opt">
    Planet Color:<br>
    <input type="color" id="planetColor" v-model="planetColor">
  </div>
  <div class="opt">
    Land Color:<br>
    <input type="color" id="landColor" v-model="landColor">
  </div>
  <div class="opt">
    Cloud Color:<br>
    <input type="color" id="cloudColor" v-model="cloudColor">
  </div>
  </div>
  
  <div class="optRow">
    <div class="opt">
      
      Continents:<br>
      <input type="number" class="num" id="continentNum" v-model="continentNum" min="0" max="100">
    </div>
    <div class="opt">
      
      Clouds:<br>
      <input type="number" class="num" id="cloudNum" v-model="cloudNum" min="0" max="100">
    </div>
    <!--<div class="opt">
      Shadow:
      <input type="checkbox"  id="shadowTog">
      
    </div>-->
  </div>
  
  <div id="submit" class="optRow">
    <button onclick="makePlanet()" style="display: none;">Make Planet</button>
    <button @click="randomize()">Randomize Planet</button>
    
  </div>
  
</div>
    </div>
</template>

<script>
  
import planet from './Planet.vue';
import toggle from './Toggle.vue';

export default {
  name: 'About',
  components: {
    planet,
    toggle
  },
  data () {
    return {
      planetColor: '#5A2744',
      landColor: '#7A4764',
      cloudColor: '#FFFFFF',
      
      cloudNum: 40,
      continentNum: 30
    }
  },
  methods: {
    randomize: function() {
      this.planetColor = this.randomHex();
      this.cloudColor = this.randomHex();
      this.landColor = this.randomHex();
      
      this.cloudNum = Math.floor(Math.random() * 50) + 10;
      this.continentNum = Math.floor(Math.random() * 50) + 10;
    },
    randomHex: function() {
      var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  
      return randomColor;
    }
  }
}
</script>

<style scoped>
#space {
  position: absolute;
  top: 0px;
  left: 0px;
  min-height: 120%;
  width: 100%;
  background: #1A1744;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

#planet {
  margin-top: 4%;
  width: 30vw;
  height: 30vw;
  border-radius: 50%;
  background: #5A2744;
  overflow: hidden;
}

#shadow {
  position: relative;
  background-color: black;
  height: 100%;
  width: 50%;
  opacity: .3;
}

.cloud {
  height: 2vw;
/*   background: white; */
  position: absolute;
  border-top-left-radius: 1vw 50%;
  border-top-right-radius: 1vw 50%;
  border-bottom-left-radius: 1vw 50%;
  border-bottom-right-radius: 1vw 50%;
  animation: drift 30s linear infinite;
}

.continent {
  height: 2vw;
  background: #7A4764;
  position: absolute;
  border-top-left-radius: 1vw 50%;
  border-top-right-radius: 1vw 50%;
  border-bottom-left-radius: 1vw 50%;
  border-bottom-right-radius: 1vw 50%;
  animation: drift 20s linear infinite;
}

#cloud1 {
  width: 8vw;
  top: 40%;
  
}

#clouds {
  position: absolute;
  width: 30vw;
  height: 30vw;
/*   border: solid red 1px; */
  overflow: hidden;
  border-radius: 50%;
}

#land {
  position: absolute;
  width: 30vw;
  height: 30vw;
/*   border: solid red 1px; */
  overflow: hidden;
  border-radius: 50%;
}

@keyframes drift {
  0% {
    left: 150%;
  }
  100% {
    left: -50%;
  }
}

#controls {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  min-width: 40vw;
  min-height: 5vw;
  border: solid #4A7764;
  background: #3A3774;
  color: white;
  font-family: sans-serif;
  padding: 1em;
}

.optRow {
  justify-content: center;
  display: flex;
}

.opt {
  padding: 10px;
  text-align: center;
}

.num {
  width: 40px;
}

input {
  background-color: #1A1744;
  color: white;
  border: none;
}

button {
  background: #1A1744;
  margin: 10px;
  color: white;
  border: solid 4px #5A2744;
}
button:hover {
  background:  white;
  color: #1A1744;
}
  
  
  
.switch {
  position: relative;
  margin-left: 10px;
  margin-top: 5px;
  transform: scale(.5);
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>