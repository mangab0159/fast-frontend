<template>
  <tr>
    <td>{{ patientInfo.pname }}</td>
    <td>{{ patientInfo.page }}</td>
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
