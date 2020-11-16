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
            <th class="column1">Name</th>
            <th>Age</th>
            <th>Patient ID</th>
            <th>Phone Number</th>
            <th>Registration Date</th>
          </tr>
          <PatientsList
            v-for="patientInfo in patientsInfo"
            :key="patientInfo._id"
            :patientInfo="patientInfo"
          ></PatientsList>
        </table>

        <div class="bg"></div>
      </template>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar.vue';
import PatientsList from '@/components/patients/PatientsList.vue';
import { fetchPatients, fetchPatientsByName } from '@/api';

export default {
  components: {
    SearchBar,
    PatientsList,
  },
  data() {
    return {
      patientsInfo: [], // Array of objects including ptid, ptname, ptage, etc fetched from back-end server
      isLoading: false, // Flag showing whether fetching data from back-end server is done or not
    };
  },
  methods: {
    // Function to fetch information of patients from back-end server
    async fetchPatientsInfo() {
      this.isLoading = true; // First, make isLoading flag true and after fetching data, make the flag false
      const ptname = this.$route.params.ptname; // The constant that stores the name searched in SearchBar component
      if (ptname === undefined) {
        // Ptname of undefined means that users didn't serach a name
        try {
          const { data } = await fetchPatients();
          this.patientsInfo = data.patientsInfo;
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const { data } = await fetchPatientsByName(ptname);
          this.patientsInfo = data.patientsInfo;
        } catch (error) {
          console.log(error);
        }
      }
      this.isLoading = false;
    },
  },
  created() {
    // fetching information of patients from MySQL
    this.fetchPatientsInfo();
  },
};
</script>
<style scoped>
table {
  border-collapse: collapse;
  background-color: #fff;
  width: 70%;
  border-spacing: 2px;
  border-radius: 10px;
  box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 105px;
  left: 50%;
  margin-left: -37%;
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
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
}

.bg {
  width: 100vw;
  height: 120vh;
  position: absolute;
  z-index: -10;
  background-image: url('../assets/section1.png');
  background-position: right bottom;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.85;
}
</style>
