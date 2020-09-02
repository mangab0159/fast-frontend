<template>
  <div>
    <SearchBar></SearchBar>
    <div class="app-body">
      <template v-if="isLoading">
        Loading...
      </template>
      <template v-else>
        <table>
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

        <div class="bg">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </template>
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
<style>
table {
  border-collapse: collapse;
  background-color: #fff;
  width: 70%;
  min-width: 500px;
  border-spacing: 2px;
  border-radius: 10px;
  -webkit-box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 100px;
  left: 50%;
  margin-left: -35%;
}

th {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 10px;
  font-family: 'Lato-Bold';
  font-size: 17px;
  color: rgb(225, 106, 0);
  line-height: 1.4;
}

.table-head {
  -webkit-box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  border-bottom: 1px solid #f2f2f2;
}

td {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 10px;
  color: #808080;
  width: 16.6%;
}

td > a {
  color: #808080;
}

.column1 {
  padding-left: 20px;
}

.bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -10;
}

.bg > div {
  /* width: auto;
  height: 17vh; */
  height: 28vh;
  background-image: url('../assets/section1.png');
  background-position: right bottom;
  background-attachment: fixed;
  opacity: 0.7;
}

.bg > div:nth-child(1) {
  margin-top: 50px;
}

.bg > div:nth-child(odd) {
  height: 28vh;
  background-image: url('../assets/section1.png');
  background-position: right bottom;
  background-attachment: fixed;
  opacity: 0.7;
}
</style>
