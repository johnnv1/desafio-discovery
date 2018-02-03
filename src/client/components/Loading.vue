<template>
  <div class="container-loading">
    <div class="wrapper-loading">
        <div class="loading-circle">
          <div class="loading-progress">
            <span>{{progress}}%</span>
          </div>
          <svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
          <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0" :style="strokeDashOffset"></circle>
          </svg>
        </div>
        <div>
          <span class="description">Enviando Arquivo...</span>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    props: ['progress'],
    computed: {
      strokeDashOffset() {
        const progress = Math.min(Math.max(this.progress,  0), 100);
        const percentage = ((100-progress)/100)*Math.PI*(90*2);
        return `stroke-dashoffset: ${percentage}px;`;
      },
    },
  }
</script>

<style scoped>
  @import url("../colors.css");

  .container-loading {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper-loading {
    text-align: center;
  }

  .loading-circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .loading-progress {
    color: var(--light-green);
    position: absolute;
  }

  .loading-progress span {
    font-size: 2em;
  }

  .description {
    color: var(--light-green);
    font-size: 1em;
  }

  #svg circle {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  stroke: transparent;
  stroke-width: 1px;
  }

  #svg #bar {
    stroke: var(--light-green);
  }

  @media screen and (orientation: portrait) {
    .container-loading {
      width: 100%;
      height: 45%;
    }

    .loading-progress span {
      font-size: 3em;
    }
    .description {
      font-size: 2em;
    }
  }
</style>
