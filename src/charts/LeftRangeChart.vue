<template>
  <div class="chart-wrapper">
    <DxChart
      id="chart"
      :data-source="leftRange"
      palette="Violet"
      :rotated="true"
      @point-hover-changed="onPointHoverChanged($event)"
    >
      <DxCommonSeriesSettings argument-field="finger" type="rangebar">
        <DxPoint hover-mode="onlyPoint"></DxPoint>
      </DxCommonSeriesSettings>
      <DxSeries
        hover-mode="onlyPoint"
        range-value1-field="firstJointMin"
        range-value2-field="firstJointMax"
        name="first joint"
      />
      <DxSeries
        range-value1-field="secondJointMin"
        range-value2-field="secondJointMax"
        name="second joint"
      />
      <DxLegend
        hover-mode="onlyPoint"
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
  DxPoint,
  DxLegend,
} from 'devextreme-vue/chart';

export default {
  components: {
    DxChart,
    DxSeries,
    DxLegend,
    DxCommonSeriesSettings,
    DxPoint,
  },
  props: {
    rangeData: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      tooltipX: 0,
      tooltipY: 0,
    };
  },
  computed: {
    leftRange() {
      if (this.rangeData === undefined) {
        return [];
      } else {
        let ret = [
          {
            finger: 'Thumb',
            firstJointMin: this.rangeData.lthumbfirstmin,
            firstJointMax: this.rangeData.lthumbfirstmax,
            secondJointMin: this.rangeData.lthumbsecondmin,
            secondJointMax: this.rangeData.lthumbsecondmax,
          },
          {
            finger: 'Index Finger',
            firstJointMin: this.rangeData.lindexfirstmin,
            firstJointMax: this.rangeData.lindexfirstmax,
            secondJointMin: this.rangeData.lindexsecondmin,
            secondJointMax: this.rangeData.lindexsecondmax,
          },
          {
            finger: 'Middle Finger',
            firstJointMin: this.rangeData.lmiddlefirstmin,
            firstJointMax: this.rangeData.lmiddlefirstmax,
            secondJointMin: this.rangeData.lmiddlesecondmin,
            secondJointMax: this.rangeData.lmiddlesecondmax,
          },
          {
            finger: 'Ring Finger',
            firstJointMin: this.rangeData.lringfirstmin,
            firstJointMax: this.rangeData.lringfirstmax,
            secondJointMin: this.rangeData.lringsecondmin,
            secondJointMax: this.rangeData.lringsecondmax,
          },
          {
            finger: 'Pinky Finger',
            firstJointMin: this.rangeData.lpinkyfirstmin,
            firstJointMax: this.rangeData.lpinkyfirstmax,
            secondJointMin: this.rangeData.lpinkysecondmin,
            secondJointMax: this.rangeData.lpinkysecondmax,
          },
        ];

        return ret;
      }
    },
  },
  methods: {
    onPointHoverChanged(e) {
      const point = e.target;
      if (point.isHovered()) {
        console.log('hover', e.target);
        let finger = point.argument;
        let fingerParsed =
          finger !== 'Thumb' ? finger.substring(0, finger.length - 7) : 'thumb';
        fingerParsed = fingerParsed.toLowerCase();
        let joint = point.series.name;
        let jointParsed = joint.substring(0, joint.length - 6);
        let fingerJoint = 'l' + fingerParsed + jointParsed;
        console.log('fingerJoint', fingerJoint);
        this.$emit('hover', fingerJoint);
      }
    },
  },
};
</script>

<style scoped>
.chart-wrapper {
  position: relative;
  padding: 1rem 1rem 0.5rem;
  height: 60%;
}

#chart {
  height: 100%;
}
</style>
