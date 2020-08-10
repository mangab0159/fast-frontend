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
      </template>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import PostPatients from '@/components/posts/PostPatients.vue';
import { fetchPatients } from '@/api/index';

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
        this.isLoading = false;
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
  },
  created() {
    console.log('1111111111111');
    this.fetchData();
  },
};
</script>
<style></style>
