<template>
  <div>
    <DxChart
      class="rangechart"
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
  </div>
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
      required: true,
    },
  },
  computed: {
    rightRange() {
      let ret = [
        {
          data: 'Thumb',
          aVal1: this.data.rThumbFirstMin,
          aVal2: this.data.rThumbFirstMax,
          bVal1: this.data.rThumbSecondMin,
          bVal2: this.data.rThumbSecondMax,
        },
        {
          data: 'Index Finger',
          aVal1: this.data.rIndexFirstMin,
          aVal2: this.data.rIndexFirstMax,
          bVal1: this.data.rIndexSecondMin,
          bVal2: this.data.rIndexSecondMax,
        },
        {
          data: 'Middle Finger',
          aVal1: this.data.rMiddleFirstMin,
          aVal2: this.data.rMiddleFirstMax,
          bVal1: this.data.rMiddleSecondMin,
          bVal2: this.data.rMiddleSecondMax,
        },
        {
          data: 'Ring Finger',
          aVal1: this.data.rRingFirstMin,
          aVal2: this.data.rRingFirstMax,
          bVal1: this.data.rRingSecondMin,
          bVal2: this.data.rRingSecondMax,
        },
        {
          data: 'Pinky Finger',
          aVal1: this.data.rPinkyFirstMin,
          aVal2: this.data.rPinkyFirstMax,
          bVal1: this.data.rPinkySecondMin,
          bVal2: this.data.rPinkySecondMax,
        },
      ];

      return ret;
    },
  },
};
</script>

<style></style>
