<template>
<div id="mojiwars">

<h4 style="color:white;">Round: {{round + 1}}</h4>

<div id="moves">
  Moves:<br>
  <button v-for="move in moves"
       class="move"
          @click="makeMove(move)"
          v-bind:class="{
                        disabled: (move.cost != undefined) && 
                        turn < 2 &&
                        (move.cost.amt > p[turn][move.cost.info.name])
                        }">
    {{ move.emoji }}
    <br>
    <span class="moveCost" v-if="move.cost != undefined">
      {{ move.cost.info.icon}}x{{move.cost.amt}}
    </span>
  </button>
  </div>
  
  <div id="playerDisps">
  <div class="playerDisp"
       v-for='(player, pIndex) in p'
       v-bind:class="{
                     selected: turn == pIndex
                     }"> 
    Player {{ pIndex + 1 }}:<br>
    
    Health: {{player.health}}<br>
    💰: {{player.gold}}
    <br>
    Upcoming moves:<br>
    <button v-for="(move, index) in player.nextMoves"
            class="move moveIcon"
            v-bind:class="{
                           selected: selectedSlot == index && turn == pIndex
                           }"
            @click="selectedSlot = index">
      <span v-if="move.emoji != undefined">
        {{move.emoji}}
      </span>
      <span v-else> 
        ?
      </span>
    </button>
    <br>
    
    <button class="move" @click="changeTurns()"
            v-if="turn == pIndex">
      Ready!
    </button>
  </div>
    </div>
  
  <div id="board">
    <div id="player1">
      {{ p[0].emoji }}
    </div>
    
    <div id="p1resources">
      <span v-for="resource in feild"
            v-if="resource.emoji != undefined"
            class="resourceHolder">
        {{ resource.emoji }}
      </span>
    </div>
  
    <div id="player2">
      {{ p[1].emoji }}
    </div>
    
    <div id="dogGaurds">
      <span v-for="player in p">
        <span v-if="player.items.dogs > 0">
          🐶
          <span style="font-size: 12px;">x{{player.items.dogs}}</span>
        </span>
      </span>
    
    </div>
    
    <div id="feildRotator">
      <div id="feild">
      </div>
    </div>
   </div>
  
  <button @click="playRound()"
          v-if="turn == 2"
          class="move nextButton">
    Next!
  </button>
  
  
  </div>
  

</template>


<script>
  import Vue from 'vue'
  
const items = {
  gold: {
    icon:'💰',
    dispName: 'Gold',
    name: 'gold'
  }
}
  
export default {
  data() {
    return {
      round: 0,
      turn: 0,
      
      // Stores which slot is selected by players during round setup
      // Stores which slot is being played during round execution
      selectedSlot: -1,
      turnCount: 0,
      
      moves: [{
        emoji: '⚔️',
        name: 'attack',
        cost: undefined
      }, {
        emoji: '🛡',
        name: 'sheild',
        cost: undefined
      }, {
        emoji: '⛏',
        name: 'mine',
        cost: undefined
      }, {
        emoji: '🐶',
        name: 'dog',
        cost: {
          info: items.gold,
          amt: 1
        }
      }, {
        emoji: '🔥', 
        name: 'fire',
        cost: undefined
      }, {
        emoji: '🌲',
        name: 'tree',
        cost:undefined
      }, {
        emoji: '🦁',
        name: 'lion',
        cost: {
          info: items.gold,
          amt: 5
        }
      }, {
        emoji: '💧',
        name: 'water'
      }],
      
      feild: [
        {
          emoji: '',
          name: ''
        },
        {
          emoji: '',
          name: ''
        }
      ],
      
      p: [{
        health: 100,
        money: 0,
        
        emoji: '👾',
        
        gold: 0,
        
        items: {
          attack: 0,
          fire: 0,
          sheild: 0,
          dogs: 0,
          tree: 0,
          lion: 0,
          water: 0
        },
        nextMoves: [{}, {}, {}, {}, {}]
      },
      {
        health: 100,
        money: 0,
        emoji: '👻',
        
        gold: 0,
        
        items: {
          attack: 0,
          fire: 0,
          sheild: 0,
          dogs: 0,
          tree: 0,
          lion: 0,
          water: 0
        },
        nextMoves: [{}, {}, {}, {}, {}]
      }]
    }
  },
  methods: {
    
    makeMove(move) {
      // Handles selectedSlot outside 0-4
      if (this.selectedSlot == -1 || this.selectedSlot >= this.p[this.turn].nextMoves.length) {
        return;
      }
     
      if (move.cost != undefined) {
        if (move.cost.amt > this.p[this.turn][move.cost.info.name]) {
          return;
        } else {
          this.p[this.turn][move.cost.info.name] -= move.cost.amt;
        }
      }
      Vue.set(this.p[this.turn].nextMoves, this.selectedSlot, move)
      //this.p[this.turn].nextMoves[this.selectedSlot] = move;
      if (this.selectedSlot < this.p[this.turn].nextMoves.length - 1) {
        this.selectedSlot++;
      }
    },
    changeTurns() {
      if (this.turn == 0) {
        
        this.selectedSlot = 0;
        this.turn++
      } else if (this.turn == 1) {
        this.turn++;
        this.selectedSlot = 0;
        this.playRound();
      } else if (this.turn == 2) {
        this.playRound();
      }
    },
    
    playRound() {
      if (this.selectedSlot >=5 ) {
        this.turn = 0;
        this.selectedSlot = 0;
        this.round++;
        this.feild[0].emoji = '';
        this.feild[0].name = '';
        this.feild[1].emoji = '';
        this.feild[1].name = '';
        return;
      }
      
      for (var i in this.feild) {
        
        var newObj = this.p[i].nextMoves[this.selectedSlot];
        if (newObj.emoji == undefined) {
          var newObj = {
            emoji: "",
            name: ""
          }
        }
        this.feild[i].emoji = newObj.emoji;
        this.feild[i].name = newObj.name;
        
        // Resetting the user's slot
        this.p[i].nextMoves[this.selectedSlot] = {};
      }
      
      this.handleMoves(this.feild);
      this.selectedSlot++
    },
    
    handleMoves(feild) {
      
      // This loop should let us define each interaction once and have it
      // work for both players.
      for (var i in this.p) {
        var j = 0;
        if (i == 0) {
          j = 1;
        }
        
        // If player A attacks, and player B defends, nothing happens
        // If player A attacks and B has a dog, the dog takes the hit
        
        if (feild[i].name == 'attack' && feild[j].name != 'sheild') {
          if (this.p[j].items.dogs > 0) {
            this.p[j].items.dogs--;
          } else {
            this.p[j].health--;
          }
        }
        else if (feild[i].name == 'mine') {
          this.p[i].gold++;
        } else if (feild[i].name == 'dog') {
          this.p[i].items.dogs++;
        }
        
      }
      
    }
  }
}
</script>

<style scoped>
.move {
   margin: 5px;
  background: #F0CDFB;
  font-size: 20px;
  outline: none;
}
.move:hover {
  filter: brightness(.9);
  cursor: pointer;
}

#moves {
  background: aquamarine;
  width: 20%; 
  padding: 15px;
}
#feildRotator {
  transform: rotatex(55deg);
}

#mojiwars {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #20175E;
}

#feild {
 
  background: lightgreen;
  box-shadow: 1px 1px 0px #66bB59,
    2px 2px 0px #66bB59,
    3px 3px 0px #66bB59,
    4px 4px 0px #66bB59,
    5px 5px 0px #66bB59,
    6px 6px 0px #66bB59,
    7px 7px 0px #66bB59,
    8px 8px 0px #66bB59,
    9px 9px 0px #66bB59,
    10px 10px 0px #66bB59;
  width: 300px;
  height:  300px;
  transform: rotatez(45deg) ;
}

#board {
  position: absolute;
  font-size: 40px;
  left: 50%;
  transform: translatex(-50%);
}
  
  #playerDisps {
    display: flex;
    justify-content: space-between;
  }
  .playerDisp {
    background: white;
    min-height: 50px;
    border: solid black 2px;
    padding: 20px;
  }
  #player1 {
    position: absolute;
    left: 20px;
    top: 120px;
    z-index: 100;
  }
  #player2 {
    position: absolute;
    right: 20px;
    top: 120px;
    z-index: 100;
  }
  
  .selected {
    border: solid 4px lightgreen;
  }
  
  .nextButton {
    font-size: 40px;
    margin-top: 300px;
  }
  
  #p1resources {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 100;
/*    border: solid 10px red;*/
  }
  .resourceHolder {
    background: white;
    padding: 5px;
    min-width: 50px;
    min-height: 50px;
  }
  
  .moveIcon {
    min-width: 50px;
    min-height: 50px;
  }
  .moveCost {
    font-size: 12px;
    background: white;
    width: 100%;
    display: block;
  }
  
  .disabled {
    opacity: .5;
  }
  
  #dogGaurds {
    width: 200px;
/*    border: solid red 1px;*/
/*    display: none;*/
    position: absolute;
    z-index: 100;
    left: 50%;
    transform: translatex(-50%);
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
  }
</style>