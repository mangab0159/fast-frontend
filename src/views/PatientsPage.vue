<template>
  <div>
    <SearchBar></SearchBar>
    <div class="app-body">
      <template v-if="isLoading">
        Loading...
      </template>
      <table v-else>
        <tr class="table-head">
          <th class="column1">이름</th>
          <th>나이</th>
          <th>환자번호</th>
          <th>전화번호</th>
          <th>등록일</th>
        </tr>
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
<style scoped>
table {
  margin: 100px auto 0px;
  background-color: #fff;
  width: 800px;
  border-spacing: 2px;
  border-radius: 10px;
  -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
}

th {
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: 'Lato-Bold';
  font-size: 17px;
  color: rgb(225, 106, 0);
  line-height: 1.4;
}

.table-head {
  -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
}
</style>
