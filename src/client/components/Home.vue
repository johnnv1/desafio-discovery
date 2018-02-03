<template>
  <div class="container">
    <Logo :description="logoDescription" />
    <UploadButton :title="buttonTitle" :validateAndSend="validateAndSend" v-show="!isUploading && !isThinking"/>
    <Loading :progress="uploadProgress" v-show="isUploading && !isThinking"/>
    <Thinking v-show="!isUploading && isThinking"/>
  </div>
</template>


<script>
import axios from 'axios';
import Logo from './Logo.vue';
import UploadButton from './UploadButton.vue';
import Loading from './Loading.vue';
import Thinking from './Thinking.vue';

export default {
  name: 'Home',
  data() {
    return {
      buttonTitle: 'Selecionar Arquivo',
      logoDescription: 'Desafio Discovery',
      uploadProgress: 0,
      isUploading: false,
      isThinking: false,
      maxSize: 50 * 1048576, // size in bytes
    };
  },
  methods: {
    validateAndSend(event) {
      const { files } = event.target;
      if (!files.length) { return; }

      const { size } = files[0];

      if (size > this.maxSize) {
        alert('A imagem deve ter no máximo 10MB.');
        return;
      }
      this.upload(files[0]);
    },

    upload(file) {
      this.isUploading = true;
      const data = new FormData();
      data.append('file', file);
      const config = { onUploadProgress: this.onUploadProgress };
      axios.post('/api/v1/discovery/upload', data, config)
        .then(this.handleProcessingSucess)
        .catch(this.handleFileUploadFail);
    },

    handleProcessingSucess(response) {
      const { data, status } = response;
      data.status = status;
      this.isThinking = false;
      this.$router.push({ name: 'Relation', params: { data } });
    },

    handleProcessingFail(error) {
      const { status } = error.response;
      const data = { status };
      this.isThinking = false;
      this.$router.push({ name: 'Relation', params: { data } });
    },

    onUploadProgress(progressEvent) {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      this.uploadProgress = percentCompleted;
      if (percentCompleted === 100) {
        this.isUploading = false;
        this.isThinking = true;
      }
    },
  },
  components: {
    Logo,
    UploadButton,
    Loading,
    Thinking,
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    height: 90vh;
    align-items: center;
  }

  @media screen and (orientation: portrait) {
    .container {
      display: block;
      height: 97vh;
      margin-top: 3vh;
    }
  }
</style>
