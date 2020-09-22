<script>
import { Line } from 'vue-chartjs';

export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Data One',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100],
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                callback: value => {
                  return (
                    'U$ ' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
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
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    console.log('options:', this.options);
    this.renderChart(this.datacollection, this.options);
  },
};
</script>
