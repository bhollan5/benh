<template>
<div id="botMenu">
<span style="text-decoration:underline;cursor:pointer;"
          @click="$parent.pauseMenu = 'main'">Back to Main Menu</span>
    <span>Bot Control Panel</span>
  <div id="botProfile">
    <img v-bind:src="bot.image" class="botPic" width="100"><br>
    Name: <input type="text" v-model="bot.botname" id="botNameInput">
    </div>
  <div id="botCode">
    <div class="botCodeLine" v-for="(line, index) in bot.code">
      <span v-bind:style="{color: $parent.randomColor(index)}"
            style="font-weight:bold">{{(index + 1)}}.</span>
      <!--<input type= v-model="line.text" 
             :ref="'codeLine' + line.id" >-->
      <select>
        <option v-for="option in namespaces"
                :value="option.name">{{option.name}} </option>
      </select>
    </div>
    <button @click="$parent.newLine()"
            id="addLine">
      Add a New Line
    </button>
  </div>
  
  <div id="equipBotText" @click="equipItem()">Equip This Bot</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      namespaces: [
        {
          name: "",
          type: "null",
        },
        {
          name: "moveRight()",
          type: "function",
          params: 0,
        },
        {
          name: "moveLeft()",
          type: "function",
          params: 0,
        },
        {
          name: "moveUp()",
          type: "function",
          params: 0,
        },
        {
          name: "moveDown()",
          type: "function",
          params: 0,
        },
      ]
    }
  },
  props: {
    bot: {
      type: Object
    }
  }
}
</script>

<style scoped lang="scss">
  // TODO: Put these files in a different CSS file and import them!
  $red: #ffac9e;
  $orange: #ffc184;
  $yellow: #ffe993;
  $green: #7affb4;
  $blue: #76C6FF;
  $purple: #e5a8ff;
  
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
  
  #addLine {
    border: none;
    background: $green;
    color: black;
    margin-left: 10px;
    margin-top: 5px;
    padding: 5px 10px 5px 10px;
    outline: none;
  }
  #addLine:hover {
    filter: brightness(.9);
    cursor: pointer;
    
  }
</style>