<template>
  <div class="container">
    <div class="wrapper">
      <div class="error" v-if="hasError">
        <div>
          <span>{{errorMessage}}</span>
        </div>
      </div>
      <div class="content" v-if="!hasError">
          <h1>Relações Encontradas</h1>
        <div class="container-relations">
          <RelationBox
            :total="box.total"
            :title="box.title"
            :content="box.content"
            :key="box.title"
            v-for="box in boxes"/>
        </div>
      </div>
    </div>
    <div class="wrapper wrapper-button">
      <Button :title="buttonTitle" :clickAction="goHome"/>
    </div>
  </div>
</template>

<script scoped>
import Button from './Button.vue';
import RelationBox from './RelationBox.vue';

export default {
  name: 'Relation',
  props: ['data'],
  data() {
    return {
      buttonTitle: 'Tentar Novamente',
      hasError: false,
      errorMessage: '',
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
    },
    extractEmployeeCompany(argumentList) {
      /*
        We do expect to have a one-employee one-company relation,
        this method does not work generically as we are using specific types lookups.
      */
      const employee = argumentList.filter(arugment => arugment.entities[0].type === 'Pessoa')[0];
      const company = argumentList.filter(arugment => arugment.entities[0].type === 'Empresa')[0];
      return [employee.text, company.text];
    },
    createTitle(keyword) {
      return `Funcionário(s) ${keyword}`;
    },
  },
  created() {
    if (!this.data) {
      this.goHome();
      return;
    }

    const { status } = this.data;

    if (status !== 200) {
      this.hasError = true;
      this.errorMessage = (status === 404) ? 'Relações não encontradas!' : 'Algo de errado..';
    }

    if (!this.data.length) {
      this.hasError = true;
      this.errorMessage = 'Relações não encontradas!';
    }
  },
  computed: {
    boxes: function() { // eslint-disable-line
      if (!this.data) { return false; }

      const result = {};
      this.data.forEach((element) => {
        const [employeeName, companyName] = this.extractEmployeeCompany(element.arguments);
        result[companyName] = (result[companyName])
          ? result[companyName].concat(employeeName)
          : [employeeName];
      });

      const content = Object.keys(result)
        .map(key => ({ total: result[key].length, title: this.createTitle(key), content: result[key].join('; ') }))
        .sort((contentA, contentB) => contentB.total - contentA.total);

      return content;
    },
  },
  components: {
    Button,
    RelationBox,
  },
};
</script>

<style scoped>

  @import url("../colors.css");

  .container {
    display: flex;
    height: 100vh;
    align-items: center;
    color: var(--light-green);
  }

  .error span {
    font-size: 1.3em;
    color: var(--light-red);
  }

  h1 {
    font-size: 1.5em;
    font-weight: lighter;
  }

  .container-relations {
    height: 80%;
    overflow-y: auto;
  }

  .container-button {
    width: 100% !important;
  }

  .content {
    width: 80%;
    height: 100%;
  }

  .wrapper {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (orientation: portrait) {
    .container {
      flex-direction: column;
      justify-content: center;
    }

    .content {
      margin-top: 10vh;
    }

    .error span {
      font-size: 2.5em;
    }

    .wrapper {
      width: 90%;
    }

  }

</style>