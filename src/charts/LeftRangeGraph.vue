<template>
  <div class="tooltipGraph" :class="{ transition: this.fingerHovered !== '' }">
    <div>
      <img
        class="closeIcon"
        @click="removeTooltip"
        src="../assets/closeIcon.png"
      />
    </div>
    <DxChart
      class="historyGraph"
      :data-source="rangeHistory"
      :class="{ transition: this.fingerHovered !== '' }"
    >
      <DxCommonSeriesSettings
        argument-field="data"
        type="spline"
        :point="pointSetting"
        hover-mode="none"
      />
      <DxSeries valueField="valMin" name="Min" />
      <DxSeries valueField="valMax" name="Max" />
      <DxLegend :visible="true" hover-mode="none" />
    </DxChart>
  </div>
</template>

<script>
import DxChart, {
  DxSeries,
  DxCommonSeriesSettings,
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
    fingerHovered: {
      type: String,
      required: true,
    },
    fingerHoveredVals: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      pointSetting: { size: 6, hoverMode: 'none' },
    };
  },
  computed: {
    rangeHistory() {
      let ret = [];
      for (let i = 0; i < this.fingerHoveredVals.length; i++) {
        let obj = {
          data: i + 1 + 'th',
          valMin: this.fingerHoveredVals[i].min,
          valMax: this.fingerHoveredVals[i].max,
        };

        ret[i] = obj;
      }
      return ret;
    },
  },
  methods: {
    removeTooltip() {
      this.$emit('hoverOut');
    },
  },
};
</script>

<style scoped>
.tooltipGraph {
  position: absolute;
  width: 100%;
  height: 60%;
  visibility: hidden;
  transition: 0s;
  z-index: 100;
  background-color: white;
}

.tooltipGraph.transition {
  visibility: visible;
}

.historyGraph {
  width: 100%;
  height: 100%;
  visibility: hidden;
}
.historyGraph.transition {
  visibility: visible;
}

.closeIcon {
  float: right;
  padding-right: 2.5%;
  /* padding-left: 2%; */
  padding-bottom: 1%;
}

.tooltipGraph:first-child {
  clear: both;
}
</style>
