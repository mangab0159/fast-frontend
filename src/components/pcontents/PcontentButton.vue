<template>
  <a href="javascript:;" @click="filterContent">
    <div class="cards-header-item">
      {{ this.pcontentName.contentName }}
    </div>
  </a>
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
