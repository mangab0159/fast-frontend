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
    <!-- <template v-if="isUserLogin">
      <span>{{ $store.state.username }}</span>
      <a href="javascript:;" @click="logoutUser">Logout</a>
    </template> -->
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
    // logoutUser() {
    //   this.$store.commit('clearUsername');
    //   this.$router.push('/');
    // },
    // gotoLoginpage() {
    //   this.$router.push('/');
    // },
  },
  // computed: {
  //   isUserLogin() {
  //     let flg = !this.$store.getters.isLogin;
  //     console.log('flg', flg);
  //     if (flg) {
  //       this.gotoLoginpage();
  //     }
  //     return false;
  //   },
  // },
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
  width: 60px;
  height: 40px;
  margin-left: 2.5vw;
  background: url('../../assets/FAST.png');
  background-size: contain;
}

form {
  display: flex;
  height: 40px;
  margin-left: 2.5vw;
}

button.search {
  background: white;
  border: white;
}
.bi-search {
  color: black;
}
</style>
