<template>
  <tr>
    <td>{{ patientInfo.ptname }}</td>
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
