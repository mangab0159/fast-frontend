<template>
  <div>
    <a href="javascript:;" @click="filterContent">
      {{ this.pcontentName.contentName }}
    </a>
  </div>
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
