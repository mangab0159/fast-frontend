<template>
  <b-dropdown-item href="javascript:;" @click="filterContent">
    <div>{{ this.pcontentName.contentName }}</div>
  </b-dropdown-item>
</template>
<script>
export default {
  props: {
    pcontentName: {
      type: Object,
      required: true,
    },
  },
  methods: {
    filterContent() {
      this.$emit('filterContent', this.pcontentName.ctid);
    },
  },
};
</script>

<style></style>
