<template>
    <main>
  <h1>Drawing Blanks Admin Panel</h1>
    <h3>Login as:</h3>
    <div class="flexrow">
        <div class="user" id="Ben">
            Ben:<br><input type="password" id="benPass" placeholder="Password">
            <br><button id="benSubmit">Submit</button>
        </div>
        <div class="user" id="Melia">
            Melia:<br><input type="password" id="meliaPass" placeholder="Password">
            <br><button id="meliaSubmit">Submit</button>
        </div>
        <div class="user" id="Brad">
            Brad:<br><input type="password" id="bradPass" placeholder="Password">
            <br><button id="bradSubmit">Submit</button>
        </div>
    
    
    </div>
        </main>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .flexrow {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 20px;
        justify-content: center;
        justify-content: space-around;
        margin-left: 30px;
        margin-right: 30px;
    }
    .user {
       margin-top: 30px;
    }
    input {
        height: 20px;
        width: 200px;
        font-size: 20px;
        border: none;
        border-bottom: solid 2px lightgray;
        margin-top: 10px;
    }
    input:focus {
        outline: none;
        border-bottom: solid 2px lightblue;
    }
    button {
        margin-top: 10px;
        padding: 20px 40px 20px 40px;
        background: white;
        box-shadow: 0px 1px 4px black;
        border: none;
        color: #444444;
        transition: .5s;
    }
    button:hover {
        margin-top: 7px;
        margin-bottom: 3px;
        box-shadow: 0px 4px 7px black;
        cursor: pointer;
    }
</style>
