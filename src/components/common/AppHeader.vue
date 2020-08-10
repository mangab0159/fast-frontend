<template>
  <header>
    <form @submit.prevent="submitForm">
      <input
        type="text"
        v-model="patientname"
        placeholder="(환자 이름 검색)"
        autofocus
      />
      <button type="submit" v-show="true">버튼</button>
    </form>
    <router-link to="/">
      <img
        src="@/assets/homebutton.png"
        alt="homebutton"
        width="20"
        height="20"
      />
    </router-link>
  </header>
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
      this.$store.commit('setPatientname', this.patientname);
    },
  },
  created() {
    console.log('aaaaaaaaaaaaaaa');
  },
};
</script>

<style></style>
