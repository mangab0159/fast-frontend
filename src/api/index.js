import axios from 'axios';
import { setInterceptors } from './common/interceptors';

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });

  return setInterceptors(instance);
}

const instance = createInstance();

function loginUser(userData) {
  return instance.post('login', userData);
}

function fetchPatients(userid) {
  return instance.post('patients', userid);
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

function fetchHandData(taskInfo) {
  return instance.post('tresults/handData', taskInfo);
}

function sendHandData(test) {
  return instance.post('hands', test);
}

function sendHandDataGet() {
  return instance.get('hands');
}

export {
  loginUser,
  fetchPatients,
  createPatient,
  fetchPatientsByName,
  fetchPcontents,
  fetchTresults,
  fetchTaskTime,
  fetchHandData,
  sendHandData,
  sendHandDataGet,
};
