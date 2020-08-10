import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function fetchPatients(patientname) {
  if (patientname === '') {
    return instance.get('patients');
  } else {
    return instance.get('patients');
  }
}

function createPatient(patientInfo) {
  return instance.post('patients', patientInfo);
}

export { fetchPatients, createPatient };
