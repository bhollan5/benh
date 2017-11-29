<template>

  <div id="app">
    <div id="screen">
      <div id="board"
        v-bind:style="{
            left: (0 - (posX * 20)) + 'px',
            top: (0 - ((posY + (plotY * 10)) * 20)) + 'px'
                      }">
        
        <plot
              :xID="0"
              :yID="0"
              ref="plot0x0"
              :initialVisible="true"
              :initialGrid="[
          ['r','0','0','0','0','0','0','0','0','r'],
          ['r','0','0','0','0','0','0','0','0','r'],
          ['r','0','0','0','0','0','0','0','0','r'],
          ['r','0','0','0','0','0','0','0','0','r'],
          ['r','0','0','0','0','0','0','0','0','r'],
          ['r','0','0','0','0','0','0','0','0','r'],
          ['r','0','0','0','0','0','0','0','0','r'],
          ['r','0','0','0','0','0','0','0','0','r'],
          ['r','0','0','0','0','0','0','0','0','r'],
          ['r','r','r','r','r','r','r','r','r','r'],
        ]"></plot>
        <plot
              :xID="0"
              :yID="1"
              ref="plot0x1"></plot>
        
    
      </div>
      <player ref="you">
        </player>
    </div>
  
  </div>

</template>

<style lang="scss" scoped>
/*
#18587A
#FC624D
#FCA7A7
#FFD6D6
*/

$blue: #18587A;
$orange-dark: #FC624D;
$orange: #FCA7A7;
$orange-light: #FFD6D6;
  
  #screen {
    border: solid black 1px;
    width: 400px;
    height: 400px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
  }
  
  #board {
    position: absolute;
    transition-duration: .5s;
  }


</style> 

<script>
import player from './player.vue';
import plot from './plot.vue';

// CONTROLS
var keys = {
  UP: 38,
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  P: 80,
  ESC: 27,
  ENTER: 13,
    
  H: 72 
};

var gridSpace = {
  template: ""
}

export default {
  components: {
    player,
    plot
  },
  
  mounted: function() {
    var self = this;
    window.addEventListener('keydown', function(e){
      keys[e.keyCode || e.which] = true;
      if (e.keyCode === Number(keys.DOWN)) {
        
      }
    }, true);

    window.addEventListener('keyup', function(e){
      keys[e.keyCode || e.which] = false;
    }, true);
    
    setInterval(this.click, 10);
    
    this.currentGrid = this.getPlotGrid();
  },
  
  computed: {
    
  },
  
  data () {
    return {
      unitSize: 4,
      time: 0,
      
      posX: 3,
      posY: 3,
      plotX: 0,
      plotY: 0,
      
      currentGrid: []
    }
  },
  
  methods: {
    click() {
      this.time++;
      
      if (this.time % 50 === 0) {
        if (keys[keys.DOWN]) {
          this.moveDown();
        } else if (keys[keys.UP]) {
          this.moveUp();
        }
        
        if (keys[keys.LEFT]) {
          this.moveLeft();
        } else if (keys[keys.RIGHT]) {
          this.moveRight();
        }
      }
    },
    change(x,y) {
      this.cubeX = x;
      this.cubeY = y;
    },
    collisionCheck(grid, x, y) {
      if (grid[y] == undefined) {
        console.log("you can't do that");
        if (y > 9) {
          this.posY = -1;
          this.plotY++;
          this.currentGrid = this.getPlotGrid();
          this.makeVis();
        } else if (y < 0) {
          this.posY = 10;
          this.plotY--;
          this.currentGrid = this.getPlotGrid();
          this.makeVis();
        }
      } else if (grid[y][x] == undefined) {
        
      } else if (grid[y][x] != '0') {
        return true;
      } else {
        return false;
      }
    },
    moveLeft() {
      if (this.collisionCheck(this.currentGrid, (this.posX - 1), this.posY)) {
        console.log('you just hit a rock!');
      } else {
        this.posX--;
      }
    },
    moveRight() {      
      if (this.collisionCheck(this.currentGrid, (this.posX + 1), this.posY)) {
        console.log('you just hit a rock!');
      } else {
        this.posX++;
      }
    },
    moveUp() {      
      if (this.collisionCheck(this.currentGrid, this.posX, (this.posY - 1))) {
        console.log('you just hit a rock!');
      } else {
        this.posY--;
      }
    },
    moveDown() {      
      if (this.collisionCheck(this.currentGrid, this.posX, (this.posY + 1))) {
        console.log('you just hit a rock!');
      } else {
        this.posY++;
      }
    },
    getPlotGrid() {
      return this.$refs['plot' + this.plotX + 'x' + this.plotY].grid;
    },
    makeVis() {
      this.$refs['plot' + this.plotX + 'x' + this.plotY].visible = true;
    }
  }
  
};


</script>