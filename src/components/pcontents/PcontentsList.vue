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

<style>
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
  font-size: 15px;
  padding-left: 6px;
}
.card .cdate {
  font-size: 14px;
  color: rgb(211, 211, 211);
  padding-right: 5px;
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
