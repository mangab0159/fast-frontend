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
    <div>
      <router-link :to="tresultLink">
        자세히 보기
      </router-link>
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
  data() {
    return {
      tresultLink: {},
    };
  },
  created() {
    this.tresultLink = {
      name: 'tresult',
      params: {
        ptid: this.pcontentInfo.ptid,
        ctid: this.pcontentInfo.ctid,
        pcid: this.pcontentInfo.pcid,
      },
    };
  },
};
</script>

<style></style>
