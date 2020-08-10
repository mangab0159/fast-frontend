<template>
  <div>
    <AppHeader></AppHeader>
    <div>
      <ContentsHeader></ContentsHeader>
      <ContentsBody></ContentsBody>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import ContentsHeader from '@/components/ContentsHeader.vue';
import ContentsBody from '@/components/ContentsBody.vue';

export default {
  components: {
    AppHeader,
    ContentsHeader,
    ContentsBody,
  },
};
</script>
<style></style>
