<template>

  <div id="app">
    <div id="Title">
      <span class="titleA">A</span>
      <span class="titleU">U</span>
      <span class="titleT">T</span>
      <span class="titleO">O</span>
      
      <span class="titleA">M</span>
      <span class="titleA2">A</span>
      <span class="titleT2">T</span>
      <span class="titleE">E</span>
    </div>
    
    <div id="screen">
      <div id="pause" v-if="paused">
        
        <img src="../../../static/book.png" 
             id="manual"
             class="menuButton">
        <img src="../../../static/achievements.png" 
             id="achievements"
             class="menuButton">
        <img src="../../../static/info.png" 
             id="info"
             class="menuButton">
        <img src="../../../static/help.png" 
             id="help"
             class="menuButton">
        
        <div id="itemEquipped">
           <br>Equipped:
          <div class="item">
              
            </div>
        </div>
        
        
        <div id="items">
          Items:
          <div id="itemContainer">
            <div class="item" v-for="item in items">
              <img src="../../../static/hiddenItem.png">
            </div>
            <span style="font-size: 10px;">Item Name:</span>
          </div>
        </div>
        
        <div id="resources">
          <span>Resources:</span>
          <span class="colorHolder">
            <div class="color colorR" @click="selectColor('r')"
                 v-bind:class="{ selectedColor: (this.selected.color == 'r') }">
              <img src="../../../static/hiddenItem.png" width="15"
                   v-if="red < 1">
            </div>x{{ redDisp }}
          </span>
          <span class="colorHolder">
            <div class="color colorO" @click="selectColor('o')"
                 v-bind:class="{ selectedColor: (this.selected.color == 'o') }">
              <img src="../../../static/hiddenItem.png" width="15"
                   v-if="orange < 1">
            </div>x{{ orangeDisp }}
          </span>
          <span class="colorHolder">
            <div class="color colorY" @click="selectColor('y')"
                 v-bind:class="{ selectedColor: (this.selected.color == 'y') }">
              <img src="../../../static/hiddenItem.png" width="15"
                   v-if="yellow < 1">
            </div>x{{ yellowDisp }}
          </span>
          <span class="colorHolder">
            <div class="color colorG" @click="selectColor('g')"
                 v-bind:class="{ selectedColor: (this.selected.color == 'g') }">
              <img src="../../../static/hiddenItem.png" width="15"
                   v-if="green < 1">
            </div>x{{ greenDisp }}
          </span>
          <span class="colorHolder">
            <div class="color colorB" @click="selectColor('b')"
                 v-bind:class="{ selectedColor: (this.selected.color == 'b') }">
              <img src="../../../static/hiddenItem.png" width="15"
                   v-if="blue < 1">
            </div>x{{ blueDisp }}
          </span>
          <span class="colorHolder">
            <div class="color colorP" @click="selectColor('p')"
                 v-bind:class="{ selectedColor: (this.selected.color == 'p') }">
              <img src="../../../static/hiddenItem.png" width="15"
                   v-if="purple < 1">
            </div>x{{ purpleDisp }}
          </span>
          <span class="colorHolder">
            <div class="color colorDP">
              <img src="../../../static/hiddenItem.png" width="15"
                   v-if="darkPurple < 1">
            </div>x{{ darkPurple }}
          </span>
        </div>
        
        <div id="workbench">
          Workbench
          <div id="workbenchOutput">
            = 
            <div class="benchSlot" id="outputSlot"></div>
          
          </div>
          <div class="benchRow" v-for="(row, index) in workBench">
            <div class="benchSlot" v-for="(slot, index2) in row" 
                 v-bind:style="{
                               background: colorize(workBench[index][index2])
                               }"
                 @click="updateWorkSlot(index, index2)">
            </div>
          </div>
          
        </div>
      
      </div>
      <div id="board"
        v-bind:style="{
            left: (0 - ((posX + (plotX * 10))* 20)) + 'px',
            top: (0 - ((posY + (plotY * 10)) * 20)) + 'px'
                      }">
        
        <plot
              :xID="0"
              :yID="0"
              ref="plot0x0"
              :initialVisible="true"
              :initialGrid="[
          ['b','0','0','0','0','0','0','0','0','b'],
          ['b','0','0','0','0','0','0','0','0','b'],
          ['b','0','0','0','0','0','0','0','0','b'],
          ['b','0','0','0','0','0','s','0','0','b'],
          ['0','0','0','0','0','0','0','0','0','b'],
          ['0','0','0','0','0','0','0','0','0','b'],
          ['b','0','0','0','0','0','0','0','0','b'],
          ['b','0','0','0','0','0','0','0','0','b'],
          ['b','0','0','0','0','0','0','0','0','b'],
          ['b','b','b','b','0','0','b','b','b','b'],
        ]"></plot>
        
        
        <!--  ==========================  -->
        <!--  ==========================  -->
        <!--          SOUTH WEST          -->
        <!--  ==========================  -->
        <!--  ==========================  -->
        <plot
              :xID="-1"
              :yID="1"
              ref="plot-1x1"></plot>
        
        
        <!--  ==========================  -->
        <!--  ==========================  -->
        <!--          SOUTH EAST          -->
        <!--  ==========================  -->
        <!--  ==========================  -->
        
        <plot
              :xID="1"
              :yID="0"
              ref="plot1x0"></plot>
        
        <plot
              :xID="0"
              :yID="1"
              ref="plot0x1"
              :type="'trees'"></plot>
        
        <plot
              :xID="1"
              :yID="1"
              ref="plot1x1"
              :type="'trees'"></plot>
        
        <!--  ==========================  -->
        <!--  ==========================  -->
        <!--          NORTH WEST          -->
        <!--  ==========================  -->
        <!--  ==========================  -->
        <plot
              :xID="-1"
              :yID="0"
              ref="plot-1x0"
              :type="'rocks'"></plot>
        
        <plot
              :xID="-1"
              :yID="-1"
              ref="plot-1x-1"
              :type="'rocks'"></plot>
        
        <plot
              :xID="0"
              :yID="-1"
              ref="plot0x-1"
              :type="'rocks'"></plot>
        
        <!--  ==========================  -->
        <!--  ==========================  -->
        <!--          NORTH EAST          -->
        <!--  ==========================  -->
        <!--  ==========================  -->
        
        <plot
              :xID="1"
              :yID="-1"
              ref="plot1x-1"
              :type="'rocks'"></plot>
    
      </div>
      <player ref="you">
        </player>
    </div>
    <div id="dialogue" >
      <div class="objInfoSpan" v-html="objInfo"></div>
      <span v-html="dialogue[0]" v-if="objInfo == ''"></span>
      <span id="nextDialogue" v-if="dialogue[0] != '' || objInfo != ''">Press Enter</span>
    </div>
  
  </div>

</template>

<style lang="scss" scoped>
  
  #app {
    margin-top: 0px;
  }
  
  // If you change these values, make sure you 
  // change them in the colorize() function, in the js filters, too!
  $red: #ffac9e;
  $orange: #ffc184;
  $yellow: #ffe993;
  $green: #7affb4;
  $blue: #76C6FF;
  $purple: #e5a8ff;
  
  
  
  #Title {
    font-style: italic;
    font-size: 30px;
    font-weight: bold;
    margin-top: -15px;
  }
  .titleA {
    font-size: 35px;
    color: lightgray;
  }
  .titleU {
    color: $red;
  }
  .titleT {
    color: $orange;
  }
  .titleO {
    color: $yellow;
  }
  .titleA2 {
    color: $green;
  }
  .titleT2 {
    color: $blue;
  }
  .titleE {
    color: $purple;
  }
  
  #screen {
    border: solid black 1px;
    width: 400px;
    height: 400px;
    top: 100px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    background: black;
  }
  
  #board {
    position: absolute;
    transition-duration: .5s;
  }
  
  #dialogue {
    width: 360px;
    height: 150px;
    border: solid black 1px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 520px;
    padding: 20px;
  }
  #nextDialogue {
    position: absolute;
    
    bottom: 10px;
    right: 10px;
  }
  
  .objInfoSpan {
    display: block;
    text-align: left;
    width: 100%;
    font-size: 14px;
  }
  
  #pause {
    text-align: left;
    position: absolute;
    width: 350px;
    height: 350px;
    background: white;
    border: solid 2px black;
    z-index: 1000;
    
/*    Centering:  */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  
  .menuButton {
    cursor: pointer;
    border: solid 1px black;
    transform: scale(2);
    image-rendering: pixelated;
    position: absolute;
    left: 30px;
  }
  .menuButton:hover {
    border: solid 1px gold;
  }
  #manual {
    top: 30px;
  }
  #achievements {
    top: 80px;
  }
  #info {
    top: 130px;
  }
  #help {
    top: 180px;
  }
  
  #items {
    width: 250px;
    height: 130px;
    background: lightgray;
    border: solid 1px gray;
    position: absolute;
    left: 80px;
    top: 20px;
    padding: 5px;
    
  }
  
  #itemContainer {
    display: flex;
    flex-flow: row wrap;
  }
  
  #itemEquipped {
    background: white;
    font-size: 10px;
    position: absolute;
    top: 260px;
    left: 20px;
  }
  
  .item {
    cursor: pointer;
    width: 33px;
    height: 33px;
    border: solid 1px black;
    outline: solid 1px black;
    margin: 3px;
    background: white;
    image-rendering: pixelated;
  }
  .item:hover {
    border: solid 1px gold;
    outline: solid 1px gold;
  }
  
  #resources {
    position: absolute;
    top: 170px;
    left: 80px;
    height: 140px;
    font-size: 10px;
  }
  .colorHolder {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .color {
    width: 15px;
    height: 15px;
    margin-bottom: 2px;
    border: solid black 2px;
    cursor: pointer;
  }
  .color:hover {
    border: solid gold 2px;
  }
  .colorR {
    background: $red;
  }
  .colorO {
    background: $orange;
  }
  .colorY {
    background: $yellow;
  }
  .colorG {
    background: $green;
  }
  .colorB {
    background: $blue;
  }
  .colorP {
    background: $purple;
  }
  .colorDP {
    background: $purple;
  }
  
  #workbench {
    background: lightgray;
    width: 190px;
    height: 150px;
    font-size: 10px;
    position: absolute;
    left: 140px;
    top: 170px;
    border: solid gray 1px;
    padding: 5px;
  }
  .benchRow {
    display: flex;
  }
  .benchSlot {
    width: 20px;
    height: 20px;
    background: #eeeeee;
    outline: solid black 1px;
    cursor: pointer;
    margin: 2px;
  }
  .benchSlot:hover {
    outline: solid blue 1px;
    background: white;
  }
  #workbenchOutput {
    position: absolute;
    display: flex;
    font-size: 18px;
    left: 140px;
    top: 70px;
  }
  
  
  .selectedColor {
    border: solid lightgreen 2px;
  }
  .selectedColor:hover {
    border: solid lightgreen 2px;
  }


</style> 

<script>
import player from './player.vue';
import plot from './plot.vue';
  
import Vue from 'Vue';

// CONTROLS
var keys = {
  UP: 38,
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  P: 80,
  X: 88,
  ESC: 27,
  ENTER: 13,
  Z: 90, 
    
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
      
      // Put key commands here if you want them to execute immediately
      // Note that you have to use "self" instead of "this" in this scope
      
      if (e.keyCode === Number(keys.P) || e.keyCode === Number(keys.X)) {
        self.paused = !self.paused;
      }
      
      if (e.keyCode === Number(keys.ENTER) && !self.paused) {
        self.nextDialogue();
      }
      
      if ((keys[keys.Z] || keys[keys.SPACE]) && !self.paused) {
        if (keys[keys.DOWN]) {
          self.interact(0, 1);
        } 
          
        if (keys[keys.UP]) {
          self.interact(0, -1);
        }
        
        if (keys[keys.LEFT]) {
          self.interact(-1, 0);
        } 
          
        if (keys[keys.RIGHT]) {
          self.interact(1, 0);
        }
      }
      
    }, true);

    window.addEventListener('keyup', function(e){
      keys[e.keyCode || e.which] = false;
    }, true);
    
    setInterval(this.click, 10);
    
    this.currentGrid = this.getPlotGrid();
  },
  
//  $red: #F7C3BA;
//  $orange: #ffc184;
//  $yellow: #ffe993;
//  $green: #7affb4;
//  $blue: #76C6FF;
//  $purple: #e5a8ff;
  
  filters: {
    
  },
  
  data () {
    return {
      unitSize: 4,
      time: 0,
      
      posX: 3,
      posY: 3,
      plotX: 0,
      plotY: 0,
      
      speed: 5,
      
      
      // PAUSE MENU STATS
      
      paused: false,
      
      items: [0,0,0,0,0,0, 0,0,0,0,0,0,],
      workBench: [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
      ],
      
      red: 5,
      orange: 1,
      yellow: 1,
      green: 1,
      blue: 1,
      purple: 1,
      darkPurple: 0,
      
      selected: ' ',
      
      currentGrid: [],
      
      objInfo: '',
      
      // The following dialogue gets displayed only at the beginning of the game
      dialogue: ['Hey you!', 
                 'I\'m gonna tell you how to play this game. I know, game instructions are boring, but I promise it\'ll get better!', 
                 'So the controls are easy - <b>arrow keys</b> to move, <b>P</b> or <b>X</b> to pause and look at your menu, and hold down <b>X</b> or <b>Space</b> and press the <b>arrow keys</b> to interact with things!', 
                 'Go over to that sign, hold down <b>Z</b>, and try to interact with it!', 
                 ''
      ],
      
      objects: {
        s: {
          name: "Sign",
          description: "Tells you what to do! Press <b>ENTER</b> to see what it has to say!"
        },
        b: {
          name: "Brick",
          description: "Blocks your path :("
        },
        0: {
          name: "Nothin'",
          description: "There's nothing here, your path is clear!"
        }
      }
    }
  },
  
  computed: {
    redDisp: function() {
      var temp = this.red;
      console.log(this.workBench);
      for (var i = 0; i < this.workBench.length; i++) {
        console.log(i);
        for (var j = 0; j < this.workBench[i].length; j++) {
          if (this.workBench[i][j] == 'r') {
            temp -= 1;
          }
        }
      }
      return temp;
    },
    orangeDisp: function() {
      var temp = this.orange;
      console.log(this.workBench);
      for (var i = 0; i < this.workBench.length; i++) {
        console.log(i);
        for (var j = 0; j < this.workBench[i].length; j++) {
          if (this.workBench[i][j] == 'o') {
            temp -= 1;
          }
        }
      }
      return temp;
    },
    yellowDisp: function() {
      var temp = this.yellow;
      console.log(this.workBench);
      for (var i = 0; i < this.workBench.length; i++) {
        console.log(i);
        for (var j = 0; j < this.workBench[i].length; j++) {
          if (this.workBench[i][j] == 'y') {
            temp -= 1;
          }
        }
      }
      return temp;
    },
    greenDisp: function() {
      var temp = this.green;
      console.log(this.workBench);
      for (var i = 0; i < this.workBench.length; i++) {
        console.log(i);
        for (var j = 0; j < this.workBench[i].length; j++) {
          if (this.workBench[i][j] == 'g') {
            temp -= 1;
          }
        }
      }
      return temp;
    },
    blueDisp: function() {
      var temp = this.blue;
      console.log(this.workBench);
      for (var i = 0; i < this.workBench.length; i++) {
        console.log(i);
        for (var j = 0; j < this.workBench[i].length; j++) {
          if (this.workBench[i][j] == 'b') {
            temp -= 1;
          }
        }
      }
      return temp;
    },
    purpleDisp: function() {
      var temp = this.red;
      console.log(this.workBench);
      for (var i = 0; i < this.workBench.length; i++) {
        console.log(i);
        for (var j = 0; j < this.workBench[i].length; j++) {
          if (this.workBench[i][j] == 'p') {
            temp -= 1;
          }
        }
      }
      return temp;
    },
  },
  
  methods: {
    click() {
      this.time++;
      
      if (this.paused) {
        return;
      }
      
      // Put key commands here if you want them to be paced
      if (this.time % (20) === 0) {
        if (keys[keys.Z] || keys[keys.SPACE]) {
          // Interaction commands - taken care of in Mounted()
        } else {
          // Movement
          if (keys[keys.DOWN]) {
            this.moveDown();
          } else if (keys[keys.UP]) {
            this.moveUp();
          } else if (keys[keys.LEFT]) {
            this.moveLeft();
          } else if (keys[keys.RIGHT]) {
            this.moveRight();
          }
        }
      }
    },
    
    interact(x, y) {
      var obj = this.currentGrid[this.posY + y][this.posX + x];
      this.objInfo = "<b>Object tag: </b> " + obj;
      if (this.objects[obj] == undefined) {
        return;
      }
      this.objInfo += "<br><b>Name: </b>" + this.objects[obj].name;
      this.objInfo += "<br><b>Description: </b>" + this.objects[obj].description;
    },
    
    nextDialogue() {
      if (this.objInfo != '') {
        this.objInfo = '';
      } else if (this.dialogue.length > 1) {
        this.dialogue.shift();
        
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
        if (x > 9) {
          this.posX = -1;
          this.plotX++;
          this.currentGrid = this.getPlotGrid();
          this.makeVis();
        } else if (x < 0) {
          this.posX = 10;
          this.plotX--;
          this.currentGrid = this.getPlotGrid();
          this.makeVis();
        }
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
    },
    
    selectColor(color) {
      var tempObj = {
        name: 'color',
        color: color
      }
      this.selected = tempObj;
    },
    
    updateWorkSlot(x, y) {
      console.log(this.selected.color);
      
      if (this.workBench[x][y] == this.selected.color) {
        Vue.set(this.workBench[x], y, ' ');
        return;
      }
      
      if (this.selected.color == 'r' && this.redDisp <= 0) {
        return;
      } else if (this.selected.color == 'o' && this.orangeDisp <= 0) {
        return;
      } else if (this.selected.color == 'y' && this.yellowDisp <= 0) {
        return;
      } else if (this.selected.color == 'g' && this.greenDisp <= 0) {
        return;
      } else if (this.selected.color == 'b' && this.blueDisp <= 0) {
        return;
      } else if (this.selected.color == 'p' && this.purpleDisp <= 0) {
        return;
      } 
      
      
      Vue.set(this.workBench[x], y, this.selected.color);
      
    },
    
    colorize: function(color) {
      if (color == 'r') {
        return '#F7C3BA';
      } else if (color == 'o') {
        return '#ffc184';
      } else if (color == 'y') {
        return '#ffe993';
      } else if (color == 'g') {
        return '#7affb4';
      } else if (color == 'b') {
        return '#76C6FF';
      } else if (color == 'p') {
        return '#e5a8ff';
      } else {
        return 'white';
      }
    },
  }
  
};


</script>