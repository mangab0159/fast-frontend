<template>
  <tr>
    <td class="column1">
      <router-link :to="pcontentLink">{{ patientInfo.ptname }}</router-link>
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
