<template>
<div id="turing-interface">
  <div id="machine-display" class="turing-window">
    <turing-header text="YOUR MACHINE"></turing-header>
    <div class="turing-window-content">
      <div id="cells">
        <div class="cell" v-for="(cell, i) in cells" :style="{
            left: i * 50 + 'px'
          }">
          <input v-if="inputMode" v-model="cells[i]">
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
    <div class="turing-window-content">

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
      inputMode: true,
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
    
    width: 90%;
  }
}

.machine {
  border-bottom: solid red 2px;
  width: 30px;
  height: 30px;
  top: 55px;
  position: absolute;
}

</style>