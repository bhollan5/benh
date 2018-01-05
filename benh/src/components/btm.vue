<template>
  <div id="btm">
    <div id="darken" v-if="paused != 'none'" @click="paused = 'none'">
    
    </div>
    <div id="adminLoginPanel" v-if="paused == 'adminPanel'">
      Admin log in
      
      <br><br>
      (If you're not Ben or Brad, you probably shouldn't be here :P)<br>
      Password: <input type="password" v-model="passGuess"
                       v-on:keyup.enter="guessPassword()"><br>
      <button @click="guessPassword()">Log in</button>
    </div>
    
    <div id="newShowPanel" class="panel" v-if="paused == 'newShowPanel'">
      New Show
      <div class="requestForm">
        <span><b>*</b>Show Date:</span>
        <input type="text"
               placeholder="Ex: MM-DD-YYYY"
               class="btmInput"
               v-model="currentShow.date"
               v-on:keyup.enter="addShow()">
      </div>
      <span style="color: red;margin-left: 20px;"
            v-if="showDateErr">**Must have a date!</span>
      <button class="btmButton"
                  @click="addShow()">Submit!</button>
    </div>
    
    <div id="showReqPanel" class="panel" v-if="paused == 'showReqPanel'">
    
    </div>
      
    <div id="requestPanel" class="panel" v-if="paused == 'requestPanel'">
      Request to play {{ currentShow.date }}
      <br>
      <b>*Required field</b>
      <br>
      <br>
      <div class="requestForm">
        <span><b>*</b>Band Name:</span>
        <input type="text"
               placeholder="Ex: James and the Jameses"
               class="btmInput"
               v-model="currentBand.name"
               v-on:keyup.enter="submitRequest()">
      </div>
      <span style="color: red;margin-left: 20px;"
            v-if="bandNameErr">**Must have a band name!</span>
      <div class="requestForm">
        <span>Link to Music:</span>
        <input type="text"
               placeholder="Ex: jamesjams.bandcamp.com"
               class="btmInput"
               v-model="currentBand.link"
               v-on:keyup.enter="submitRequest()">
      </div>
      <div class="requestForm">
        <span>Genre:</span>
        <input type="text"
               placeholder="Ex: Jamescore"
               class="btmInput"
               v-model="currentBand.genre"
               v-on:keyup.enter="submitRequest()">
      </div>
      <div class="requestForm">
        <span>Note:</span>
        <input type="text"
               placeholder="Ex: We need 20 vocal mics lol"
               class="btmInput"
               v-model="currentBand.note"
               v-on:keyup.enter="submitRequest()">
      </div>
      <br>
      
      <div class="requestForm">
        <span><b>*</b>Name of Person to Contact:</span>
        <input type="text"
               placeholder="Ex: Jim Contactsman"
               class="btmInput"
               v-model="currentBand.contactName"
               v-on:keyup.enter="submitRequest()">
      </div>
      <span style="color: red;margin-left: 20px;"
            v-if="contactNameErr">**Must have a contact name!</span>
      
      <div class="requestForm">
        <span><b>*</b>Contact 1 (Email, phone num, etc):</span>
        <input type="text"
               placeholder="Ex: 330-555-6969"
               class="btmInput"
               v-model="currentBand.contact1"
               v-on:keyup.enter="submitRequest()">
      </div>
      <span style="color: red;margin-left: 20px;"
            v-if="contactErr">**Must have a contact listed! How else will we reach you??</span>
      
      <div class="requestForm">
        <span>Contact 2:</span>
        <input type="text"
               placeholder="Ex: james@james.james"
               class="btmInput"
               v-model="currentBand.contact2"
               v-on:keyup.enter="submitRequest()">
      </div>
      <br>
      <span>Are you a touring band who wants to spend the night at BTM?</span>
      <div >
        <span>If so, tell us how many people want to sleep over:</span>
        <input type="number"
               min="0"
               max="5"
               v-model="currentBand.beds"
               v-on:keyup.enter="submitRequest()">
      </div>
      
      <button class="btmButton"
                  @click="submitRequest()">Submit!</button>
    </div>

    <h2>
      Bless This Mess
    </h2>
    
    <h3 v-if="admin">
      You're now logged in as an Admin! Hey!
      <br>
      You can now see what bands requested what shows, add show dates, etc. 
    </h3>
  
    Upcoming Shows:
    <div id="showTable">
      <div v-if="shows.length < 1">Could not load any shows :( </div>
      <div class="row" v-for="show in shows" v-if="shows != undefined">
        Date: {{show.date}} -
        <span v-if="admin">
          - - - Admin Feature: 
          <b style="cursor:pointer;text-decoration: underline;"
             @click="cancelShow(show)">Cancel Show</b>
        </span>
        <br>
        Bands:
        <div id="noBands" v-if="show.bands == undefined"
             class="warning">
          No Bands booked yet!!
        </div>
        <div class="rowBand" v-for="band in show.bands">
          <span>
            > {{band.name}} 
            <div v-if="band.link != undefined && band.link != ''"
                  class="rowDetail">
              -- <a v-bind:href="band.link">Link</a>
            </div>
            <div v-if="band.genre != undefined && band.genre != ''"
                  class="rowDetail">
              -- Genre: <span style="font-weight: bold">{{ band.genre }}</span>
            </div>
            <div v-if="band.note != undefined && band.note != '' && admin"
                  class="rowDetail">
              -- Band Note: <span style="font-weight: bold">{{ band.note }}</span>
            </div>
            <div v-if="band.beds > 0 && admin"
                  class="rowDetail">
              -- Beds requested: <span style="font-weight: bold">{{ band.beds }}</span>
            </div>
          </span>
          <button class="btmButton"
                  v-if="admin"
                  @click="removeBandFromShow(band, show)">Remove band from show</button>
        </div>
        
        <b v-if="admin">Admin feature - The following bands want to play this show:</b>
        
        <div id="noBandReqs" v-if="show.bandRequests == undefined && admin"
             class="warning">
          No additional bands requested this date yet!
        </div>
        <div class="rowBand requests" 
             v-for="band in show.bandRequests"
             v-if="admin">
          <span>
            > {{band.name}} 
            <div v-if="band.link != undefined && band.link != ''"
                 class="rowDetail">
              -- <a v-bind:href="band.link"
                    >Link</a>
            </div>
            <div v-if="band.genre != undefined && band.genre != ''"
                  class="rowDetail">
              -- Genre: <span style="font-weight: bold">{{ band.genre }}</span>
            </div>
            <div v-if="band.note != undefined && band.note != '' && admin"
                  class="rowDetail">
              -- Band Note: <span style="font-weight: bold">{{ band.note }}</span>
            </div>
            
            <div v-if="band.beds > 0 && admin"
                  class="rowDetail">
              -- Beds requested: <span style="font-weight: bold">{{ band.beds }}</span>
            </div>
          </span>
          <span>
            <button class="btmButton"
                    @click="addBandToShow(band, show)">Add Band to Show</button>
            <button class="btmButton"
                    @click="rejectBand(band, show)">Reject Band</button>
          </span>
        </div>
        <button v-if="admin" class="btmButton"
                @click="requestToPlay(show)">Add another band possibility</button>
        
        <br>
        <button class="btmButton" v-if="!admin"
                @click="requestToPlay(show)">Request to play this show!</button>
      </div>
    </div>
    <br>
    <button class="btmButton"
            v-if="!admin">Want to play at BTM on another date? Click here! (not implemented yet)</button>
    <button class="btmButton"
            v-if="admin"
            @click="paused = 'newShowPanel'">
      Add show 
    </button>
  
    
    <div id="adminLogin" @click="adminLogin()"
         v-if="!admin">Are you an Admin? Click Here!</div>
    <div id="adminLogin" @click="adminLogout()"
         v-if="admin">Log out</div>
    
    
  </div>
</template>


<script>
  import firebase from 'firebase';
  var config = {
    apiKey: "AIzaSyCF0iBFX-BDnbMaHBqHIYa92slJciYwJVw",
    authDomain: "btm-management.firebaseapp.com",
    databaseURL: "https://btm-management.firebaseio.com",
    projectId: "btm-management",
    storageBucket: "btm-management.appspot.com",
    messagingSenderId: "124508566051"
  };
  firebase.initializeApp(config);

  export default {
    name: 'app',
    data () {
      return {
        shows: [],
        admin: false,
        paused: 'none',
        passGuess: '',
        
        bandNameErr: false,
        contactNameErr: false,
        contactErr: false,
        
        showDateErr: false,
        
        currentBand: {
          name: '',
          link: '',
          genre: '',
          note: '',
          contactName: '',
          contact1: '',
          contact2: '',
          
          beds: 0
          
        },
        
        currentShow: {
          date: '',
          index: ''
        }
      }  
    },
    mounted: function() {
      
      var database = firebase.database();
      var ref = database.ref();
      var vm = this;
      
      ref.on("value", function(snapshot) {
        console.log(snapshot.val());
        var DB = snapshot.val();
        vm.shows = DB.shows;
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    },
    
    methods: {
      adminLogin: function() {
        this.paused = "adminPanel";
      },
      adminLogout: function() {
        this.admin = false;
      },
      
      guessPassword: function() {
        if (this.passGuess == 'btm69420') {
          this.admin = true;
          this.paused = 'none';
        }
        this.passGuess = '';
      },
      
      requestToPlay: function(show) {
        this.currentShow = show;
        this.paused="requestPanel";
      },
      
      submitRequest: function(show) {
        if (this.currentBand.name == '') {
          this.bandNameErr = true;
        }
        if (this.currentBand.contactName == '') {
          this.contactNameErr = true;
        }
        if (this.currentBand.contact1 == '') {
          this.contactErr = true;
        }
        if (this.bandNameErr || this.contactNameErr || this.contactErr) {
          return;
        }
        
        this.bandNameErr = false;
        this.contactNameErr = false;
        this.contactErr = false;
        this.paused="none";
        
        var currentShowIndex = this.currentShow.index;
        
        var database = firebase.database();
        var refStr = 'shows/' + currentShowIndex + '/bandRequests';
        var writeRef = database.ref(refStr);
        
        var vm = this;
        
//        Found this wild thing here:
//        https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html
        var pushKey = writeRef.push();
        var keyVal = pushKey.key;
        
        var keyPath = writeRef.toString();
        pushKey.set({
          "name": vm.currentBand.name,
          "link": vm.currentBand.link,
          "genre": vm.currentBand.genre,
          "note": vm.currentBand.note,
          "contactName": vm.currentBand.contactName,
          "contact1": vm.currentBand.contact1,
          "contact2": vm.currentBand.contact2,
          "key": keyVal
        })
      },
      
      addBandToShow: function(band, show) {
        // Getting database
        var database = firebase.database();
        
        // Removing band from band Requests
        var bandReqRef = database.ref('shows/' + show.index + '/bandRequests/' + band.key);
        bandReqRef.remove();
        
        // Putting band info into /bands
        var bandRef = database.ref('shows/' + show.index + '/bands/' + band.key);
        bandRef.set({
          name: band.name,
          genre: band.genre,
          key: band.key,
          note: band.note,
          link: band.link,
          
          contactName: band.contactName,
          contact1: band.contact1,
          contact2: band.contact2
        });
        
      },
      
      removeBandFromShow: function(band, show) {
        // Getting database
        var database = firebase.database();
        
        // Removing band from band Requests
        var bandReqRef = database.ref('shows/' + show.index + '/bands/' + band.key);
        bandReqRef.remove();
        
        // Putting band info into /bands
        var bandRef = database.ref('shows/' + show.index + '/bandRequests/' + band.key);
        bandRef.set({
          name: band.name,
          genre: band.genre,
          key: band.key,
          note: band.note,
          link: band.link,
          
          contactName: band.contactName,
          contact1: band.contact1,
          contact2: band.contact2
        });
      },
      
      rejectBand: function(band, show) {
        if (confirm("Are you sure you want to reject this band?")) {
          
          var database = firebase.database();
        
          var bandReqRef = database.ref('shows/' + show.index + '/bandRequests/' + band.key);
          bandReqRef.remove();
        }
      },
      
      addShow: function() {
        if (this.currentShow.date == '') {
          this.showDateErr = true;
        }
        
        this.showDateErr = false;
        this.paused = "none";
        
        var currentShowIndex = this.currentShow.index;
  
        var database = firebase.database();
        var writeRef = database.ref('shows');
        
        var vm = this;
        
//        Found this wild thing here:
//        https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html
        var pushKey = writeRef.push();
        var keyVal = pushKey.key;
        
        var keyPath = writeRef.toString();
        pushKey.set({
          "date": vm.currentShow.date,
          "index": keyVal
        })
      },
      
      cancelShow(show) {
        if (confirm("Are you sure you want to cancel this show? This will delete all related data permanently.")) {
          
          var database = firebase.database();
        
          var showRef = database.ref('shows/' + show.index);
          showRef.remove();
        }
      }
    }
    
  }
  
  
</script>


<style scoped >
  
  @font-face {
    font-family: "Cast Iron";
    src: url("../../static/fonts/Cast Iron.ttf");
  }
  
  #darken {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: 99;
    background: rgba(0,0,0,.5);
    cursor: pointer;
  }
  
  #btm {
    
    /*
    #F38181  Red
    #FCE38A  yellow
    #EAFFD0  white green
    #95E1D3  mint green
    */
    
    
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    
    text-align: left;
    padding: 60px;
    padding-left: 15%;
    padding-right: 25%;
    padding-bottom: 300px;
    background: #EAFFD0;
  }
  
  h2 {
    position: absolute;
    width: 100%;
    height: 100px;
    font-size: 4vw;
    letter-spacing: 5px;
/*    overflow: wrap;*/
/*    width: 50%;*/
    color: #F38181;
    
    z-index: 0;
    position: relative;
/*    text-shadow: 1px 1px 10px rgba(0,0,0,.5);*/
  }
  
  #showTable {
    border: solid #FCE38A 3px;
    width: 70%;
    background: #B5FFF3;
  }
  
  .row {
    padding: 10px;
    border: solid #F38181 2px;
    margin: 20px;
    background: white;
  }
  
  .rowBand {
    margin-left: 20px;
    display: flex;
    justify-content: space-between;
  }
  
  .btmButton {
    border: gray 2px solid;
    background: #95E1D3;
    outline: none;
    padding: 10px;
    cursor: pointer;
  }
  .btmButton:hover {
    background: #A5F1E3;
  }
  .btmButton:active {
    background: #85D1C3;
  }
  
  .requestForm {
    display: flex;
    justify-content: space-between;
    width: 500px;
  }
  .btmInput {
    width: 200px;
  }

  
  
  #adminLogin {
    position: fixed;
    bottom: 10px;
    right: 10px;
    text-decoration: underline;
    cursor: pointer;
  }
  
  #adminLoginPanel {
    top: 30px;
    padding: 30px;
    position: fixed;
    left: 15%;
    z-index: 100;
    min-width: 40%;
    min-height: 200px;
    background: #95E1D3;
    border: solid 5px #EAFFD0;
  }
  #requestPanel {
  }
  
  .panel {
    padding: 30px;
    position: absolute;
    left: 15%;
    z-index: 100;
    width: 40%;
    min-height: 200px;
    background: white;
    border: solid 5px #EAFFD0;
  }
  
  b {
    color: #F38181;
  }

  .warning {
    color: #F38181;
    font-style: italic;
    margin-left: 30px;
  }
  
  .rowDetail {
    margin-left: 30px;
  }

</style>