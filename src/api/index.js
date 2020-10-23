import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});

function fetchPatients() {
  return instance.get('patients');
}

function fetchPatientsByName(ptname) {
  return instance.get(`patients/${ptname}`);
}

function fetchPcontents(ptid) {
  return instance.get(`pcontents/${ptid}`);
}

function createPatient(patientInfo) {
  return instance.post('patients', patientInfo);
}

function fetchTresults(pcontentInfo) {
  return instance.post('tresults', pcontentInfo);
}

function fetchTaskTime(taskInfo) {
  return instance.post('tresults/tkid', taskInfo);
}

export {
  fetchPatients,
  createPatient,
  fetchPatientsByName,
  fetchPcontents,
  fetchTresults,
  fetchTaskTime,
};
