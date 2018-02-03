<template>
  <div class="container-button" @click="clickAction">
    <div class="wrapper-button">
      <div class="button-content">
        <span class="button-label">{{title}}</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Button',
  props: ['title', 'clickAction'],
};
</script>

<style scoped>
  @import url("../colors.css");

  .container-button {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-content {
    width: 80%;
    height: 20vh;
    border: var(--light-green) solid 1px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .button-label {
    font-size: 1.5em;;
    color: var(--light-green);
  }

  @media screen and (orientation: portrait) {
    .container-button {
      width: 100%;
      height: 50%;
    }

    .wrapper-button {
    display: flex;
    justify-content: center;
    }

    .button-content {
      height: 10vh;
    }

    .button-label {
      font-size: 3em;
    }
  }
</style>
