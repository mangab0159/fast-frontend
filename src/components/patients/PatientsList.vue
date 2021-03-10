<template>
  <tr>
    <td class="column1">
      <router-link :to="pcontentLink">
        <span @click="setPatientInfo">
          {{ patientInfo.ptname }}
        </span>
      </router-link>
    </td>
    <td class="column2">{{ patientInfo.ptage }}</td>
    <td class="column3">{{ patientInfo.ptid }}</td>
    <td class="column4">{{ patientInfo.ptphone }}</td>
    <td class="column5">{{ patientInfo.cdate }}</td>
  </tr>
</template>
<script>
export default {
  props: {
    patientInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      pcontentLink: '',
    };
  },
  methods: {
    setPatientInfo() {
      this.$store.commit('setPatientName', this.patientInfo.ptname);
      this.$store.commit('setPatientAge', this.patientInfo.ptage);
    },
  },
  created() {
    this.pcontentLink = {
      name: 'pcontent',
      params: {
        ptid: this.patientInfo.ptid,
        ptname: this.patientInfo.ptname,
        ptage: this.patientInfo.ptage,
      },
    };
  },
};
</script>

<style></style>
