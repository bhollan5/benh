<template>
<div>
  hey fuckin world
  <button @click="turnLight(1)">1</button>
  <button @click="turnLight(2)">2</button>
  <button @click="turnLight(3)">3</button>
  
  
  
  </div>

</template>



<script>

  import axios from 'axios';
  export default {
    name: 'Lights',
    data () {
      return {
        
      }
    },
    mounted: function() {
      setInterval(this.click, 1000);
    },
    methods: {
      click() {
        var value = Math.floor(Math.random() * 65280);
        this.turnLight(1, value);
        //value = Math.floor(Math.random() * 65280);
        this.turnLight(2, value);
        //value = Math.floor(Math.random() * 65280);
        this.turnLight(3, value);
      },
      
      
      turnLight(num, value) {
        console.log("Bout to try the thing:")
        axios.put("http://192.168.1.71/api/CJ8yxkvHYlar00Cv1CM653WrEgxswosg3N24Rkyy/lights/" + num + "/state", 
          {
            on: true, 
            sat: 254, 
            bri: 254,
            hue: value,
            effect: "none",
            alert: "none"
          
          }
        )
        .then(response => {
          console.log("Success!");
          console.log(response);
        })
        .catch(e => {
          console.log("fuck! error:");
          console.log(e);
        })
      }
    }
  }

</script>