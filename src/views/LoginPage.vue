<template>
  <div>
    <div class="bgImg">
      <div>
        <h1>FAST</h1>
        <p class="desc">
          Patients can rehabiltate their upper limbs using embeded devices with
          VR contents by this service.
        </p>
        <!-- <router-link
            to="/patients"
            class="btn btn-primary btn-lg"
            role="button"
            >환자 탐색
          </router-link>
          <router-link
            to="/worklists"
            class="btn btn-primary btn-lg"
            role="button"
            >Worklist 보기</router-link
          > -->
        <div class="loginForm">
          <form name="form" @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="username"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
              />
            </div>
            <div class="form-group">
              <button
                :disabled="!isUsernameValid || !password"
                type="submit"
                class="btn btn-primary btn-block"
              >
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { sendHandData, sendHandDataGet } from '@/api';
import { loginUser } from '@/api/index';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async handleLogin() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      try {
        const { data } = await loginUser(userData);
        console.log('user', data.user);
        console.log('userid', data.userid);
        this.$store.commit('setToken', data.token);
        this.$store.commit('setUsername', data.username);
        this.$store.commit('setUserid', data.userid);
        this.$router.push('/patients');
      } catch (error) {
        console.log('error', error);
      }
    },
  },
  computed: {
    isUsernameValid() {
      let re = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
      return re.test(String(this.username).toLowerCase());
    },
  },
  
};

</script>

<style scoped>
.bgImg {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.bgImg::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('../assets/mainImage.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: right;
  opacity: 0.8;
}
h1 {
  font-size: 6rem;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  padding-top: 2rem;
  padding-bottom: 1.4rem;
  font-weight: 50;
}

p {
  font-size: 1.2rem;
  padding-bottom: 2.5rem;
}

.btn-lg {
  margin: 0px 1rem 3rem;
}
.btn-primary {
  color: #fff;
  background-color: #00a0ff;
  border-color: #00a0ff;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0089d9;
  border-color: #0082cc;
}

.loginForm {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
form {
  width: 70vh;
}
</style>
