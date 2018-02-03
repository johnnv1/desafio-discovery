<template>
  <div class="container-thinking">
    <div class="wrapper-thinking">
      <div>
        <svg class="animated-gear" viewBox="0 0 144 139" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-116.000000, -363.000000)" stroke="#4EC5E8">
                    <path d="M220.213396,481.436746 C214.828206,484.5801 208.888059,486.938765 202.566474,488.346697 L202.566474,501 L175.098266,501 L175.098266,488.346697 C168.7628,486.935674 162.81045,484.569738 157.415879,481.416028 L148.618464,490.213444 L129.195508,470.790488 L137.502763,462.483233 C134.21315,457.40476 131.723636,451.801899 130.20268,445.835848 L117.004033,445.835848 L117.004033,418.36764 L130.20268,418.36764 C131.726893,412.388814 134.223816,406.774734 137.523907,401.687638 L129.195508,393.359239 L148.618464,373.936283 L157.449816,382.767635 C162.83541,379.623835 168.776083,377.264856 175.098266,375.856791 L175.098266,364 L202.566474,364 L202.566474,375.856791 C208.874775,377.261764 214.80324,379.61348 220.17944,382.746937 L228.990094,373.936283 L248.41305,393.359239 L240.118717,401.653572 C243.429769,406.749667 245.934443,412.375465 247.46206,418.36764 L258.995967,418.36764 L258.995967,445.835848 L247.46206,445.835848 C245.9377,451.81525 243.440444,457.429835 240.139881,462.517318 L248.41305,470.790488 L228.990094,490.213444 L220.213396,481.436746 Z" id="Oval-2"></path>
                    <circle id="Oval-3" cx="187.5" cy="432.5" r="14.5"></circle>
                </g>
            </g>
        </svg>
      </div>
      <div>
        <span class="description">{{description}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Thinking',
    data() {
      return {
        description: 'Thinking...',
      };
    },
  };
</script>

<style scoped>
  @import url("../colors.css");

  .container-thinking {
    width: 50%;
  }

  .description {
    color: var(--light-green);
    font-size: 1em;
  }

  .wrapper-thinking {
    text-align: center;
    width: 100%;
  }

  @-moz-keyframes spin {
      from { -moz-transform: rotate(0deg); }
      to { -moz-transform: rotate(360deg); }
  }
  @-webkit-keyframes spin {
      from { -webkit-transform: rotate(0deg); }
      to { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
      from {transform:rotate(0deg);}
      to {transform:rotate(360deg);}
  }

  .animated-gear {
    width: 50%;
    height: 100%;
    margin-bottom: 3vh;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 4000ms;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    -moz-animation-name: spin;
    -moz-animation-duration: 4000ms;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;
    -ms-animation-name: spin;
    -ms-animation-duration: 4000ms;
    -ms-animation-iteration-count: infinite;
    -ms-animation-timing-function: linear;
    animation-name: spin;
    animation-duration: 4000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @media screen and (orientation: portrait) {
    .description {
      font-size: 2em;
    }

    .animated-gear {
      margin-bottom: 1vh;
    }

    .container-thinking {
      margin-top: 10vh;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }

    .wrapper-thinking {
      width: 70%;
    }
  }

</style>
