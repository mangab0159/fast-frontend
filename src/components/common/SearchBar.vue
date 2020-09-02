<template>
  <div class="header-container">
    <router-link class="home-link" to="/">
      <div class="logo"></div>
    </router-link>
    <form @submit.prevent="submitForm">
      <b-button class="search" type="submit" v-show="true">
        <b-icon icon="search"></b-icon>
      </b-button>
      <b-input
        type="text"
        v-model="patientname"
        placeholder="Search..."
        autofocus
      />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patientname: '',
    };
  },

  methods: {
    submitForm() {
      this.$router.push(`/patients/${this.patientname}`);
    },
  },
  created() {
    console.log('SearchBar created');
  },
};
</script>

<style scoped>
.header-container {
  background: rgba(255, 255, 255, 0.95);
  width: 100%;
  height: 60px;
  padding: 10px 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  border-bottom: 2px solid #ebebeb;
}

.header-container .logo {
  width: 115px;
  height: 30px;
  margin-left: 10px;
  margin-top: 6px;
  background: url('../../assets/FAST.png');
  background-size: contain;
}

form {
  display: flex;
  height: 40px;
  margin-left: 30px;
}

button.search {
  background: white;
  border: white;
}
.bi-search {
  color: black;
}
</style>
