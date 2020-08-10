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

export { fetchPatients };
