<template>
  <div class="plot"
       v-bind:style="{
            left: ((xID + 1) * 200) - 10 + 'px',
            top: ((yID + 1) * 200) - 10 + 'px'
                     }">
    <div class="fog"
         v-if="!visible"></div>
    <div class="row" v-for="(row, index) in grid">
      <div class="space" v-for="(space, index2) in row">
        <img src="../../../static/rock.png" v-if="space[0] == 'r'">
        <img src="../../../static/brick.png" v-if="space[0] == 'b'">
        <img src="../../../static/sign.png" v-if="space[0] == 's'">
        <img src="../../../static/tree.png" v-if="space[0] == 't'">
        <img src="../../../static/automate/tree2.png" v-if="space[0] == 't2'">
        <img src="../../../static/automate/bomb.png" v-if="space[0] == 'itemB'">
        <img src="../../../static/automate/fairy_house.gif" v-if="space[0] == 'itemMA'">
        <img src="../../../static/automate/fairy_house2.gif" v-if="space[0] == 'itemMB'">
        <img src="../../../static/automate/opal.gif" v-if="space[0] == 'itemOpal'">
        <img src="../../../static/automate/flower.png" v-if="space[0] == 'f'">
        <div class="plusColor" v-if="false">
          + 1 Blue!<div class="colorSquare"></div>
        </div>
<!--        DEBUG MODE:-->
<!--        <span style="z-index: 100000; color:red;">{{ grid[index][index2][0] }}</span>-->
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
    
/*    outline: solid 2px lightgreen;*/
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
  
  .plusColor {
    font-size: 10px;
    position: absolute;
  }

</style>


<script>
  
import Vue from 'Vue';
export default {
  props: {
    initialGrid: {
      type: Array,
      
      // Maps are rendered by a 2d array containing different nodes that
      // hold info for each space. The 2d array should always be 10x10 per plot.
      // Nodes are arrays that hold the element's type as the first index,
      // and the details in subsequent indexes. 
      //
      // For example, if we want a space to hold a rock that has 20 red resources
      // we can make it ['r', 20]. A sign would hold 's' as the first index, and 
      // then as many strings of text as we want. 
      default: function () {
        return [
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
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
    randomMaterial(m, chance) {
      
      var i = 0;
      var j = 0;
      for (i; i < this.grid.length; i++) {
        for (j; j < this.grid[i].length; j++) {
          if (Math.random() > chance) {
            var newArray = [m, 40]
            Vue.set(this.grid[i], j, newArray)
//            Vue.set(this.grid[i][j], 0, m)
//            Vue.set(this.grid[i][j], 1, 40)
          }
        }
        j = 0;
      }
    },
    randomMaterials(m, chance, m2, chance2) {
      
      var i = 0;
      var j = 0;
      for (i; i < this.grid.length; i++) {
        for (j; j < this.grid[i].length; j++) {
          if (Math.random() > chance) {
            var newArray = [m, 40]
            Vue.set(this.grid[i], j, newArray)
          }
          if (Math.random() > chance2) {
            var newArray = [m2, 40]
            Vue.set(this.grid[i], j, newArray)
          }
        }
        j = 0;
      }
    }
  },
  mounted() {
    for (var i = 0; i < this.initialGrid.length; i++) {
//      Vue.set(this.grid, i, ['0','0','0','0','0','0','0','0','0','0',]);
      for (var j = 0; j < this.initialGrid[i].length; j++) {
        Vue.set(this.grid[i], j, this.initialGrid[i][j]);
      }
    }
    if (this.type == "rocks") {
      this.randomMaterial('r', .9);
    } else if (this.type == "trees") {
      this.randomMaterials('t', .9, 'f', .95);
    } else if (this.type == "trees2") {
      this.randomMaterials('t', .95, 't2', .95);
    }
  }
}

</script>