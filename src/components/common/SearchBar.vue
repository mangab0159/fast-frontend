<template>
  <div class="header-container">
    <router-link class="home-link" :to="logoLink">
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
    <template v-if="isUserLogin">
      <a href="javascript:;" class="logoutButton" @click="logoutUser">
        <b-button variant="outline-info">
          <b-icon icon="power" aria-hidden="true"></b-icon> Logout
        </b-button>
      </a>
    </template>
  </div>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

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
    logoutUser() {
      this.$store.commit('clearUsername');
      this.$store.commit('clearToken');
      deleteCookie('fast_auth');
      deleteCookie('fast_user');
      this.$router.push('/');
    },
    gotoLoginpage() {
      this.$router.push('/');
    },
  },
  computed: {
    isUserLogin() {
      let isUserLogin = this.$store.getters.isLogin;
      console.log('isUserLogin', isUserLogin);
      if (!isUserLogin) {
        this.gotoLoginpage();
        return false;
      }
      return true;
    },
    logoLink() {
      return this.$store.getters.isLogin ? '/patients' : '/';
    },
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

.logo {
  width: 60px;
  height: 40px;
  margin-left: 2.5vw;
  background: url('../../assets/FAST.png');
  background-size: contain;
}

.logoutButton {
  margin-left: 2.5vw;
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
