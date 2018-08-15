<template>
<div id="jams">
    <div id="container"></div>

  <div id="notes">
    <div class="row" v-for="octave in noteFreq">
<!--      {{octave}}-->
       <div class="square" v-for="note in octave"
            :class="{
                    blue: note[3]
                    }"
            @click="playNote(note)">
         {{note[1]}}
      </div> 
    </div>
  </div>
  
  <div id="type-changer">
    <button @click="type = 'sine'"
            :class="{ selected: type == 'sine'}">
      Sine
    </button>
    <button @click="type = 'triangle'"
            :class="{ selected: type == 'triangle'}">
      triangle
    </button>
    <button @click="type = 'sawtooth'"
            :class="{ selected: type == 'sawtooth'}">
      sawtooth
    </button>
    <button @click="type = 'square'"
            :class="{ selected: type == 'square'}">
      square
    </button>
    <br>
    <button @click="startFugue()">Start Fugue</button>
  </div>


</div>
</template>

<script>
  var audioCtx  = new (window.AudioContext || window.webkitAudioContext);
import Vue from 'vue';
  
export default{
  data() {
    return {
      audioCtx: audioCtx,
      
      type: 'sine', // Other options: triangles, sawtooth, square

      noteFreq: this.createNoteTable(),
      
      fugueBassScore: [ 'square',
                       [1, 'G', 600],
                       [2, 'D', 600],
                       [1, 'A#', 900],
                       [1, 'A', 300],
                       
                       [1, 'G', 300],
                       [1, 'A#', 300],
                       [1, 'A', 300],
                       [1, 'G', 300],
                       [1, 'F#', 300],
                       [1, 'A', 300],
                       [1, 'D', 600],
                       
                       [1, 'G', 300],
                       [1, 'D', 300],
                       [1, 'A', 300],
                       [1, 'D', 300],
                       [1, 'A#', 300],
                       [1, 'A', 150],
                       [1, 'G', 150],
                       [1, 'A', 300],
                       [1, 'D', 300],
                       
                       [1, 'G', 300],
                       [1, 'D', 150],
                       [1, 'G', 150],
                       [1, 'A', 300],
                       [1, 'D', 150],
                       [1, 'A', 150],
                       [1, 'A#', 300],
                       [1, 'A', 150],
                       [1, 'G', 150],
                       [1, 'A', 300],
                       [1, 'D', 150],
                       
                       [2, 'D', 150],
                       [1, 'A#', 150],
                       [1, 'A', 150],
                       [1, 'G', 150],
                       [1, 'A#', 150],
                       [1, 'A', 150],
                       [1, 'G', 150],
                       [1, 'F#', 150],
                       [1, 'A', 150],
                       [1, 'G', 150],
                       [1, 'D', 150],
                       [1, 'G', 150],
                       [1, 'A', 150],
                       [1, 'A#', 150],
                       [2, 'C', 150],
                       [2, 'D', 150],
                       [2, 'E', 150],
                       
                       [2, 'F', 150],
                       [2, 'E', 150],
                       [2, 'D', 150],
                       [2, 'F', 150],
                       [2, 'E', 150],
                       [2, 'D', 150],
                       [2, 'C#', 150],
                       [2, 'E', 150],
                       [2, 'D', 150],
                       ['rest', 'rest', 150],
                       [1, 'A', 150],
                       ['rest', 'rest', 150],
                       [2, 'D', 150],
                       ['rest', 'rest', 150],
                       [2, 'E', 150],
                       ['rest', 'rest', 150],
                       [2, 'F', 150],
                       [2, 'G', 150],
                       [2, 'F', 150],
                       [2, 'G', 150],
                       [2, 'A', 75],
                       [2, 'G', 75],
                       [2, 'A', 75],
                       [2, 'G', 75],
                       [2, 'A', 75],
                       [2, 'G', 75],
                       [2, 'F', 75],
                       [2, 'G', 75],
                       [2, 'A', 150],
                       [2, 'G', 150],
                       [2, 'A', 150],
                       [2, 'A#', 150],
                       [2, 'A', 150],
                       [2, 'G', 150],
                       [2, 'F', 150],
                       [2, 'E', 150],
                       
                       [2, 'F', 150],
                       [2, 'A', 150],
                       [2, 'G', 150],
                       [2, 'A', 150],
                       [2, 'C', 150],
                       [2, 'A', 150],
                       [2, 'G', 150],
                       [2, 'A', 150],
                       [2, 'D', 150],
                       [2, 'A', 150],
                       [2, 'G', 150],
                       [2, 'A', 150],
                       
                       
                      ]
    }
  },
  
  methods: {
    createNoteTable() {
      var noteFreq = [];
      for (var i=0; i< 9; i++) {
        
        
        var octave = {};

        octave['C'] = [(32.703195662574829 * Math.pow(2, i)), 'C', i, false];
        octave['C#'] = [(34.647828872109012 * Math.pow(2, i)), 'C#', i, false];
        octave['D'] = [(36.708095989675945 * Math.pow(2, i)), 'D', i, false];
        octave['D#'] = [(38.890872965260113 * Math.pow(2, i)), 'D#', i, false];
        octave["E"] = [41.203444614108741 * Math.pow(2, i), 'E', i, false];
        octave["F"] = [43.653528929125485 * Math.pow(2, i), 'F', i, false];
        octave["F#"] = [46.249302838954299 * Math.pow(2, i), 'F#', i, false];
        octave["G"] = [48.999429497718661 * Math.pow(2, i), 'G', i, false];
        octave["G#"] = [51.913087197493142 * Math.pow(2, i), 'G#', i, false];
        octave["A"] = [55.000000000000000 * Math.pow(2, i), 'A', i, false];
        octave["A#"] = [58.270470189761239 * Math.pow(2, i), 'A#', i, false];
        octave["B"] = [61.735412657015513 * Math.pow(2, i), 'B', i, false];;
        noteFreq.push(octave);
      }
      return noteFreq;
    },
    
    playNote(freq) {
      if (this.noteFreq[freq[2]][freq[1]]) {
        var note = this.audioCtx.createOscillator();
        note.frequency.value = freq[0];
        note.type = this.type;
        note.start();
        note.connect(this.audioCtx.destination);
        Vue.set(this.noteFreq[freq[2]][freq[1]], 3, true);
        var vm = this;
        setTimeout(function() {
          note.stop();
          Vue.set(vm.noteFreq[freq[2]][freq[1]], 3, false);

        }, 300)
      }
    },
    
    playSong(songname) {
      this.noteIterator(songname, 1)
    },
    noteIterator(songname, i) {
      // Grabbing the current note. It will be an array like this: 
      // [octave, note, duration]
      var noteDetails = this[songname][i];
      var vm = this;
      
      // Handling rests:
      if (noteDetails[1] == 'rest') {
        setTimeout(function() {
          if (i < vm[songname].length - 1){
            vm.noteIterator(songname, i + 1)
          }
        }, noteDetails[2]);
        return;
      }
      
      // Now getting the corresponding frequency integer from noteFreq table:
      var freq = this.noteFreq[noteDetails[0]][noteDetails[1]];
      
      console.log("Note " + i + ":", freq);
      
      
      if (true || this.noteFreq[noteDetails[0]][noteDetails[1]]) {
        var note = this.audioCtx.createOscillator();
        note.frequency.value = freq[0];
        note.type = this[songname][0];
        note.start();
        note.connect(this.audioCtx.destination);
        Vue.set(this.noteFreq[noteDetails[0]][noteDetails[1]], 3, true);

        setTimeout(function() {
          note.stop();
          Vue.set(vm.noteFreq[noteDetails[0]][noteDetails[1]], 3, false);
          // Remember that the variable 'vm' is just 'this'
          if (i < vm[songname].length - 1){
            vm.noteIterator(songname, i + 1)
          }
        }, noteDetails[2])
      }
    },
    startFugue() {
      this.playSong('fugueBassScore');
    },
    
  },
  
  
    
  mounted() {
  }
};






  
</script>

<style scoped lang="scss">
$yellow: #ffee7d;
$blue: #44fadd;


#jams {
  perspective: 700px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: #534c98;
}
  
  #type-changer {
    position: absolute;
    right: 0px;
    top: 0px;
  }
  
  .selected {
    background: $yellow;
  }

#container {
  transform: rotatey(-20deg) rotatex(-0deg);
    transform-style: preserve-3d;
  position: absolute;
  background: linear-gradient(#081962, #182952);
  width: 50%;
  margin-left: 35%;
  height: 30vh;
  margin-top: 50vh;
}

.row {
  display: flex;
  flex-direction: row;
}
  
  #notes {
    transform: rotatey(10deg) rotatex(-0deg);
    transform-style: preserve-3d;
    margin-top: 200px;
    margin-left: 10%;
  }
 
.square {
  width: 30px;
  height: 30px; 
  margin: 2px;
  background: $yellow;
  transition-duration: .1s;
  cursor: pointer;
}
  .square:hover {
    outline: solid #b767ff 2px;
  }
  .blue {
    background: $blue;
/*
    box-shadow: 1px 1px 0px $yellow,
      2px 2px 0px $yellow;
*/
/*    margin: 0px 0px 4px 4px;*/
    transform: translatez(-20px);
  }
</style>