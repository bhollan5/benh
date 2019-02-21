<template>
<div id="turing-interface">
  <div id="machine-display" class="turing-window">
    <turing-header text="YOUR MACHINE"></turing-header>
    <div class="turing-window-content">
      <img src="../../../static/turing/icons/edit.png" id="machine-edit-button" v-if="!inputMode"
        @click="inputMode = !inputMode">
      <img src="../../../static/turing/icons/okay.png" id="machine-edit-button" v-else
        @click="inputMode = !inputMode">
      <div id="cells">
        <div class="cell" v-for="(cell, i) in cells" :style="{
            left: i * 50 + 'px'
          }">
          <input v-if="inputMode" v-model="cells[i]" maxlength="1" onclick="this.select()"
            onkeyup="this.value = this.value.toUpperCase();">
          <span v-if="!inputMode && cell != 'B'">{{cell}}</span>
        </div>
        <div class="machine" :style="{
            left: headPosition * 50 + 'px'
          }">
        
        </div>
      </div>
    </div>
  </div>

  <div id="controls" class="turing-window">
    <turing-header text="CONTROLS"></turing-header>
    <div class="turing-window-content">
      <img src="../../../static/turing/icons/play.png" class="control-button" @click="beginMachine()" v-if="!machinePlay">
      <img src="../../../static/turing/icons/pause.png" class="control-button" @click="pauseMachine()" v-else>
      <img src="../../../static/turing/icons/next.png" class="control-button" @click="doStep()">
      <img src="../../../static/turing/icons/ff.png" class="control-button">
    </div>
  </div>

  <div id="alphabet" class="turing-window">
    <turing-header text="ALPHABET"></turing-header>
    <div class="turing-window-content">

    </div>
  </div>

  <div id="about" class="turing-window">
    <turing-header text="ABOUT"></turing-header>
    <div class="turing-window-content">
      <div>total steps: {{totalSteps}}</div>
    </div>
  </div>

  <div id="tuples" class="turing-window">
    <turing-header text="TUPLE INSTRUCTIONS"></turing-header>
    <div id="tuple-window-content" class="turing-window-content">

      <div id="tuples-column">
        <div id="column-header">
          <span>state</span>
          <span>read</span>
          <span>action</span>
          <span>goto</span>
        </div>


        <div class="state-container" v-for="(state, i) in states" :style="{
          height: state.tuples.length * 40 + 'px'
        }"> <!-- Calculating height this way so we can match height with the description box easily -->
          <div class="state-container-label">Q{{i}} tuples</div>
          <div class="state-tuple-display" v-for="tuple in state.tuples">
            <span>&lt;</span>
            <span class="tuple-value">Q{{i}}</span>
            <span class="tuple-value">{{tuple.read}}</span>
            <span class="tuple-value">{{tuple.action}}</span>
            <span class="tuple-value">Q{{tuple.goto}}</span>
            <span>&gt;</span>
          </div>
        </div>


      </div>
    </div>
  </div>

  <div id="diagram" class="turing-window">
    <turing-header text="NODE DIAGRAM"></turing-header>
    <div class="turing-window-content">

    </div>
  </div>
</div>
</template>

<script>
import turingHeader from '@/components/turing/turingHeader';
import Vue from 'vue';

export default {
  data() {
    return {
      // Machine variables:
      cells: [],
      headPosition: 3,
      currentState: 0,
      states: [
        {
          description: '',
          tuples: [
            {
              read: 'B',
              action: '1',
              goto: 0
            },
            {
              read: '1',
              action: 'R',
              goto: 0
            },
          ]
        }
      ],

      // Stats:
      totalSteps: 0,

      // Menu options:
      inputMode: false,
      machinePlay: false,

    }
  },
  mounted() {
    for (let i = 0; i < 100; i++) {
      this.cells.push('B');
    }
  },
  components: {
    turingHeader
  },
  methods: {
    doStep() {
      this.totalSteps++;

      let symbol = this.cells[this.headPosition];       // The symbol we're reading
      let state = this.states[this.currentState];       // The state we're in 

      for (let i in state.tuples) {                     // Looking at each tuple in that state
        if (state.tuples[i].read == symbol) {           // Finding the tuple relating to the symbol we read

          if (state.tuples[i].action == 'R') {          // Handling 'R' actions
            this.headPosition++;
          } else if (state.tuples[i].action == 'L') {   // Handling 'L' actions
            this.headPosition--;
          } else {                                      // Handling all write actions
            Vue.set(this.cells, this.headPosition, state.tuples[i].action);
          }

          this.currentState = state.tuples[i].goto;     // change states
        }
      }
    },
    beginMachine() {
      this.machinePlay = true;
      this.machineLoop(1000)
    },
    machineLoop(speed) {
      this.doStep();
      setTimeout(() => {
        if (this.machinePlay) {
          this.machineLoop(speed);
        }
      }, speed);
    },
    pauseMachine() {
      this.machinePlay = false;
    }
  }
}
</script>

<style scoped lang="scss">

@font-face {
  font-family: VCR;
  src: url("../../../static/fonts/VCR_OSD_MONO.ttf");
}

div {
  font-family: VCR;
}

//
//  General styling & Layout
//

#turing-interface {
  font-family: VCR;
  top: 0px;
  width: calc(100% - 100px);
  height: calc(100% - 100px); 
  position: absolute;
  display: grid;
  grid-template-columns: .20fr .40fr .40fr;
  grid-template-rows: .05fr .25fr .15fr .15fr .40fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  padding: 50px;
  grid-template-areas: 
      "header   header  header"
      "machine  machine machine"
      "controls tuples  diagram"
      "alphabet tuples  diagram"
      "about    tuples  diagram";
}

#controls {
  grid-area: controls;
}
#alphabet {
  grid-area: alphabet;
}
#about {
  grid-area: about;
}
#machine-display {
  overflow-y: scroll;
  grid-area: machine;
}
#tuples {
  grid-area: tuples;
}
#diagram {
  grid-area: diagram;
}

.turing-window {
  border: solid 2px black;
  position: relative;
}

//
//  YOUR MACHINE WINDOW:
//

#machine-edit-button {
  position: absolute;
  z-index: 10;
  background: white;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
}

#cells {
  position: relative;
  height: 120px;
  // border: solid red 2px;
  overflow: scroll;
}

.cell {
  top: 10px;
  padding-top: 10px;
  width: 30px;
  height: 30px;
  text-align: center;

  border-bottom: solid black 2px;
  position: absolute;

  input {
    font-size: 18px;
    width: 90%;
    font-family: VCR;

  }
}

.machine {
  border-bottom: solid red 2px;
  width: 30px;
  height: 30px;
  top: 55px;
  position: absolute;
  transition-duration: .5s;
}

//
//  Tuple display
//

#column-header {
  border-bottom: solid black 2px;
  margin: 20px;
}

#tuple-window-content {
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
  height: calc(100% - 20px);
}

.state-container {
  border: solid black 2px;
  width: 95%;
  margin: 20px 2.5%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.state-container-label {
  position: absolute;
  top: -12px;
  left: 20px;
  font-size: 12px;
}
.state-tuple-display {
  display: flex;
  justify-content: space-around;
  
  span {
    padding: 5px;
  }
  .tuple-value {
    border-bottom: solid 2px black;
  }
}

.control-button {
  cursor: pointer;
  height: 30px;
  margin-top: 5px;
}

</style>