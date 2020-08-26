<template>
  <div class="card">
    <div
      class="image"
      :style="{
        backgroundImage:
          'url(' +
          require('../../assets/' + pcontentInfo.content.ctname + '.png') +
          ')',
      }"
    ></div>
    <div class="score">{{ pcontentInfo.score }} 점</div>
    <div class="ctname">{{ pcontentInfo.content.ctname }}</div>
    <div class="cdate">{{ this.datePlayed }}</div>
    <div class="footer">
      <router-link :to="tresultLink">
        자세히 보기
      </router-link>
    </div>
  </div>
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
      datePlayed: '',
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
    var cdate = this.pcontentInfo.cdate;
    this.datePlayed = `${cdate.substring(0, 4)}-${cdate.substring(
      4,
      6,
    )}-${cdate.substring(6, 8)}`;
  },
};
</script>

<style>
.card {
  margin: 3px;
  padding: 10px 1px 0px;
  border: 2px solid #ebebeb;
  display: grid;
  grid-template:
    'image image image' 190px
    'ctname score cdate' 40px
    'footer footer footer' 20px
    / 3fr minmax(70px, 3fr) minmax(95px, 2fr);
}
.card .image {
  grid-area: image;
  background-size: cover;
  background-repeat: no-repeat;
}
.card .score {
  grid-area: score;
  padding: 5px;
  align-self: end;
  justify-self: center;
  font-size: 18px;
}
.card .cdate {
  grid-area: cdate;
  font-size: 14px;
  padding: 5px 10px 5px 5px;
  color: rgb(211, 211, 211);
  align-self: end;
  justify-self: end;
}
.card .ctname {
  padding: 5px;
  grid-area: ctname;
  align-self: end;
  justify-self: center;
  font-size: 16px;
}
.card .footer {
  grid-area: footer;
  font-size: 16px;
  align-self: center;
  justify-self: end;
  padding-bottom: 1px;
  padding-right: 10px;
}
</style>
