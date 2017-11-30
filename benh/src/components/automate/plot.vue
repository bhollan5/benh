<template>
  <div class="plot"
       v-bind:style="{
            left: ((xID + 1) * 200) - 10 + 'px',
            top: ((yID + 1) * 200) - 10 + 'px'
                     }">
    <div class="fog"
         v-if="!visible"></div>
    <div class="row" v-for="row in grid">
      <div class="space" v-for="space in row">
        <img src="../../../static/rock.png" v-if="space == 'r'">
        <img src="../../../static/brick.png" v-if="space == 'b'">
        <img src="../../../static/sign.png" v-if="space == 's'">
        <img src="../../../static/tree.png" v-if="space == 't'">
      </div>
    </div>
  </div>
</template>


<style scoped>
  .plot {
    display: flex;
    position: absolute;
    width: 200px;
    flex-direction: column;
    outline: solid 2px lightgreen;
  }
  .fog {
    position: absolute;
    width: 200px;
    height: 200px;
    background: gray;
    transition-duration: 1s;
    z-index: 99;
/*    border: 2px gray solid;*/
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .space {
    width: 20px;
    height: 20px;
    outline: lightgray solid 1px;
    background: white;
  }

</style>


<script>
  
import Vue from 'Vue';
export default {
  props: {
    initialGrid: {
      type: Array,
      default: function () {
        return [
          ['0','0','0','0','0','0','0','0','0','0'],
          ['0','0','0','0','0','0','0','0','0','0'],
          ['0','0','0','0','0','0','0','0','0','0'],
          ['0','0','0','0','0','0','0','0','0','0'],
          ['0','0','0','0','0','0','0','0','0','0'],
          ['0','0','0','0','0','0','0','0','0','0'],
          ['0','0','0','0','0','0','0','0','0','0'],
          ['0','0','0','0','0','0','0','0','0','0'],
          ['0','0','0','0','0','0','0','0','0','0'],
          ['0','0','0','0','0','0','0','0','0','0'],
        ];
      }
    },
    xID: Number,
    yID: Number,
    
    type: String, // Can be: "none", "rocks", "trees"
    
    initialVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      grid: this.initialGrid,
      visible: this.initialVisible
    }
  },
  methods: {
    randomMaterial(m) {
      var i = 0;
      var j = 0;
      for (i; i < this.grid.length; i++) {
        for (j; j < this.grid[i].length; j++) {
          if (Math.random() > .9) {
            Vue.set(this.grid[i], j, m)
          }
        }
        j = 0;
      }
    }
  },
  mounted() {
    if (this.type == "rocks") {
      this.randomMaterial('r');
    } else if (this.type == "trees") {
      this.randomMaterial('t');
    }
    console.log(this.grid);
  }
}

</script>