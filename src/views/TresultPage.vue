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
          <a href="javascript:;"> Task {{ tkcds[num - 1].tkid - 100 }}</a>
        </div>
      </div>
    </div>
    <TaskResult :ertimeVals="ertimeVals" :mrangeVals="mrangeVals"></TaskResult>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar.vue';
import TaskResult from '@/components/tresults/Tresult.vue';
import { fetchTresults, fetchTaskTime } from '@/api';

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
      tknum: null,
      tkcds: [],
      tkSelected: 1,
      tkidData: {},
      tkidDataLen: -1,
    };
  },
  computed: {
    ertimeVals() {
      if (this.tkidData.size !== this.tkidDataLen) {
        console.log('ertimeVals tkidData size', this.tkidData.size);
        return [];
      } else {
        console.log('ertimeVals computed');
        let tkid = this.tkcds[this.tkSelected - 1].tkid;
        let cdatetime = this.tkcds[this.tkSelected - 1].cdatetime;
        let ret = [];
        let cnt = 0;
        // this.tkidData[tkid] should be orderd by cdatetime descending
        for (
          let idx = this.tkidData.get(tkid).length - 1;
          idx >= 0 && cnt <= 12;
          idx--
        ) {
          if (this.tkidData.get(tkid)[idx].cdatetime <= cdatetime) {
            ret[cnt] = this.tkidData.get(tkid)[idx];
            cnt++;
          }
        }
        return ret;
      }
    },
    mrangeVals() {
      if (this.tkcds === []) {
        return {};
      } else return this.tkcds[this.tkSelected - 1];
    },
  },
  methods: {
    removeClassAll(className) {
      var tabs = document.querySelectorAll('.tabs > div');
      var check = new RegExp('(\\s|^)' + className + '(\\s|$)');
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(check, ' ').trim();
      }
    },
    beActive(num, event) {
      this.removeClassAll('active');
      event.currentTarget.className += ' active';
      this.tkSelected = num;
      console.log('tkSelectd', this.tkSelected);
    },
  },
  async created() {
    // ptid, ctid, pcid same all tkcds array
    // including tkid, cdatetime, rangeValue
    const tresultsData = await fetchTresults(this.$route.params);
    this.tkcds = tresultsData.data.tkcds;
    this.tknum = this.tkcds.length;

    var tkidCdateMap = new Map();
    for (let idx = 0; idx < this.tkcds.length; idx++) {
      let tkid = this.tkcds[idx].tkid;
      let cdatetime = this.tkcds[idx].cdatetime;
      tkidCdateMap.set(tkid, cdatetime);
    }

    // key == tkid && value == cdatetime
    // fetch 30 rows of same tkid, ptid, ctid before cdatetime
    // order by cdatetime descending

    let tkidCdateArr = [];
    for (let [key, value] of tkidCdateMap.entries()) {
      tkidCdateArr.push({ tkid: key, cdatetime: value });
    }

    const taskInfo = {
      ptid: this.$route.params.ptid,
      ctid: this.$route.params.ctid,
      tkidCdateArr,
    };
    console.log('taskInfo', taskInfo);
    const taskTimeData = await fetchTaskTime(taskInfo);

    console.log('taskTimeData', taskTimeData);

    this.tkidData = new Map();

    let taskTimeArr = [];
    let tkidBefore = taskTimeData.data.taskTimes[0].tkid;
    for (let i = 0; i < taskTimeData.data.taskTimes.length; i++) {
      if (tkidBefore == taskTimeData.data.taskTimes[i].tkid) {
        taskTimeArr.push(taskTimeData.data.taskTimes[i]);
      } else {
        this.tkidData.set(tkidBefore, taskTimeArr);
        taskTimeArr = [];
        tkidBefore = taskTimeData.data.taskTimes[i].tkid;
        taskTimeArr.push(taskTimeData.data.taskTimes[i]);
      }
    }

    this.tkidData.set(tkidBefore, taskTimeArr);

    console.log('tkidData', this.tkidData);

    this.tkidDataLen = tkidCdateMap.size;
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
