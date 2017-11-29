<template>
  <div class="plot"
       v-bind:style="{
            left: (xID + 190) + 'px',
            top: (yID + 190) + 'px'
                     }">
    <div class="fog"
         v-if="!visible"></div>
    <div class="row" v-for="row in grid">
      <div class="space" v-for="space in row">
        <img src="../../../static/rock.png" v-if="space == 'r'">
      </div>
    </div>
  </div>
</template>


<style scoped>
  .plot {
    display: flex;
    position: relative;
    width: 200px;
    flex-direction: column;
  }
  .fog {
    position: absolute;
    width: 200px;
    height: 200px;
    background: gray;
  }
  .row {
    display: flex;
    flex-direction: row;
  }
  .space {
    width: 20px;
    height: 20px;
    outline: lightgray solid 1px;
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
    randomRocks() {
      var i = 0;
      var j = 0;
      for (i; i < this.grid.length; i++) {
        for (j; j < this.grid[i].length; j++) {
          if (Math.random() > .9) {
            Vue.set(this.grid[i], j, 'r')
          }
        }
        j = 0;
      }
    }
  },
  mounted() {
    if (this.type == "rocks") {
      this.randomRocks();
    }
    console.log(this.grid);
  }
}

</script>