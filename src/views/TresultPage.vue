<template>
  <div>
    <SearchBar></SearchBar>
    <div class="tab-container">
      <div class="tabs">
        <div
          @click="beActive(num, $event)"
          v-for="num in taskResults.length"
          :key="num"
          :class="{ active: num == 1 }"
        >
          <a href="javascript:;"> Task {{ taskResults[num - 1].tkid - 100 }}</a>
        </div>
      </div>
    </div>
    <TaskResult
      :handGraphVals="handGraphVals"
      :ertimeVals="ExerRespTimeVals"
      :mrangeVals="mrangeVals"
    ></TaskResult>
  </div>
</template>

<script>
import SearchBar from '@/components/common/SearchBar.vue';
import TaskResult from '@/components/tresults/Tresult.vue';
import { fetchTresults, fetchTaskTime, fetchHandData } from '@/api';

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
      taskResults: [],
      tkSelected: 1,
      tkidData: {},
      isTimeDataReady: false,
      isHandDataReady: false,
    };
  },
  computed: {
    ExerRespTimeVals() {
      if (this.isTimeDataReady) {
        let ExerRespTimeVals = [];

        let tkid = this.taskResults[this.tkSelected - 1].tkid;
        let cdatetime = this.taskResults[this.tkSelected - 1].cdatetime;

        // this.tkidData[tkid] should be orderd by cdatetime descending
        // Take out 12 or less time values
        // where corresponding cdatetime is before the cdatetime of the selected task
        let cnt = 0;
        for (
          let idx = this.tkidData.get(tkid).length - 1;
          idx >= 0 && cnt <= 12;
          idx--
        ) {
          if (this.tkidData.get(tkid)[idx].cdatetime <= cdatetime) {
            ExerRespTimeVals[cnt] = this.tkidData.get(tkid)[idx];
            cnt++;
          }
        }
        return ExerRespTimeVals;
      } else return [];
    },
    mrangeVals() {
      if (this.taskResults === []) {
        return {};
      } else return this.taskResults[this.tkSelected - 1];
    },
    handGraphVals() {
      if (this.isHandDataReady === false) {
        return [];
      } else {
        let ret = [];
        let tkid = this.taskResults[this.tkSelected - 1].tkid;
        let cdatetime = this.taskResults[this.tkSelected - 1].cdatetime;
        let cnt = 0;
        let handDataArr = this.handDataMap.get(tkid);
        for (let i = 0; i < handDataArr.length && cnt < 12; i++) {
          if (handDataArr[i].cdatetime <= cdatetime) {
            ret[cnt++] = handDataArr[i];
          }
        }
        return ret;
      }
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
    },
  },
  async created() {
    // taskResults array includes tkids, cdatetimes, rangeValues
    const tresultsData = await fetchTresults(this.$route.params);
    this.taskResults = tresultsData.data.tkcds;
    this.tknum = this.taskResults.length;

    // Pair tkid with the latest cdatetime
    var tkidCdateMap = new Map();
    for (let idx = 0; idx < this.taskResults.length; idx++) {
      let tkid = this.taskResults[idx].tkid;
      let cdatetime = this.taskResults[idx].cdatetime;
      tkidCdateMap.set(tkid, cdatetime);
    }

    // Make tkid-cdatetime array for fetchTaskTime request
    let tkidCdateArr = [];
    for (let [key, value] of tkidCdateMap.entries()) {
      tkidCdateArr.push({ tkid: key, cdatetime: value });
    }

    // Make object to be parameter for fetchTaskTime request
    const taskInfo = {
      ptid: this.$route.params.ptid,
      ctid: this.$route.params.ctid,
      tkidCdateArr,
    };

    // fetch 30 rows of same tkid, ptid, ctid before the cdatetime
    // order by cdatetime descending

    const taskTimeData = await fetchTaskTime(taskInfo);

    // Pair tkid with corresponding task results(in this case exercise time and response time)
    this.tkidData = new Map();
    let taskTimeArr = [];
    let tkidBefore = taskTimeData.data.taskTimes[0].tkid;
    for (let i = 0; i < taskTimeData.data.taskTimes.length; i++) {
      if (tkidBefore != taskTimeData.data.taskTimes[i].tkid) {
        this.tkidData.set(tkidBefore, taskTimeArr);
        taskTimeArr = [];
        tkidBefore = taskTimeData.data.taskTimes[i].tkid;
      }
      taskTimeArr.push(taskTimeData.data.taskTimes[i]);
    }

    this.tkidData.set(tkidBefore, taskTimeArr);

    this.isTimeDataReady = true;

    const handData = await fetchHandData(taskInfo);
    this.handDataMap = new Map();

    let handDataArr = [];
    tkidBefore = 0;
    for (let i = 0; i < handData.data.handData.length; i++) {
      if (handData.data.handData[i].tkid == tkidBefore) {
        handDataArr.push(handData.data.handData[i]);
      } else {
        this.handDataMap.set(tkidBefore, handDataArr);
        tkidBefore = handData.data.handData[i].tkid;
        handDataArr = [];
        handDataArr.push(handData.data.handData[i]);
      }
    }

    this.handDataMap.set(tkidBefore, handDataArr);
    this.isHandDataReady = true;
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
