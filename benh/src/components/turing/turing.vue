<template>
<div id="turing-interface">
  <div id="machine-display" class="turing-window">
    <turing-header text="YOUR MACHINE"></turing-header>

    <div class="turing-window-content">

      <!--
      <img src="../../../static/turing/icons/edit.png" id="machine-edit-button" v-if="!machineRunning"
        @click="inputMode = !inputMode">
      <img src="../../../static/turing/icons/okay.png" id="machine-edit-button" v-else-if="!machineRunning"
        @click="inputMode = !inputMode">
      -->

      <div id="cells">
        <div class="cell" v-for="(cell, i) in cells" :style="{
            left: i * 50 + 'px'
          }">
          <input v-if="!machineRunning" v-model="cells[i]" maxlength="1" onclick="this.select()"
            @keyup="changeInput(i)">
          <span v-else>{{cell}}</span>
        </div>
        <div class="machine" :style="{
            left: headPosition * 50 + 'px'
          }">
          Q{{currentState}}
        </div>
      </div>

    </div>
  </div>

  <div id="controls" class="turing-window">
    <turing-header text="CONTROLS"></turing-header>
    <div class="turing-window-content">
      <img src="../../../static/turing/icons/rw.png" class="control-button" @click="rewind()">
      <img src="../../../static/turing/icons/back.png" class="control-button disabled-icon">

      <img src="../../../static/turing/icons/play.png" class="control-button" @click="beginMachine(1000)" v-if="paused">
      <img src="../../../static/turing/icons/pause.png" class="control-button" @click="pauseMachine()" v-else>

      <img src="../../../static/turing/icons/next.png" class="control-button" @click="doStep()">

      <img src="../../../static/turing/icons/ff.png" class="control-button" @click="beginMachine(250)">
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
      <div>status: {{ status }}</div>
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


        <div class="state-container" v-for="(state, i) in states" 
        :class="{ 'selected-border': i == currentState, 'disabled-border': machineRunning }"
        :style="{
          height: (state.tuples.length * 40) + 40 + 'px'
        }"> <!-- Calculating height this way so we can match height with the description box easily -->
          <div class="state-container-label"
            :class="{ 'selected-text': i == currentState, 'disabled-text': machineRunning }"
          >
            Q{{i}} tuples
          </div>
          <div class="state-tuple-display" v-for="(tuple, j) in state.tuples"
            :class="{ 'selected-text': j == currentTuple && i == currentState, 
              'disabled-text': machineRunning }">
            <span>&lt;</span>
            <span class="tuple-value">Q{{i}}</span>
            <span class="tuple-value" v-if="machineRunning">{{tuple.read}}</span>
            <input v-else v-model="tuple.read" maxlength="1" onclick="this.select()">
            <span class="tuple-value" v-if="machineRunning">{{tuple.action}}</span>
            <input v-else v-model="tuple.action" maxlength="1" onclick="this.select()">
            <span class="tuple-value" v-if="machineRunning">Q{{tuple.goto}}</span>
            <input v-else v-model="tuple.goto" maxlength="1" onclick="this.select()">
            <span>&gt;</span>
          </div>

          <button class="turing-button" style="width:100px;"
            :class="{ 'disabled': machineRunning }"
            @click="addTuple(i)">
            Add Tuple
          </button>
        </div>
        <button class="turing-button" style="width:100px;"
          :class="{ 'disabled': machineRunning }"
          @click="addState()">
          Add State
        </button>


      </div>

      <div id="tuple-description-column">
        <div id="column-header">
          <span>descriptions</span>
          <div class="state-container" v-for="(state, i) in states" 
            :class="{ 'selected-border': i == currentState, 'disabled-border': machineRunning }"
            :style="{
              height: (state.tuples.length * 40) + 40 + 'px'
            }">

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
      startInput: [],
      headPosition: 3,
      currentState: 0,
      currentTuple: 0,
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
      stopMachine: false,
      paused: true,

      machineSpeed: 1000, // Measured in milliseconds between steps

    }
  },
  computed: {
    machineRunning() {  // Whether or not the machine is in the middle of a run
      return (this.totalSteps > 0);
    },
    status() {
      if (this.machineRunning) {
        return 'running';
      } else {
        return 'editable';
      }
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
      for (let i in state.tuples) {                     // Looking at each tuple in that state
        if (state.tuples[i].read == this.cells[this.headPosition]) {
          this.currentTuple = i;
        }
      }
    },
    beginMachine(timeBetweenSteps) {
      this.machineSpeed = timeBetweenSteps;
      if (!this.paused) { // If it's already playing, don't play it again. 
        return;
      }
      // Save the current input before we start
      this.startInput = this.cells.slice(0);
      this.stopMachine = false;
      
      this.machineLoop()
    },
    machineLoop() {
      this.paused = false;
      // Stop the  machine if we're not in running mode
      if (this.stopMachine) {
        this.stopMachine = false;
        this.paused = true;
        return;
      }
      this.doStep();
      setTimeout(() => {
        this.machineLoop();
      }, this.machineSpeed);
    },
    pauseMachine() {
      this.stopMachine = true;
    },

    // Handles
    changeInput(i) {
      console.log("hi!");
      Vue
      this.cells[i] = this.cells[i].toUpperCase();
      // input.value = input.value.toUpperCase();
    },

    addTuple(state) {
      if (this.machineRunning) { // You can't add a tuple in the middle of the machine
        return;
      }
      this.states[state].tuples.push({
        read: 'B',
        action: 'B',
        goto: state
      })
    },
    addState() {
      if (this.machineRunning) {
        return;
      }
      this.states.push({
        description: '',
          tuples: [
            {
              read: 'B',
              action: 'B',
              goto: this.states.length - 1
            },
          ]
      })
    },
    rewind() {
      this.cells = this.startInput;
      this.headPosition = 3;
      this.totalSteps = 0;
      this.stopMachine = true;
    },
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
  border-bottom: solid #05B9BC 8px;
  padding-top: 5px;
  width: 30px;
  height: 25px;
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
#tuple-description-column {
  grid-column: 2/3;
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
  input {
    width: 15px;
    font-family: VCR;
    text-align: center;
  }
}

.control-button {
  cursor: pointer;
  height: 30px;
  margin-top: 5px;
}

.disabled-border {
  border-color: rgba(0,0,0,.3);
}
.disabled-text {
  color: rgba(0,0,0,.3);
  .tuple-value {
    border-color: rgba(0,0,0,.3);
  }
}
.disabled-icon, .disabled {
  opacity: .3;
  cursor: default;
}
.selected-border {
  border-color: black;
}
.selected-text {
  color: black;
  .tuple-value {
    border-color: black;
  }
}

.turing-button {
  font-family: VCR;
  border: solid 2px black;
  align-self: center;
  padding: 5px;
  cursor: pointer;
}

</style>
