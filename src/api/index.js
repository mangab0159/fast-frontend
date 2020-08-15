import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function fetchPatients() {
  return instance.get('patients');
}

function fetchPatientsName(ptname) {
  return instance.get(`patients/${ptname}`);
}

function fetchPcontents(ptid) {
  return instance.get(`pcontents/${ptid}`);
}

function createPatient(patientInfo) {
  return instance.post('patients', patientInfo);
}

export { fetchPatients, createPatient, fetchPatientsName, fetchPcontents };
