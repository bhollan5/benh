<template>
<div class="bot"
     v-bind:style="{
          left: (x * 20)  + 190 + (200 * plotX) + 'px',
          top: (y * 20) + 190 + (200 * plotY) + 'px'
                   }">
  <img src="../../../static/automate/bluebot.png">
  
  </div>

</template>

<style scoped>

  .bot {
    position: absolute;
    transition: .5s;
    width: 20px;
    height: 20px;
    z-index: 20;
/*    outline: lightgray solid 1px;*/
/*    background: white;*/
  }


</style>

<script>
  import Vue from 'Vue';

  
  
export default {
  props: {
    initialX: {
      type: Number,
      default: 3
    },
    initialY: {
      type: Number,
      default: 3
    },
    initialXPlot: {
      type: Number,
      default: 0
    },
    initialYPlot: {
      type: Number,
      default: 0
    }
    
  },
  data() {
    return {
      x: this.initialX,
      y: this.initialY,
      plotX: this.initialXPlot,
      plotY: this.initialYPlot,
      currentGrid: [],
    }
  },
  mounted: function () {
    this.currentGrid = this.getPlotGrid();
    if (this.getPlotGrid() == 0) {
      console.log("we got probs");
    }
  },
  methods: {
    doCode: function() {
      this.move(0, 1);
      this.mine(0, 1);
    },
    
    move(x, y) {
      if (this.collisionCheck(this.currentGrid, (this.x + x), (this.y + y))) {
        console.log('your bot just hit a rock!');
      } else {
        this.y += x;
        this.y += y;
      }
    },
    
    collisionCheck(grid, x, y) {
      if (grid[y] == undefined) {
        // Handles going down into a new plot
        if (y > 9) {
          this.y = -1;
          this.plotY++;
          this.currentGrid = this.getPlotGrid();
          if (this.currentGrid == 0 || this.currentGrid[0][x] != '0') {
            this.y = 9;
            this.plotY--;
            this.currentGrid = this.getPlotGrid();
            return true;
          } else {
            this.makeVis();
            return false;
          }
          // Handles going up into a new plot
        } else if (y < 0) {
          this.y = 10;
          this.plotY--;
          this.currentGrid = this.getPlotGrid();
          if (this.currentGrid == 0 || this.currentGrid[9][x] != '0') {
            this.y = 0;
            this.plotY++;
            this.currentGrid = this.getPlotGrid();
            return true;
          } else {
            this.makeVis();
            return false;
          }
        }
      } else if (grid[y][x] == undefined) {
        // Handles going right into a new plot
        if (x > 9) {
          this.x = -1;
          this.plotX++;
          this.currentGrid = this.getPlotGrid();
          if (this.currentGrid == 0 || this.currentGrid[y][0] != '0') {
            this.x = 9;
            this.plotX--;
            this.currentGrid = this.getPlotGrid();
            return true;
          }
          else {
            this.makeVis();
            return false;
          }
          // Handles going left into a new plot
        } else if (x < 0) {
          this.x = 10;
          this.plotX--;
          this.currentGrid = this.getPlotGrid();
          if (this.currentGrid == 0 || this.currentGrid[y][9] != '0') {
            this.x = 0;
            this.plotX++;
            this.currentGrid = this.getPlotGrid();
            return true;
          } else {
            this.makeVis();
          }
        }
      } else if (grid[y][x][0] != '0') {
        return true;
      } else {
        return false;
      }
    },
    
    getPlotGrid() {
      return this.$parent.getPlotGridArgs(this.plotX, this.plotY)
    },
    makeVis() {
      this.$parent.$refs['plot' + this.plotX + 'x' + this.plotY].visible = true;
    },
    
    mine(x, y) {
      var obj;
      if (this.currentGrid[this.y + y] == undefined || this.currentGrid[this.y + y][this.x + x] == undefined) {
        obj = this.getNewPlotSpace(this.y + y, this.x + x);
      } else {
        obj = this.currentGrid[this.y + y][this.x + x];
      }
      if (this.$parent.objects[obj[0]].gives == undefined) {
        return;
      } else if (this.$parent.objects[obj[0]].neededToBreak == 'bomb') {
        return;
      }
      if (obj[1] > 0) {
        obj[1]--;
        //this[this.$parent.objects[obj[0]].gives]++;
      } else {
        Vue.set(obj, 0, '0');
      }
    },
    getNewPlotSpace(x,y) {
      var newPlot = [this.plotX, this.plotY];
      if (x > 9) {
        x = 0;
        newPlot[0]++;
      } else if (x < 0) {
        x = 9;
        newPlot[0]--;
      } else if (y > 9) {
        y = 0;
        newPlot[1]++;
      } else if (y < 0) {
        y = 9;
        newPlot[1]--;
      }
      var tempPlot = this.$parent.getPlotGridArgs(newPlot[0], newPlot[1]);
      return tempPlot[x][y];
    },
  }
}

</script>