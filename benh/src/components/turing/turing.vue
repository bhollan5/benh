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

  <div id="alphabet" class="turing-window">
    <turing-header text="ABOUT/ALPHABET"></turing-header>
    <div class="turing-window-content">

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

        <div class="state-container">

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

export default {
  data() {
    return {
      inputMode: false,
      cells: [],
      headPosition: 15,
      currentState: 0,
    }
  },
  mounted() {
    for (let i = 0; i < 100; i++) {
      this.cells.push('B');
    }
  },
  components: {
    turingHeader
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
  height: calc(100% - 200px); // Needed to account for padding. Why 200 and not 100? Gaps :O
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 5% 25% 70%;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  padding: 50px;
  grid-template-areas: 
      "header header header"
      "machine machine machine"
      "about tuples diagram";
}

#alphabet {
  grid-area: about
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
  transition-duration: 1s;
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
  height: 30px;
}

</style>