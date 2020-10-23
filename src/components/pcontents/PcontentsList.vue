<template>
  <div class="card">
    <router-link :to="tresultLink">
      <div class="image-container">
        <div
          class="image"
          :style="{
            backgroundImage:
              'url(' +
              require('../../assets/' + pcontentInfo.content.ctname + '.png') +
              ')',
          }"
        ></div>
        <div class="ctname">{{ pcontentInfo.content.ctname }}</div>
      </div>
    </router-link>
    <div class="card-info">
      <div class="score">{{ pcontentInfo.score }} 점</div>
      <div class="cdate">{{ this.datePlayed }}</div>
      <!-- <div class="footer">
        <router-link :to="tresultLink">
          자세히 보기
        </router-link>
      </div> -->
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

<style scoped>
.card {
  border: 1px solid #ffffff;
  position: relative;
}

.card-info {
  display: flex;
  padding-top: 5px;
  justify-content: space-between;
}

.card .image {
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 75%;
  transition: 0.45s ease;
}

.card .score {
  font-family: 'Avenir', 'Lato', '애플 SD 산돌고딕 Neo', 'Apple SD Gothic Neo',
    '나눔바른고딕', 'NanumBarunGothic', '나눔고딕', 'NanumGothic', '맑은 고딕',
    'Malgun Gothic', '돋움', 'dotum', 'AppleGothic', 'sans-serif';
  font-size: 15px;
  font-weight: 500;
  padding-left: 10px;
}
.card .cdate {
  font-family: 'Avenir', 'Lato', '애플 SD 산돌고딕 Neo', 'Apple SD Gothic Neo',
    '나눔바른고딕', 'NanumBarunGothic', '나눔고딕', 'NanumGothic', '맑은 고딕',
    'Malgun Gothic', '돋움', 'dotum', 'AppleGothic', 'sans-serif';
  font-size: 14px;
  padding-right: 10px;
}
.card .ctname {
  font-size: 16px;
  color: #000000;
  background-color: rgba(0, 0, 0, 0.55);
  border-radius: 10px;
  color: #ffffff;
  padding: 0px 12px 3px;
  transition: 0.45s ease;
  position: absolute;
  opacity: 0;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.image-container:hover .ctname {
  opacity: 1;
}

.image-container:hover .image {
  opacity: 0.8;
}
/*
.card .footer {
  grid-area: footer;
  font-size: 16px;
  align-self: center;
  justify-self: end;
  padding-bottom: 1px;
  padding-right: 10px;
} */
</style>
