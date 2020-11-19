<script>
import { Line } from 'vue-chartjs';
// import { Line, mixins } from 'vue-chartjs';
// const { reactiveProp } = mixins;

export default {
  extends: Line,
  // mixins: [reactiveProp],
  props: ['data'],
  data() {
    return {
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: value => {
                  return (
                    // 'U$ ' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                    value + 'ms'
                  );
                },
              },
              gridLines: {
                displays: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    chartData() {
      return this.data;
    },
  },
  methods: {
    renderLineChart: function() {
      console.log('this.chartData', this.chartData);
      let labels = [];
      for (let i = 1; i <= this.chartData.length; i++) {
        if (i == 1) labels[0] = '1st';
        else if (i == 2) labels[1] = '2nd';
        else if (i == 3) labels[2] = '3rd';
        else {
          labels[i - 1] = i + 'th';
        }
      }
      this.renderChart(
        {
          labels,
          datasets: [
            {
              // label: 'second',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              data: this.chartData,
              borderColor: '#F15F5F',
              backgroundColor: '#F1D1D2',
              fill: false,
            },
          ],
        },
        this.options,
      );
    },
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    // console.log('options:', this.options);
    this.renderLineChart();
  },
  watch: {
    data: function() {
      // this._chart.destory();
      this.renderLineChart();
    },
  },
};
</script>
