<template>
  <DxChart
    id="chart"
    :data-source="rightRange"
    palette="Violet"
    :rotated="true"
  >
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
</template>

<script>
import DxChart, {
  DxCommonSeriesSettings,
  DxSeries,
  DxLegend,
} from 'devextreme-vue/chart';

export default {
  components: {
    DxChart,
    DxSeries,
    DxLegend,
    DxCommonSeriesSettings,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  computed: {
    rightRange() {
      if (this.data === undefined) {
        return {};
      } else {
        let ret = [
          {
            data: 'Thumb',
            aVal1: this.data.rthumbfirstmin,
            aVal2: this.data.rthumbfirstmax,
            bVal1: this.data.rthumbsecondmin,
            bVal2: this.data.rthumbsecondmax,
          },
          {
            data: 'Index Finger',
            aVal1: this.data.rindexfirstmin,
            aVal2: this.data.rindexfirstmax,
            bVal1: this.data.rindexsecondmin,
            bVal2: this.data.rindexsecondmax,
          },
          {
            data: 'Middle Finger',
            aVal1: this.data.rmiddlefirstmin,
            aVal2: this.data.rmiddlefirstmax,
            bVal1: this.data.rmiddlesecondmin,
            bVal2: this.data.rmiddlesecondmax,
          },
          {
            data: 'Ring Finger',
            aVal1: this.data.rringfirstmin,
            aVal2: this.data.rringfirstmax,
            bVal1: this.data.rringsecondmin,
            bVal2: this.data.rringsecondmax,
          },
          {
            data: 'Pinky Finger',
            aVal1: this.data.rpinkyfirstmin,
            aVal2: this.data.rpinkyfirstmax,
            bVal1: this.data.rpinkysecondmin,
            bVal2: this.data.rpinkysecondmax,
          },
        ];

        return ret;
      }
    },
  },
};
</script>

<style></style>
