<template>
  <tr>
    <td>
      <router-link to="/contents">{{ patientInfo.ptname }}</router-link>
    </td>
    <td>{{ patientInfo.ptphone }}</td>
    <td>{{ patientInfo.pid }}</td>
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
};
</script>

<style></style>
