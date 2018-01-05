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
      <div class="pause" v-if="paused">
        <div id="mainMenu" v-if="pauseMenu == 'main'">
          <img src="../../../static/automate/book.png" 
              id="manual"
              class="menuButton"
              @click="pauseMenu = 'manual'">
          <img src="../../../static/automate/achievements.png" 
              id="achievements"
              class="menuButton">
          <img src="../../../static/automate/info.png" 
              id="info"
              class="menuButton">
          <img src="../../../static/automate/help.png" 
              id="help"
              class="menuButton">
        
          <div id="itemEquipped">
            <br>Equipped:
            <div class="item"
                 @click="equipItem()">
              <img src="../../../static/hiddenItem.png" v-if="equipped.catagory == 'Nothing'">
              <img v-bind:src="equipped.image" v-if="equipped.catagory != 'Nothing'"
                   class="itemImage">
            </div>
          </div>
        
        
          <div id="items">
            Items:
            <div id="itemContainer">
              <div class="item" v-for="(item, index) in items" @click="selectItem(item, index)"
                   v-bind:class="{ selectedItem: (selectedItem.id == item.id && item.catagory != 'Nothing') }">
                <img src="../../../static/hiddenItem.png" v-if="item.catagory == 'Nothing'">
                <img v-bind:src="item.image" v-if="item.catagory != 'Nothing'"
                     class="itemImage">
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
              <div class="benchSlot" id="outputSlot"
                   @click="make()">
                <img v-bind:src="newObject.image" v-if="newObject.catagory != 'Nothing'">
<!--                {{newObject}}-->
              </div>
          
            </div>
            <div class="flex-row" v-for="(row, index) in workBench">
              <div class="benchSlot" v-for="(slot, index2) in row" 
                  v-bind:style="{
                                background: colorize(workBench[index][index2])
                                }"
                  @click="updateWorkSlot(index, index2)">
              </div>
            </div>
          
          </div>
        </div>
        <div id="manual" v-if="pauseMenu == 'manual'">
          <div id="manualTitle">
            <span style="text-decoration:underline;cursor:pointer;"
                  @click="pauseMenu = 'main'">Back to Main Menu</span>
            <span>Machine Manual</span>
            <div id="manualBook">
              <div class="recipe" v-for="recipe in recipes">
                <div class="recipeAbout">
                  <b>Name:</b> {{recipe.item.name}}<br>
                  
                
                </div>
                <div class="recipeDesign">
                  <div class="flex-row" v-for="row in recipe.code">
                    <div class="recipeNode" v-for="node in row"
                         v-bind:style="{
                                background: colorize(node)
                                }">
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        
        </div>
        <div id="botMenu" v-if="pauseMenu == 'botMenu'">
        <span style="text-decoration:underline;cursor:pointer;"
                  @click="pauseMenu = 'main'">Back to Main Menu</span>
            <span>Bot Control Panel</span>
          <div id="botProfile">
            <img v-bind:src="selectedItem.image" class="botPic" width="100"><br>
            Name: <input type="text" v-model="selectedItem.botname" id="botNameInput">
            </div>
          <div id="botCode">
            <div class="botCodeLine" v-for="(line, index) in selectedItem.code">
              <span v-bind:style="{color: randomColor(index)}"
                    style="font-weight:bold">{{(index + 1)}}.</span>
              <input type="text" v-model="line.text" 
                     :ref="'codeLine' + line.id" 
                     v-on:keydown.enter="newLine(selectedItem)">
            </div>
          </div>
          
          <div id="equipBotText" @click="equipItem()">Equip This Bot</div>
        </div>
      </div>
      
      <div id="itemEquippedOnGrid">
            <br>Equipped:
            <div class="itemOnGrid">
              <img src="../../../static/hiddenItem.png" v-if="equipped.catagory == 'Nothing'">
              <img v-bind:src="equipped.image" v-if="equipped.catagory != 'Nothing'"
                   class="itemImage">
            </div>
          </div>
      
      <div id="board"
        v-bind:style="{
            left: (0 - ((posX + (plotX * 10))* 20)) + 'px',
            top: (0 - ((posY + (plotY * 10)) * 20)) + 'px'
                      }">
        <bot v-for="(bot, index) in robotsPlaced"
             :initialX="bot.initX"
             :initialY="bot.initY"
             :initialXPlot="bot.initXPlot"
             :initialYPlot="bot.initYPlot"
             ref="bot"
             :key="index"></bot>
        
        <plot
              :xID="0"
              :yID="0"
              ref="plot0x0"
              :initialVisible="true"
              :initialGrid="[
          [['b'],['b'],['b'],['b'],['0'],['0'],['b'],['b'],['b'],['b']],
          [['b'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['b']],
          [['b'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['b']],
          [['b'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['b']],
          [['0'],['0'],['0'],['0'],['0'],
                                         ['s',
                'Thanks for talkin to me! I <i>hate</i> clicking on signs in games.',
                'Press <b>x</b> to pause, and I can show you around the menu.',
                'Do you have the menu open? If not, press <b>X</b>!',
                'Okay! A lot going on here. <br><br>The four icons on the upper left are your <b>manual</b>, <b>achievements</b>, <b>AutoPedia</b>, and <b>Help/Docs</b>.',
            
                            
                            
                            ],
                                               ['0'],['0'],['0'],['0']],
          [['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0']],
          [['b'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['b']],
          [['b'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['b']],
          [['b'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['0'],['b']],
          [['b'],['b'],['b'],['r', 40],['r', 40],['0'],['0'],['b'],['b'],['b']],
        ]"></plot>
        
        
        <!--  ==========================  -->
        <!--  ==========================  -->
        <!--          SOUTH WEST          -->
        <!--  ==========================  -->
        <!--  ==========================  -->
        
        <!--  DOES NOT INCLUDE X/Y AXIS   -->
        
        <plot
              :xID="-2"
              :yID="1"
              ref="plot-2x1"
              :type="'trees'"></plot>
        
        <plot
              :xID="-1"
              :yID="1"
              ref="plot-1x1"
              :type="'trees2'"></plot>
        
        <plot
              :xID="-2"
              :yID="2"
              ref="plot-2x2"
              :type="'trees2'"></plot>
        
        <plot
              :xID="-1"
              :yID="2"
              ref="plot-1x2"
              :type="'trees2'"></plot>
        
        
        <!--  ==========================  -->
        <!--  ==========================  -->
        <!--          SOUTH EAST          -->
        <!--  ==========================  -->
        <!--  ==========================  -->
        
        <!--      INCLUDES X/Y AXIS       -->
        
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
        
        <!--      INCLUDES X/Y AXIS       -->
        
        <plot
              :xID="-2"
              :yID="-1"
              ref="plot-2x-1"
              :type="'rocks'"></plot>
        
        <plot
              :xID="-1"
              :yID="-1"
              ref="plot-1x-1"
              :type="'rocks'"></plot>
        
        <plot
              :xID="-2"
              :yID="0"
              ref="plot-2x0"
              :type="'rocks'"></plot>
        
        <plot
              :xID="-1"
              :yID="0"
              ref="plot-1x0"
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
        
        <!--  DOES NOT INCLUDE X/Y AXIS   -->
        
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
  // change them in the colorize() function too!
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
    margin-top: -30px;
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
    top: 70px;
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
    height: 140px;
    border: solid black 1px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 490px;
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
  
  .pause {
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
  #itemEquippedOnGrid {
    background: none;
    font-size: 10px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 900;
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
  
  .itemOnGrid {
    width: 33px;
    height: 33px;
    border: solid 1px black;
    outline: solid 1px black;
    margin: 3px;
    background: white;
    image-rendering: pixelated;
  }
  
  #resources {
    position: absolute;
    top: 170px;
    left: 80px;
    height: 140px;
    font-size: 10px;
    width: 55px;
  }
  .colorHolder {
    display: flex;
/*    justify-content: space-between;*/
    font-size: 14px;
  }
  .color {
    width: 15px;
    height: 15px;
    margin-bottom: 2px;
    border: solid black 2px;
    cursor: pointer;
    margin-right: 5px;
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
  .flex-row {
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
  .selectedItem {
    border: solid lightgreen 1px;
    outline: solid lightgreen 1px;
  }
  .selectedItem:hover {
    border: solid lightgreen 1px;
    outline: solid lightgreen 1px;
  }
  
  #manualTitle {
    width: 90%;
    position: absolute;
    left: 0;
    right: 0;
    top: 10px;
    margin: auto;
    display: flex; 
    justify-content: space-between;
  }
  
  #manualBook {
    position: absolute;
    width: 100%;
    top: 30px;
    height: 290px;
    border: solid black 2px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background: lightgray;
    font-size: 10px;
  }

  .recipe {
    width: 45%;
    border: solid black 1px;
    height: 50px;
    background: white;
    margin-top: 10px;
    padding: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .recipeDesign {
    margin-right: 5px;
  }
  
  .recipeNode {
    height: 5px;
    width: 5px;
    outline: solid gray 1px;
    
  }
  .itemImage {
    image-rendering: pixelated;
    width: 33px;
    height: 33px;
  }
  #botMenu {
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
  #botProfile {
    position: absolute;
    top: 60px;
    left: 15px;
    text-align: left;
    font-size: 12px;
  }
  .botPic {
    image-rendering: pixelated;
    height: 100px;
    width: 100px;
    border: solid black 2px;
  }
  #botNameInput {
    width: 60px;
    outline: none;
    border: none;
    border-bottom: solid black 1px;
  }
  #botCode {
    position: absolute;
    left: 140px;
    top: 60px;
    width: 190px;
    height: 250px;
    background: #efefef;
    border: solid black 2px;
    padding: 1px;
    overflow: scroll;
  }
  .botCodeLine {
    background: white;
    padding-left: 4px;
    input {
      background: none;
      border: none;
      outline: none;
      border-bottom: lightgray solid 1px;
      height: 15px;
      width: 150px;
    }
    input:focus {
      border-bottom: black solid 1px;
    }
  }
  #equipBotText {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 14px;
    text-decoration: underline;
    cursor: pointer;
  }

</style> 

<script>
import player from './player.vue';
import plot from './plot.vue';
import bot from './bot.vue';
  
// CONTROLS
var keys = {
  UP: 38,     // Move, etc
  LEFT: 37,   // Move, etc
  RIGHT: 39,  // Move, etc
  DOWN: 40,   // Move, etc
  SPACE: 32,  // Pause
  P: 80,      // Pause
  X: 88,      // Pause
  ESC: 27,    //
  ENTER: 13,  //
  Z: 90,      // Interact
  A: 65,      // Place
    
  H: 72 
};
  
var defItem = {
  id: '000',
  name: 'Nothing',
  catagory: 'Nothing',
  image: 'Nothing',
}


var gridSpace = {
  template: ""
}

export default {
  components: {
    player,
    plot,
    bot
  },
  
  mounted: function() {
    
    var self = this;
    window.addEventListener('keydown', function(e){
      keys[e.keyCode || e.which] = true;
      
      // Put key commands here if you want them to execute immediately
      // Note that you have to use "self" instead of "this" in this scope
      
      if (e.keyCode === Number(keys.P) || e.keyCode === Number(keys.X)) {
        self.pauseMenu = 'main';
        self.paused = !self.paused;
      }
      
      // CAN go to next dialogue when paused
      if (e.keyCode === Number(keys.ENTER)) {
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
      if (keys[keys.A]) {
          if (keys[keys.DOWN]) {
            self.place(0, 1);
          } 
          if (keys[keys.UP]) {
            self.place(0, -1);
          }
          if (keys[keys.LEFT]) {
            self.place(-1, 0);
          } 
          if (keys[keys.RIGHT]) {
            self.place(1, 0);
          }
          
        } 
      
    }, true);

    window.addEventListener('keyup', function(e){
      keys[e.keyCode || e.which] = false;
    }, true);
    
    setInterval(this.click, 10);
    
    this.currentGrid = this.getPlotGrid();
    this.debugMode();
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
      pauseMenu: 'main',
      
      // defItem is a default item, defined outside Vue as a global var
      items: [defItem,defItem,defItem,defItem,
              defItem,defItem,defItem,defItem,
              defItem,defItem,defItem,defItem],
      selectedItem: 0,
      equipped: defItem,
      
      workBench: [
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0],
      ],
      
      colorMap: {
        r: 'red',
        o: 'orange',
        y: 'yellow',
        g: 'green',
        b: 'blue',
        p: 'purple',
        red: 'r',
        orange: 'o',
        yellow: 'y',
        green: 'g',
        blue: 'b',
        purple: 'p',
      },
      
      red: 5,
      orange: 1,
      yellow: 1,
      green: 1,
      blue: 5,
      purple: 1,
      darkPurple: 0,
      
      selected: ' ',
      
      recipes: [
        {
          found: true,
          item: {
            id: '001',
            name: 'Blue Bot',
            catagory: 'robot',
            image: '../../static/automate/bluebot.png',
            
            botname: 'None :(',
            botID: 0,
            initX: 0,
            initY: 0,
            initXPlot: 0,
            initYPlot: 0,
            code: [
              {
                id: 0,
                text: '',
                type: '',
                arguments: '',
                lhs: '',
                rhs: '',
                operation: '',
                
              },
                  ]
          },
          code: [
            [' ',' ',' ',' ',' '],
            [' ','b',' ','b',' '],
            [' ',' ',' ',' ',' '],
            [' ','b','b','b',' '],
            [' ',' ',' ',' ',' ']
          ]
        },
        {
          found: false,
          item: {
            id: '002',
            name: 'Bomb',
            gridArr: ['itemB', 5],
            catagory: 'item',
            image: '../../static/automate/bomb.png',
          },
          code: [
            [' ',' ',' ','r',' '],
            [' ','r','r',' ',' '],
            ['r','r','r','r',' '],
            ['r','r','r','r',' '],
            [' ','r','r',' ',' ']
          ]
        },
        {
          found: false,
          item: {
            id: '003',
            name: 'Fairy House A',
            gridArr: ['itemMA', 5],
            catagory: 'item',
            image: '../../static/automate/fairy_house.gif',
          },
          code: [
            [' ',' ','r',' ',' '],
            [' ','r','r','r',' '],
            ['r','r','r','r','r'],
            [' ','b','b','b',' '],
            [' ','b','r','b',' ']
          ]
        },
        {
          found: false,
          item: {
            id: '004',
            name: 'Fairy House B',
            gridArr: ['itemMB', 5],
            catagory: 'item',
            image: '../../static/automate/fairy_house2.gif',
          },
          code: [
            [' ',' ','p',' ',' '],
            [' ','p','p','p',' '],
            ['p','p','p','p','p'],
            [' ','y','y','y',' '],
            [' ','y','p','y',' ']
          ]
        },
        {
          found: false,
          item: {
            id: '005',
            name: 'Opal',
            gridArr: ['itemOpal', 5],
            catagory: 'item',
            image: '../../static/automate/opal.gif',
          },
          code: [
            [' ',' ',' ',' ',' '],
            [' ','r','o','g',' '],
            ['o','y','g','b','p'],
            [' ','g','b','p',' '],
            [' ',' ',' ',' ',' ']
          ]
        }
      ],
      
      robotsPlaced: [],
      
      currentGrid: [],
      
      objInfo: '',
      
      // The following dialogue gets displayed only at the beginning of the game
      dialogue: ['<b><u>Hey you!</b></u> Read this and then press <b>enter</b>!', 
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
          description: "Blocks your path :(",
          resource: "Brick",
          gives: 'red',
          neededToBreak: 'bomb'
        },
        0: {
          name: "Nothin'",
          description: "There's nothing here, your path is clear!"
        },
        r: {
          name: "Rock",
          description: "Big ol' rock. Nothing special.",
          resource: "Metal",
          gives: 'blue'
        },
        t: {
          name: "Tree",
          description: "A very nice tree!",
          resource: "Wood",
          gives: 'green'
        },
        f: {
          name: "B&W Flower",
          description: "An inky flower."
        },
        itemB: {
          name: "Bomb",
          description: "This thing's gonna blow!!"
        }
      }
    }
  },
  
  computed: {
    redDisp: function() {
      var temp = this.red;
      for (var i = 0; i < this.workBench.length; i++) {
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
      for (var i = 0; i < this.workBench.length; i++) {
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
      for (var i = 0; i < this.workBench.length; i++) {
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
      for (var i = 0; i < this.workBench.length; i++) {
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
      for (var i = 0; i < this.workBench.length; i++) {
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
      for (var i = 0; i < this.workBench.length; i++) {
        for (var j = 0; j < this.workBench[i].length; j++) {
          if (this.workBench[i][j] == 'p') {
            temp -= 1;
          }
        }
      }
      return temp;
    },
    
    newObject: function() {
      for (var r = 0; r < this.recipes.length; r++) {        
        var found = true;
        for (var i = 0; i < this.workBench.length; i++) {
          for (var j = 0; j < this.workBench[i].length; j++) {
            if (this.workBench[i][j] != this.recipes[r].code[i][j]) {
              found = false;
            }
          }
        }
        if (found) {
          return this.recipes[r].item;
        }
      }
      return {
            id: '000',
            name: 'Nothing',
            catagory: 'Nothing',
            image: '.'
          };
    },
  },
  
  methods: {
    // This function happens once every .1 seconds
    // when not paused
    click() {
      this.time++;
      
      if (this.paused) {
        return;
      }
      
      // Put key commands here if you want them to be paced
      if (this.time % (20) === 0) {
                                                           // 100
        if ((keys[keys.Z] || keys[keys.SPACE]) && this.time % 20 === 0) {
          // Interaction commands taken care of in Mounted()
          if (keys[keys.DOWN]) {
            this.mine(0, 1);
          } 
          if (keys[keys.UP]) {
            this.mine(0, -1);
          }
          if (keys[keys.LEFT]) {
            this.mine(-1, 0);
          } 
          if (keys[keys.RIGHT]) {
            this.mine(1, 0);
          }
        } else {
          // Movement
          if (keys[keys.DOWN]) {
            this.move(0, 1);
          } else if (keys[keys.UP]) {
            this.move(0, -1);
          } else if (keys[keys.LEFT]) {
            this.move(-1, 0);
          } else if (keys[keys.RIGHT]) {
            this.move(1, 0);
          }
        }
      }
      
      // BOT INSTRUCTIONS
      if (this.time % (20) === 0) {
        for (var i = 0; i < this.robotsPlaced.length; i++) {
          this.$refs.bot[i].doCode();
        }
      }
    },
    
    interact(x, y) {
      var obj;
      if (this.currentGrid[this.posY + y] == undefined || this.currentGrid[this.posY + y][this.posX + x] == undefined) {
        obj = this.getNewPlotSpace(this.posY + y, this.posX + x);
      } else {
        obj = this.currentGrid[this.posY + y][this.posX + x];
      }
      this.objInfo = "<b>Object tag: </b> " + obj[0];
      
      if (this.objects[obj[0]] == undefined) {
        return;
      }
      
      // Resource giving objects
      if (obj.length > 1 && (obj[0] == 'r' || obj[0] == 't')) {
        this.objInfo += "<br><b>" + this.objects[obj[0]].resource + ": </b>";
        this.objInfo += obj[1];
      }
      
      // Signs 
      if (obj[0] == 's') {
        var newArray = obj.slice();
        newArray.shift();
        newArray.push('');
        this.dialogue = newArray;
      }
      this.objInfo += "<br><b>Name: </b>" + this.objects[obj[0]].name;
      this.objInfo += "<br><b>Description: </b>" + this.objects[obj[0]].description;
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
      var tempPlot = this.getPlotGridArgs(newPlot[0], newPlot[1]);
      return tempPlot[x][y];
    },
    mine(x, y) {
      var obj;
      if (this.currentGrid[this.posY + y] == undefined || this.currentGrid[this.posY + y][this.posX + x] == undefined) {
        obj = this.getNewPlotSpace(this.posY + y, this.posX + x);
      } else {
        obj = this.currentGrid[this.posY + y][this.posX + x];
      }
      if (this.objects[obj[0]].gives == undefined) {
        return;
      } else if (this.objects[obj[0]].neededToBreak == 'bomb') {
        return;
      }
      if (obj[1] > 0) {
        obj[1]--;
        this[this.objects[obj[0]].gives]++;
      } else {
        Vue.set(obj, 0, '0');
      }
    },
    place(x, y) {
      var obj = this.currentGrid[this.posY + y][this.posX + x];
      
      if (obj[0] != '0' || this.equipped.catagory == 'Nothing') {
        return;
      } 
      
      else if (this.equipped.catagory == 'item') {
        for (var i = 0; i < this.equipped.gridArr.length; i++) {
          Vue.set(obj, i, this.equipped.gridArr[i]);
        }
        this.equipped = defItem;
      } 
      
      else if (this.equipped.catagory == 'robot') {
        this.equipped.initX = this.posX + x;
        this.equipped.initY = this.posY + y;
        this.equipped.initXPlot = this.plotX;
        this.equipped.initYPlot = this.plotY;
        if (this.equipped.initX > 9) {
          this.equipped.initX = 0;
          this.equipped.initXPlot++;
        } else if (this.equipped.initX < 0) {
          this.equipped.initX = 9;
          this.equipped.initXPlot--;
        }
        if (this.equipped.initY > 9) {
          this.equipped.initY = 0;
          this.equipped.initYPlot++;
        } else if (this.equipped.initY < 0) {
          this.equipped.initY = 9;
          this.equipped.initYPlot--;
        }
        this.robotsPlaced.push(this.equipped);
        this.equipped = defItem;
      }
    },
    
    nextDialogue() {
      if (this.objInfo != '') {
        this.objInfo = '';
      } else if (this.dialogue.length > 1) {
        this.dialogue.shift();
        
      }
      
    },
    collisionCheck(grid, x, y) {
      if (grid[y] == undefined) {
        // Handles going down into a new plot
        if (y > 9) {
          this.posY = -1;
          this.plotY++;
          this.currentGrid = this.getPlotGrid();
          if (this.currentGrid == 0 || this.currentGrid[0][x] != '0') {
            this.posY = 9;
            this.plotY--;
            this.currentGrid = this.getPlotGrid();
            return true;
          } else {
            this.makeVis();
            return false;
          }
          // Handles going up into a new plot
        } else if (y < 0) {
          this.posY = 10;
          this.plotY--;
          this.currentGrid = this.getPlotGrid();
          if (this.currentGrid == 0 || this.currentGrid[9][x] != '0') {
            this.posY = 0;
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
          this.posX = -1;
          this.plotX++;
          this.currentGrid = this.getPlotGrid();
          if (this.currentGrid == 0 || this.currentGrid[y][0] != '0') {
            this.posX = 9;
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
          this.posX = 10;
          this.plotX--;
          this.currentGrid = this.getPlotGrid();
          if (this.currentGrid == 0 || this.currentGrid[y][9] != '0') {
            this.posX = 0;
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
    move(x, y) {
      if (this.collisionCheck(this.currentGrid, (this.posX + x), (this.posY + y))) {
        console.log('you just hit a rock!');
      } else {
        this.posX += x;
        this.posY += y;
      }
    },
    getPlotGrid() {
      if (this.$refs['plot' + this.plotX + 'x' + this.plotY] != undefined) {
        return this.$refs['plot' + this.plotX + 'x' + this.plotY].grid;
      } else {
        return 0;
      }
    },
    getPlotGridArgs(x, y) {
      if (this.$refs['plot' + x + 'x' + y] != undefined) {
        return this.$refs['plot' + x + 'x' + y].grid;
      } else {
        return 0;
      }
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
    
    randomColor(num) {
      var rainbow = ['r','o','y','g','b','p'];
      var randColor = rainbow[num % 6];
      return this.colorize(randColor);
    },
    
    updateWorkSlot(x, y) {      
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
    
    make: function() {
      if (this.addToInventory(this.newObject)) {
        
        this.red = this.redDisp;
        this.orange = this.orangeDisp;
        this.yellow = this.yellowDisp;
        this.green = this.greenDisp;
        this.blue = this.blueDisp;
        this.purple = this.purpleDisp;
        this.workBench = [
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
        ];
      }
    },
    
    addToInventory(item) {
      for (var i = 0; i < this.items.length; i++) {
        console.log(i);
        console.log(this.items.length);
        console.log(this.items[i].catagory);
        if (this.items[i].catagory == 'Nothing') {
          this.items[i] = item;
          return true;
        } else if (i == (this.items.length - 1)) {
          return false;
        }
      }
    },
    
    selectItem: function(item, index) {
      this.selectedItem = item;
      console.log("selectedItem.index for real:")
      
      this.selectedItem.index = index;
      
      if (item.catagory == 'robot') {
        this.pauseMenu = 'botMenu';
      }
    },
    
    equipItem: function() {
      if (this.equipped.catagory != 'Nothing') {
        this.addToInventory(this.equipped);
        this.equipped = defItem;
        return;
      }
      this.equipped = this.selectedItem;
      
      this.items[this.selectedItem.index] = defItem;
      this.selectedItem = defItem;
      this.paused = false;
    },
    
    newLine: function(bot) {
      var newLine = {
              id: (bot.code.length + 1),
              text: '',
              type: '',
                arguments: '',
                lhs: '',
                rhs: '',
                operation: '',
                
              };
      bot.code.push(newLine);
      this.$refs['codeLine0'].focus();
    },
    
    debugMode() {
      this.red = 100;
      this.yellow = 100;
      this.orange = 100;
      this.green = 100;
      this.blue = 100;
      this.purple = 100;
      this.items[0] = this.recipes[0].item;
      this.items[1] = this.recipes[1].item;
    }
  }
  
  
  
};


</script>