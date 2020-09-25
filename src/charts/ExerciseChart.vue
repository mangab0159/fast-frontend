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
                    value + 's'
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
      this.renderChart(
        {
          labels: [
            '1st',
            '2nd',
            '3rd',
            '4th',
            '5th',
            '6th',
            '7th',
            '8th',
            '9th',
            '10th',
            '11th',
            '12th',
          ],
          datasets: [
            {
              // label: 'second',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              data: this.chartData,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
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
