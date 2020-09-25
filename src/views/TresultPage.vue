<template>
  <div>
    <SearchBar></SearchBar>
    <div class="tab-container">
      <div class="tabs">
        <div
          @click="beActive(num, $event)"
          v-for="num in tkcds.length"
          :key="num"
          :class="{ active: num == 1 }"
        >
          <a href="javascript:;"> Task {{ tkcds[num - 1].tkid }}</a>
        </div>
      </div>
    </div>
    <TaskResult :ertimeVals="ertimeVals" :mrangeVals="mrangeVals"></TaskResult>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar.vue';
import TaskResult from '@/components/tresults/Tresult.vue';
import taskResults from '@/data/data3.js';
import { tkcds } from '@/data/tkcds.js';

export default {
  components: {
    SearchBar,
    TaskResult,
  },
  data() {
    return {
      ptid: this.$route.params.ptid,
      ctid: this.$route.params.ctid,
      pcid: this.$route.params.pcid,
      tknum: this.$route.params.tknum,
      tkcds: [],
      tkSelected: 1,
      tkidData: {},
      taskResults: [],
    };
  },
  computed: {
    ertimeVals() {
      let tkid = this.tkcds[this.tkSelected - 1].tkid;
      let cdatetime = this.tkcds[this.tkSelected - 1].cdatetime;
      console.log('cdatetime', cdatetime);
      let ret = [];
      let cnt = 0;
      // this.tkidData[tkid] should be orderd by cdatetime descending
      for (
        let idx = 0;
        idx < this.tkidData.get(tkid).length && cnt <= 12;
        idx++
      ) {
        console.log(idx);
        console.log('tkidData.get(tkid)[idx]', this.tkidData.get(tkid)[idx]);

        if (this.tkidData.get(tkid)[idx].cdatetime < cdatetime) {
          ret[cnt] = this.tkidData.get(tkid)[idx];
          cnt++;
        }
      }
      console.log('ertimeVal', ret);
      console.log('cnt', cnt);
      return ret;
    },
    mrangeVals() {
      return this.tkcds[this.tkSelected - 1];
    },
  },
  methods: {
    removeClassAll(className) {
      var tabs = document.querySelectorAll('.tabs > div');
      // console.log(tabs);
      // console.log(className);
      var check = new RegExp('(\\s|^)' + className + '(\\s|$)');
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(check, ' ').trim();
      }
    },
    beActive(num, event) {
      this.removeClassAll('active');
      // console.log('clicked', num);
      // console.log('event', event);
      event.currentTarget.className += ' active';
      this.tkSelected = num;
      console.log('tkSelectd', this.tkSelected);
    },
  },
  created() {
    console.log('params', this.$route.params);
    // ptid, ctid, pcid same all tkcds array
    // including tkid, cdatetime, rangeValue
    this.tkcds = tkcds;
    // this.tkcds[tkSelected - 1] ==> props for rangeChart
    // don't worry about that
    // only worry about etime, rtime
    var tkidCdatePair = new Map();
    for (let idx = 0; idx < this.tkcds.length; idx++) {
      let tkid = this.tkcds[idx].tkid;
      let cdatetime = this.tkcds[idx].cdatetime;
      tkidCdatePair.set(tkid, cdatetime);
    }

    this.tkidData = new Map();
    // for (let [key, value] of this.tkidCdatePair.entries()) {
    for (let key of tkidCdatePair.keys()) {
      // key == tkid && value == cdatetime
      // fetch 30 rows of same tkid, ptid, ctid before cdatetime
      // order by cdatetime
      const data = taskResults[key - 1];
      this.tkidData.set(key, data);
    }

    // console.log('tastResults', taskResults);
    // console.log('tknum', this.tknum);
    // console.log('taskResultSliced', this.taskResultSliced);
    console.log('tkidData', this.tkidData);
    console.log('tkidCdatePair', tkidCdatePair);
    console.log('abc');
  },
};
</script>

<style scoped>
.tab-container {
  margin: 0;
  padding-top: 6rem;
}

div.tabs {
  margin: 0;
  padding-left: 8vw;
  list-style-type: none;
  line-height: 35px;
  max-height: 35px;
  width: 97vw;
  /* background-color: #fafafa; */
  /* border-bottom-color: #f6f6f6; */
  overflow: hidden;
  display: inline-block;
}
div.tabs > div.active {
  z-index: 2;
  background: #fcfcfc;
}

div.tabs > div {
  float: left;
  margin: 5px -10px 0;
  border-top-right-radius: 25px 170px;
  border-top-left-radius: 20px 90px;
  padding: 0 30px 0 25px;
  height: 170px;
  background: #e6e6e6;
  position: relative;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  max-width: 200px;
}

div.tabs > div > a {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #222;
}

/* Clear Fix took for HTML 5 Boilerlate*/

.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  zoom: 1;
}
</style>
