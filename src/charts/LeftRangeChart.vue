<template>
  <div>
    <DxChart
      class="rangechart"
      id="chart"
      :data-source="leftRange"
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
  </div>
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
      required: true,
    },
  },
  computed: {
    leftRange() {
      let ret = [
        {
          data: 'Thumb',
          aVal1: this.data.lThumbFirstMin,
          aVal2: this.data.lThumbFirstMax,
          bVal1: this.data.lThumbSecondMin,
          bVal2: this.data.lThumbSecondMax,
        },
        {
          data: 'Index Finger',
          aVal1: this.data.lIndexFirstMin,
          aVal2: this.data.lIndexFirstMax,
          bVal1: this.data.lIndexSecondMin,
          bVal2: this.data.lIndexSecondMax,
        },
        {
          data: 'Middle Finger',
          aVal1: this.data.lMiddleFirstMin,
          aVal2: this.data.lMiddleFirstMax,
          bVal1: this.data.lMiddleSecondMin,
          bVal2: this.data.lMiddleSecondMax,
        },
        {
          data: 'Ring Finger',
          aVal1: this.data.lRingFirstMin,
          aVal2: this.data.lRingFirstMax,
          bVal1: this.data.lRingSecondMin,
          bVal2: this.data.lRingSecondMax,
        },
        {
          data: 'Pinky Finger',
          aVal1: this.data.lPinkyFirstMin,
          aVal2: this.data.lPinkyFirstMax,
          bVal1: this.data.lPinkySecondMin,
          bVal2: this.data.lPinkySecondMax,
        },
      ];

      return ret;
    },
  },
};
</script>

<style></style>
