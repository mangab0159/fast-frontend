<template>
  <div class="tresult-container">
    <div class="tresult">
      <div class="wrapper">
        <div>
          <div></div>
          <div class="name">Maximum Operation Range - Left</div>
          <div class="desc">
            - The motion range while performing the task(degree)
          </div>
          <div class="chart-title">
            Left Hand
          </div>
          <!-- <div
            class="tooltipGraph"
            @mouseout="removeTooltip"
            :class="{ transition: this.fingerHovered !== '' }"
          >
            <LeftRangeGraph></LeftRangeGraph>
          </div> -->
          <!-- <div class="tooltipGraph"></div> -->
          <left-range-graph
            :fingerHovered="fingerHovered"
            :fingerHoveredVals="fingerHoveredVals"
            @hoverOut="removeTooltip"
          ></left-range-graph>
          <left-range-chart
            @click="showTooltip"
            :rangeData="mrangeVals"
          ></left-range-chart>
        </div>
      </div>
    </div>
    <div class="tresult">
      <div class="wrapper">
        <div>
          <div></div>
          <div class="name">Maximum Operation Range - Right</div>
          <div class="desc">
            - The motion range while performing the task(degree)
          </div>
          <div class="chart-title">
            Right Hand
          </div>
          <right-range-chart :data="mrangeVals"></right-range-chart>
        </div>
      </div>
    </div>
    <div class="tresult">
      <div class="wrapper">
        <div>
          <div></div>
          <div class="name">Exercise Time - {{ etime[etime.length - 1] }}s</div>
          <div class="desc">- Time taken to perform the task(s)</div>
          <!-- <div class="val">
            {{ taskResults[taskResults.length - 1].etime }}
          </div> -->
          <exercise-chart class="chart" :data="etime"></exercise-chart>
        </div>
      </div>
    </div>
    <div class="tresult">
      <div class="wrapper">
        <div>
          <div></div>
          <div class="name">
            Response Time - {{ rtime[rtime.length - 1] }}ms
          </div>
          <div class="desc">- Time taken to respond to the task(ms)</div>
          <!-- <div class="val">
            {{ taskResults[taskResults.length - 1].rtime }}
          </div> -->
          <response-chart class="chart" :data="rtime"></response-chart>
        </div>
      </div>
    </div>
    <div class="tresult">
      <div class="wrapper">
        <div>
          <div></div>
          <div class="name">Motion Trajectory</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ExerciseChart from '@/charts/ExerciseChart.vue';
import ResponseChart from '@/charts/ResponseChart.vue';
import LeftRangeChart from '@/charts/LeftRangeChart.vue';
import RightRangeChart from '@/charts/RightRangeChart.vue';
import LeftRangeGraph from '@/charts/LeftRangeGraph.vue';

export default {
  components: {
    ExerciseChart,
    ResponseChart,
    LeftRangeChart,
    RightRangeChart,
    LeftRangeGraph,
  },
  props: {
    ertimeVals: {
      type: Array,
      required: true,
    },
    mrangeVals: {
      type: Object,
      required: false,
    },
    handGraphVals: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      fingerHovered: '',
      fingerHoveredVals: [],
    };
  },
  computed: {
    etime() {
      let ret = [];
      for (var i = 0; i < this.ertimeVals.length; i++) {
        ret[i] = this.ertimeVals[i].etime;
      }
      return ret;
    },
    rtime() {
      let ret = [];
      for (var i = 0; i < this.ertimeVals.length; i++) {
        ret[i] = this.ertimeVals[i].rtime;
      }
      return ret;
    },
    // leftHandGraphVals() {},
  },
  methods: {
    showTooltip(fingerHovered) {
      // let
      let ret = [];
      for (let i = this.handGraphVals.length - 1; i >= 0; i--) {
        ret[i] = {
          min: this.handGraphVals[i][fingerHovered + 'min'],
          max: this.handGraphVals[i][fingerHovered + 'max'],
        };
      }
      this.fingerHoveredVals = ret;
      this.fingerHovered = fingerHovered;
    },
    removeTooltip() {
      this.fingerHoveredVals = [];
      this.fingerHovered = '';
    },
  },
  created() {},
};
</script>
<style scoped>
.tresult-container {
  padding-top: 30px;
  padding-left: 7vw;
  padding-right: 7vw;
  padding-bottom: 4vw;
  margin-top: -5px;
  background-color: #fcfcfc;
  /* height: 100%; */

  display: flex;
  /* grid-auto-flow: row dense;
  grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
  gap: 4vw; */
  flex-flow: row wrap;
  justify-content: space-around;
}

.tresult {
  position: relative;
  background-color: white;
  width: 400px;
  /* flex-basis: auto; */
  flex: 1 1 auto;
  margin: 0 2vw 8vw;
  /* padding-bottom: 100%; */
  /* border-radius: 10px; */
  /* overflow: hidden; */
}

.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.tresult:nth-child(-n + 3) .wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.wrapper > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wrapper > div > div:first-child {
  width: 100%;
  height: 4%;
  min-height: 17px;
  max-height: 22px;
  /* background-color: rgb(60, 181, 100); */
  background-color: rgb(10, 7, 172);
}
.name {
  font-size: 1.4rem;
  font-weight: 600;
  word-spacing: -0.1rem;
  /* color: rgb(188, 188, 190); */
  /* color: rgba(0, 0, 0, 1); */
  padding-left: 9%;
  padding-top: 5%;
}

.desc {
  font-size: 0.9rem;
  /* font-weight: 600; */
  /* word-spacing: -0.1rem; */
  /* color: rgb(188, 188, 190); */
  /* color: rgba(0, 0, 0, 1); */
  padding-top: 2%;
  padding-left: 12%;
}
.chart-title {
  white-space: pre;
  font-size: 1.5rem;
  font-family: 'Segoe UI Light', 'Helvetica Neue Light', 'Segoe UI',
    'Helvetica Neue', 'Trebuchet MS', Verdana, sans-serif;
  font-weight: 200;
  fill: #232323;
  cursor: default;
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  padding-left: 38%;
}

#chart {
  padding: 1rem 1rem 0.5rem;
  height: 60%;
}

.val {
  font-size: 1rem;
  font-weight: 600;
  color: darkblue;
  padding-top: 2%;
  padding-left: 48%;
}
.chart {
  padding: 2rem 1rem 1rem;
  height: 80%;
}

/* .tooltipGraph > div {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem 1rem 0.5rem;
  z-index: 100;
} */
</style>
