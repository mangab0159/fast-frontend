<template>
  <li>
    <div>
      {{ pcontentInfo.score }}
    </div>
    <div>
      {{ pcontentInfo.content.ctname }}
    </div>
    <div>
      {{ pcontentInfo.cdate }}
    </div>
  </li>
</template>

<script>
export default {
  props: {
    pcontentInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
