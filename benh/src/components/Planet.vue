<template>

<div id="planet" v-bind:style="{
                    background: planetColor
                               }">
  <div id="land">
    <div class='continent' v-for="land in continentNum"
         v-bind:style="{
              background: landColor,
              width: Math.floor((Math.random() * 12) + 3) + 'vw',
              top: Math.floor((Math.random() * 30)) + 'vw',
              animationDelay: (Math.floor((Math.random() * -200))/10) + 's'
                       }"></div>
  
  </div>
  <div id="clouds">
    <div class='cloud' v-for="cloud in cloudNum" 
         v-bind:style="{
              background: cloudColor,
              width: Math.floor((Math.random() * 12) + 3) + 'vw',
              top: Math.floor((Math.random() * 30)) + 'vw',
              animationDelay: Math.floor((Math.random() * -30)) + 's'
                       }"></div>
  </div>
  <div id="shadow">
    
  </div>
  
  
</div>


</template>

<script>

export default {
  name: 'Planet',
  data () {
    return {
      
    }
  },
  
  props: {
    cloudColor: {
      type: String,
      default: '#FFFFFF'
    },
    planetColor: {
      type: String,
      default: "#5A2744"
    },
    landColor: {
      type: String,
      default: "#7A4764"
    },

    continentNum: {
      type: Number,
      default: 40
    },
    cloudNum: {
      type: Number,
      default: 40
    }
    
  },
  methods: {
    
  }
}
</script>

<style scoped>
body {
  background: #1A1744;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}

#planet {
  margin-top: 10%;
  width: 30vw;
  min-height: 30vw;
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
  margin-top: 1em;
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
</style>