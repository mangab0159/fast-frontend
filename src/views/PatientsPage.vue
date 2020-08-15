<template>
  <div>
    <SearchBar></SearchBar>
    <div>
      <template v-if="isLoading">
        Loading...
      </template>
      <table v-else>
        <th>이름</th>
        <th>나이</th>
        <th>환자 번호</th>
        <PatientsList
          v-for="patientInfo in patientsInfo"
          :key="patientInfo._id"
          :patientInfo="patientInfo"
        ></PatientsList>
      </table>
      <!-- <button @click.prevent="clickBtn">추가</button> -->
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar.vue';
import PatientsList from '@/components/patients/PatientsList.vue';
import { fetchPatients, fetchPatientsName } from '@/api';

export default {
  components: {
    SearchBar,
    PatientsList,
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
      this.isLoading = true;
      const ptname = this.$route.params.ptname;
      if (ptname === undefined) {
        try {
          const { data } = await fetchPatients();
          this.isLoading = false;
          this.patientsInfo = data.patientsInfo;
        } catch (error) {
          console.log(error);
          // console.log(error.response.data);
          // this.logMessage = error.response.data;
        }
      } else {
        try {
          const { data } = await fetchPatientsName(ptname);
          this.isLoading = false;
          this.patientsInfo = data.patientsInfo;
          console.log('this.patientsInfo: ', this.patientsInfo);
          console.log('data.patientsInfo: ', data.patientsInfo);
        } catch (error) {
          console.log(error);
        }
      }
      console.log('fetchData finished');
    },
    // async clickBtn() {
    //   try {
    //     await createPatient({
    //       ptid: 4,
    //       ptname: '박성원',
    //       ptphone: '01088886558',
    //     });
    //     this.$router.push('/patients');
    //   } catch (error) {
    //     console.log(error);
    // console.log(error.response.data.message);
    // this.logMessage = error.response.data.message;
    // }
    // },
  },
  created() {
    console.log('PatientsPage.vue created');
    this.fetchData();
  },
};
</script>
<style></style>
