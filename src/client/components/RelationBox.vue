<template>
  <div class="relation-content">
    <div class="relation-total">
      <div>
        <span>{{total}}</span>
      </div>
    </div>
    <div class="relation-description">
      <h4>{{title}}</h4>
      <p> {{content}} </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RelationBox',
    props: ['total', 'title', 'content'],
  };
</script>


<style scoped>

  h1 {
    font-size: 1.5em;
  }

  .relation-content {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--light-green);
  }

  .relation-total {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .relation-total span {
    font-size: 2.5em;
  }

  .relation-description {
    width: 70%;
  }

  .relation-description p {
    font-size: .7em;
  }

  @media screen and (orientation: portrait) {
    h1 {
      font-size: 3em;
    }

    h4 {
      font-size: 1.5em;
    }

    .relation-total span {
      font-size: 3.5em;
    }

    .relation-description p {
      font-size: 1.3em;
    }
  }

</style>
