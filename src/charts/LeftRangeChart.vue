<template>
  <DxChart id="chart" :data-source="leftRange" palette="Violet" :rotated="true">
    <DxCommonSeriesSettings argument-field="data" type="rangebar" />
    <DxSeries
      range-value1-field="aVal1"
      range-value2-field="aVal2"
      name="first joint"
    />
    <DxSeries
      range-value1-field="bVal1"
      range-value2-field="bVal2"
      name="second joint"
    />
    <DxLegend
      position="inside"
      vertical-alignment="top"
      horizontal-alignment="center"
      items-alignment="left"
    />
    <DxLegend :visible="true" />
  </DxChart>
  <!-- <DxChart
            class="rangechart"
            id="chart"
            :data-source="wristRange"
            palette="Violet"
            title="right Hand"
            :rotated="true"
          >
            <DxCommonSeriesSettings argument-field="date" type="rangebar" />
            <DxSeries
              range-value1-field="aVal1"
              range-value2-field="aVal2"
              name="first joint"
            />
            <DxSeries
              range-value1-field="dVal1"
              range-value2-field="dVal2"
              name="second joint"
            />
            <DxLegend
              position="inside"
              vertical-alignment="top"
              horizontal-alignment="center"
              items-alignment="left"
            />
            <DxLegend :visible="true" />
          </DxChart> -->
</template>

<script>
import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  // DxArgumentAxis,
  // DxValueAxis,
  // DxLabel,
  // DxExport,
  DxLegend,
} from 'devextreme-vue/chart';

export default {
  components: {
    DxChart,
    // DxArgumentAxis,
    DxSeries,
    DxLegend,
    DxCommonSeriesSettings,
    // DxValueAxis,
    // DxLabel,
    // DxExport,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  computed: {
    leftRange() {
      if (this.data === undefined) {
        return [];
      } else {
        let ret = [
          {
            data: 'Thumb',
            aVal1: this.data.lthumbfirstmin,
            aVal2: this.data.lthumbfirstmax,
            bVal1: this.data.lthumbsecondmin,
            bVal2: this.data.lthumbsecondmax,
          },
          {
            data: 'Index Finger',
            aVal1: this.data.lindexfirstmin,
            aVal2: this.data.lindexfirstmax,
            bVal1: this.data.lindexsecondmin,
            bVal2: this.data.lindexsecondmax,
          },
          {
            data: 'Middle Finger',
            aVal1: this.data.lmiddlefirstmin,
            aVal2: this.data.lmiddlefirstmax,
            bVal1: this.data.lmiddlesecondmin,
            bVal2: this.data.lmiddlesecondmax,
          },
          {
            data: 'Ring Finger',
            aVal1: this.data.lringfirstmin,
            aVal2: this.data.lringfirstmax,
            bVal1: this.data.lringsecondmin,
            bVal2: this.data.lringsecondmax,
          },
          {
            data: 'Pinky Finger',
            aVal1: this.data.lpinkyfirstmin,
            aVal2: this.data.lpinkyfirstmax,
            bVal1: this.data.lpinkysecondmin,
            bVal2: this.data.lpinkysecondmax,
          },
        ];

        return ret;
      }
    },
  },
};
</script>

<style></style>
