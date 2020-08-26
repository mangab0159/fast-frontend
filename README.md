# Front-End

Front-end server of the FAST project, where patients can rehabiltate their upper limbs using embeded devices with VR contents. 

  - Compatible with PACS system
  - Showing played results of patients
  - Viewr of 3D trajectories and motion range of joints

### Pages

  - Main page (goes to the patient page or the pcontent page)
  - Patient page (shows information of patients registered)
  - Pcontent page (shows records played by a patient)
  - Task page (shows results specifed by tasks with viewers)

Viwers can show:
  - The 3D trajectory of motions of the patient's upper limb recorded during rehabilitaion
  - Charts of motion ranges of each joints of upper limbs
  - Charts of maximum distances of upper limbs


### Tech
   
* [Vue.js](https://vuejs.org) -  a progressive framework for building user interfaces.
* [Babylon.js](https://babylonjs.com) - one of the most powerful, beautiful, and simple Web rendering engines
* [D3.js](https://d3js.org) - a JavaScript library for manipulating documents based on data. 
* [BootstrapVue](https://bootstrap-vue.org) - Quickly integrate Bootstrap v4 components with Vue.js.


### Project setup
Install the dependencies and devDependencies  
```sh
$ cd front-end
$ npm install
```
Compiles and hot-reloads for development
```sh
$ npm run serve
```
Run your unit tests
```sh
$ npm run test:unit
```
Lints and fixes files
```sh
$ npm run lint
```
Compiles and minifies for production
```sh
$ npm run build
```
#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
