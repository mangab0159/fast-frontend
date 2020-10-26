<template>
  <div
    class="tooltipGraph"
    :class="{ transition: this.fingerHovered !== '' }"
    @mouseout="removeTooltip"
  >
    <DxChart
      class="historyGraph"
      :data-source="rangeHistory"
      :class="{ transition: this.fingerHovered !== '' }"
    >
      <DxCommonSeriesSettings argument-field="data" type="spline" />
      <DxSeries valueField="valMin" name="Min" />
      <DxSeries valueField="valMax" name="Max" />
      <DxLegend :visible="true" />
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
</style>
