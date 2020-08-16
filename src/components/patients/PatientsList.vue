<template>
  <tr>
    <td>
      <router-link :to="pcontentLink">{{ patientInfo.ptname }}</router-link>
    </td>
    <td>{{ patientInfo.ptphone }}</td>
    <td>{{ patientInfo.ptid }}</td>
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
    this.pcontentLink = `/pcontents/${this.patientInfo.ptid}`;
  },
};
</script>

<style></style>
