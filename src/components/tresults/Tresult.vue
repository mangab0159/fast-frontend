<template>
  <div class="tresult-container">
    <div class="tresult">
      <div class="wrapper">
        <div>
          <div></div>
          <div class="name">Exercise Time</div>
          <line-chart class="chart"></line-chart>
        </div>
      </div>
    </div>
    <div class="tresult">
      <div class="wrapper">
        <div>
          <div></div>
          <div class="name">Response Time</div>
        </div>
      </div>
    </div>
    <div class="tresult">
      <div class="wrapper">
        <div>
          <div></div>
          <div class="name">Maximum Operation Range</div>
          <DxChart
            class="chart"
            id="chart"
            :data-source="jointRange"
            palette="soft"
            :rotated="true"
          >
            <DxCommonSeriesSettings argument-field="date" type="rangebar" />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="ANS West Coast"
            />
            <!-- <DxValueAxis title="$ per barrel" /> -->

            <!-- <DxExport :enabled="true" /> -->
            <!-- <DxArgumentAxis> -->
            <!-- <DxLabel format="month" /> -->
            <!-- </DxArgumentAxis> -->
            <DxLegend
              position="inside"
              vertical-alignment="top"
              horizontal-alignment="center"
              items-alignment="left"
            />
            <DxLegend :visible="true" />
          </DxChart>
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
import LineChart from '@/charts/LineChart.vue';
import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  // DxArgumentAxis,
  // DxValueAxis,
  // DxLabel,
  // DxExport,
  DxLegend,
} from 'devextreme-vue/chart';

import { jointRange } from '@/data/data.js';
export default {
  components: {
    LineChart,
    DxChart,
    // DxArgumentAxis,
    DxSeries,
    DxLegend,
    DxCommonSeriesSettings,
    // DxValueAxis,
    // DxLabel,
    // DxExport,
  },
  data() {
    return {
      jointRange,
    };
  },
  methods: {},
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
  max-width: 800px;
  /* flex-basis: auto; */
  flex: 1 1 auto;
  margin: 0 2vw 8vw;
  /* padding-bottom: 100%; */
  /* border-radius: 10px; */
  /* overflow: hidden; */
}

.tresult:nth-child(1) {
  max-width: 500px;
}
.tresult:nth-child(2) {
  max-width: 500px;
}
.tresult:nth-child(3) {
  min-width: 600px;
}
/* .tresult:nth-child(3) {
  max-width: 700px;
} */
.wrapper {
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
  min-height: 17px;
  height: 4%;
  /* background-color: rgb(60, 181, 100); */
  background-color: rgb(10, 7, 172);
}

.name {
  font-size: 1.3em;
  font-weight: 600;
  word-spacing: -0.1rem;
  /* color: rgb(188, 188, 190); */
  color: rgba(0, 0, 0, 1);
  padding-left: 10%;
  padding-top: 5%;
}

.chart {
  padding: 1.5rem 1rem 1rem;
  height: 80%;
}
</style>
