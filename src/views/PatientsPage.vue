<template>
  <div>
    <AppHeader></AppHeader>
    <div>
      <template v-if="isLoading">
        Loading...
      </template>
      <template v-else>
        <table>
          <th>이름</th>
          <th>나이</th>
          <th>환자 번호</th>
          <PostPatients
            v-for="patientInfo in patientsInfo"
            :key="patientInfo._id"
            :patientInfo="patientInfo"
          ></PostPatients>
        </table>
        <button @click.prevent="clickBtn">추가</button>
      </template>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import PostPatients from '@/components/posts/PostPatients.vue';
import { fetchPatients, createPatient } from '@/api/index';

export default {
  components: {
    AppHeader,
    PostPatients,
  },
  data() {
    return {
      patientsInfo: [],
      isLoading: false,
      logMessage: '',
    };
  },
  methods: {
    async fetchData() {
      try {
        this.isLoading = true;
        const patientname = this.$store.patientname;
        const { data } = await fetchPatients(patientname);
        this.isLoading = false;
        this.patientsInfo = data.patientsInfo;
        this.$store.commit('setPatientname', '');
        console.log('aaa');
      } catch (error) {
        console.log(error);
        // console.log(error.response.data);
        // this.logMessage = error.response.data;
      }
    },
    async clickBtn() {
      try {
        await createPatient({
          ptid: 4,
          ptname: '박성원',
          ptphone: '01088886558',
        });
        this.$router.push('/patients');
      } catch (error) {
        console.log(error);
        // console.log(error.response.data.message);
        // this.logMessage = error.response.data.message;
      }
    },
  },
  created() {
    console.log('1111111111111');
    this.fetchData();
  },
};
</script>
<style></style>
