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
    <div id="requestPanel" v-if="paused == 'requestPanel'">
      Request to play {{ currentShow.date }}
      
      <br>
      <br>
      <div class="requestForm">
        <span>Band Name:</span>
        <input type="text"
               placeholder="Ex: James and the Jameses"
               class="btmInput"
               v-model="currentBand.name">
      </div>
      <span style="color: red;margin-left: 20px;"
            v-if="bandNameErr">**Must have a band name!</span>
      <div class="requestForm">
        <span>Link to Music (optional):</span>
        <input type="text"
               placeholder="Ex: jamesjams.bandcamp.com"
               class="btmInput"
               v-model="currentBand.link">
      </div>
      <div class="requestForm">
        <span>Genre (optional):</span>
        <input type="text"
               placeholder="Ex: Jamescore"
               class="btmInput"
               v-model="currentBand.genre">
      </div>
      <div class="requestForm">
        <span>Note (optional):</span>
        <input type="text"
               placeholder="Ex: We need 20 vocal mics lol"
               class="btmInput"
               v-model="currentBand.note">
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
      <div class="row" v-for="show in shows">
        Date: {{show.date}}
        <br>
        Bands:
        <div class="rowBand" v-for="band in show.bands">
          <span>
            > {{band.name}} 
            <span v-if="band.link != undefined">
              -- <a v-bind:href="band.link">Link</a>
            </span>
          </span>
          <button class="btmButton"
                  v-if="admin">Remove band from show (not impl.)</button>
        </div>
        
        <b v-if="admin">Admin feature - The following bands want to play this show:</b>
        <div class="rowBand requests" 
             v-for="band in show.bandRequests"
             v-if="admin">
          <span>
            > {{band.name}} 
            <span v-if="band.link != undefined">
              -- <a v-bind:href="band.link">Link</a>
            </span>
          </span>
          <span>
            <button class="btmButton">Add Band to Show (not impl.)</button>
            <button class="btmButton">Reject Band (not impl.)</button>
          </span>
        </div>
        <button v-if="admin" class="btmButton">Add another band (not implemented yet)</button>
        
        <br>
        <button class="btmButton" v-if="!admin"
                @click="requestToPlay(show)">Request to play this show!</button>
      </div>
    </div>
    <br>
    <button class="btmButton"
            v-if="!admin">Want to play at BTM on another date? Click here! (not implemented yet)</button>
    <button class="btmButton"
            v-if="admin">Add show (not implemented yet)</button>
  
    
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
        currentShow: {},
        bandNameErr: false,
        
        currentBand: {
          name: '',
          link: '',
          genre: '',
          note: ''
          
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
      
      submitRequest: function() {
        if (this.currentBand.name == '') {
          this.bandNameErr = true;
          return;
        }
        this.bandNameErr = false;
        this.paused="none";
        
        var currentShowIndex = this.currentShow.index;
        var nextBandIndex = this.currentShow.bandRequests.length;
        
        var database = firebase.database();
        var refStr = 'shows/' + currentShowIndex + '/bandRequests';
        var writeRef = database.ref(refStr);
        
        var vm = this;
        
//        Found this wild thing here:
//        https://firebase.googleblog.com/2014/04/best-practices-arrays-in-firebase.html
        var pushKey = writeRef.push();
        
        pushKey.set({
          "name": vm.currentBand.name,
          "link": vm.currentBand.link
        })
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
    height: 100%;
    
    text-align: left;
    padding: 60px;
    padding-left: 15%;
    padding-right: 25%;
    background: #EAFFD0;
  }
  
  h2 {
    position: absolute;
    width: 100%;
    height: 100px;
    font-family: "Cast Iron";
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
    background: white;
  }
  
  .row {
    padding: 10px;
    border: solid #F38181 2px;
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
    width: 400px;
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
    padding: 30px;
    position: absolute;
    left: 15%;
    z-index: 100;
    width: 40%;
    min-height: 200px;
    background: #95E1D3;
    border: solid 5px #EAFFD0;
  }
  #requestPanel {
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


</style>