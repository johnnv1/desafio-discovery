<template>
  <div class="container-button">
    <div class="wrapper-button">
      <input type="file" id="image-input" @change="validateAndSend($event)" accept=".json,.doc,.dot,.docx,.pdf,.html,.xhtml">
        <label class="wrapper-button-label" for="image-input">
          <div class="button-content">
            <span class="button-label">{{title}}</span>
          </div>
      </label>
    </div>
  </div>
</template>


<script>
export default {
  name: 'UploadButton',
  props: ['title', 'validateAndSend'],
}
</script>

<style scoped>
  @import url("../colors.css");

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

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

  .wrapper-button-label {
    display: flex;
    width: 100%;
    justify-content: center;
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
