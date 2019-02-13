<template>
<div class="turing-window-header">
      <div class="turing-window-header-lines">
        <div class="turing-window-header-line"></div>
        <div class="turing-window-header-line"></div>
        <div class="turing-window-header-line"></div>
        <div class="turing-window-header-line"></div>
      </div>
      <div class="turing-window-header-text">
        {{text}}
      </div>
      <div class="turing-window-header-lines">
        <div class="turing-window-header-line"></div>
        <div class="turing-window-header-line"></div>
        <div class="turing-window-header-line"></div>
        <div class="turing-window-header-line"></div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        text: {
            type: String,
        }
    }
}
</script>

<style scoped lang="scss">

.turing-window-header {
  width: calc(100% - 12px);
  margin: 2px 6px;
  height: 20px;
  display: flex;
  .turing-window-header-lines {
    display: flex;
    flex-direction: column;
    flex-grow: .5;
    height:100%; 
    justify-content: space-around;
  }
  .turing-window-header-line {
    border-bottom: solid black 2px;
  }
  .turing-window-header-text {
    font-size: 20px;
    padding: 0px 8px;
  }
}
</style>