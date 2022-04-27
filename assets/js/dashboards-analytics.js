/**
 * Dashboard Analytics
 */

'use strict';

(function () {
  var user = JSON.parse(localStorage.getItem("damilare"));
  // var good = new Date();
  var dep = user[0].userDetail.chart.deposit
  var deb = user[0].userDetail.chart.debit
  let cardColor, headingColor, axisColor, shadeColor, borderColor;
var dep1=0
var dep2=0
var dep3=0
var dep4=0
var dep5=0
var dep6=0
var dep7=0
var dep8=0
var dep9=0
var dep10=0
var dep11=0
var dep12=0

var deb1=0
var deb2=0
var deb3=0
var deb4=0
var deb5=0
var deb6=0
var deb7=0
var deb8=0
var deb9=0
var deb10=0
var deb11=0
var deb12=0
  if(dep[0] && dep[0].length>0){
      for(var d=0;d<dep[0].length;d++){
        dep1+=parseInt(dep[0][d])
      }
  }
  else{
    dep1=0
  }

  if(dep[1]){
      for(var e=0;d<dep[1].length;e++){
        dep2+=parseInt(dep[1][d])
      }
  }
  else{
    dep2=2
  }
  if(dep[2]){
      for(var d=0;d<dep[2].length;d++){
        dep3+=parseInt(dep[2][d])
      }
  }
  else{
    dep3=0
  }
  if(dep[3] ){
      for(var d=0;d<dep[3].length;d++){
        dep4+=parseInt(dep[3][d])
      }
  }
  else{
    dep4=0
  }
  if(dep[4]){
      for(var d=0;d<dep[4].length;d++){
        dep5+=parseInt(dep[4][d])
      }
  }
  else{
    dep5=0
  }
  if(dep[5]){
      for(var d=0;d<dep[5].length;d++){
        dep6+=parseInt(dep[5][d])
      }
  }
  else{
    dep6=0
  }
  if(dep[6]){
      for(var d=0;d<dep[6].length;d++){
        dep7+=parseInt(dep[6][d])
      }
  }
  else{
    dep7=0
  }
  if(dep[7]){
      for(var d=0;d<dep[7].length;d++){
        dep8+=parseInt(dep[7][d])
      }
  }
  else{
    dep8=0
  }
  if(dep[8]){
      for(var d=0;d<dep[8].length;d++){
        dep9+=parseInt(dep[8][d])
      }
  }
  else{
    dep9=0
  }
  if(dep[9]){
      for(var d=0;d<dep[9].length;d++){
        dep10+=parseInt(dep[9][d])
      }
  }
  else{
    dep10=0
  }
  if(dep[10]){
      for(var d=0;d<dep[10].length;d++){
        dep11+=parseInt(dep[10][d])
      }
  }
  else{
    dep11=0
  }
  if(dep[11]){
      for(var d=0;d<dep[11].length;d++){
        dep12+=parseInt(dep[11][d])
      }
  }
  else{
    dep12=0
  }
          // debit 

  if(deb[0] && deb[0].length>0){
      for(var d=0;d<deb[0].length;d++){
        deb1+=parseInt(deb[0][d])
      }
  }
  else{
    deb1=0
  }

  if(deb[1]){
      for(var e=0;d<deb[1].length;e++){
        deb2+=parseInt(deb[1][d])
      }
  }
  else{
    deb2=0
  }
  if(deb[2]){
      for(var d=0;d<deb[2].length;d++){
        deb3+=parseInt(deb[2][d])
      }
  }
  else{
    deb3=0
  }
  if(deb[3] ){
      for(var d=0;d<deb[3].length;d++){
        deb4+=parseInt(deb[3][d])
      }
  }
  else{
    deb4=0
  }
  if(deb[4]){
      for(var d=0;d<deb[4].length;d++){
        deb5+=parseInt(deb[4][d])
      }
  }
  else{
    deb5=0
  }
  if(deb[5]){
      for(var d=0;d<deb[5].length;d++){
        deb6+=parseInt(deb[5][d])
      }
  }
  else{
    deb6=0
  }
  if(deb[6]){
      for(var d=0;d<deb[6].length;d++){
        deb7+=parseInt(deb[6][d])
      }
  }
  else{
    deb7=0
  }
  if(deb[7]){
      for(var d=0;d<deb[7].length;d++){
        deb8+=parseInt(deb[7][d])
      }
  }
  else{
    deb8=0
  }
  if(deb[8]){
      for(var d=0;d<deb[8].length;d++){
        deb9+=parseInt(deb[8][d])
      }
  }
  else{
    deb9=0
  }
  if(deb[9]){
      for(var d=0;d<deb[9].length;d++){
        deb10+=parseInt(deb[9][d])
      }
  }
  else{
    deb10=0
  }
  if(deb[10]){
      for(var d=0;d<deb[10].length;d++){
        deb11+=parseInt(deb[10][d])
      }
  }
  else{
    deb11=0
  }
  if(deb[11]){
      for(var d=0;d<deb[11].length;d++){
        deb12+=parseInt(deb[11][d])
      }
  }
  else{
    deb12=0
  }


  cardColor = config.colors.white;
  headingColor = config.colors.headingColor;
  axisColor = config.colors.axisColor;
  borderColor = config.colors.borderColor;

  // Total Revenue Report Chart - Bar Chart
  // --------------------------------------------------------------------
  const totalRevenueChartEl = document.querySelector('#totalRevenueChart'),
    totalRevenueChartOptions = {
      series: [
        {
          name: `Total Amount Deposit for a month`,
          data: [dep1, dep2, dep3, dep4, dep5, dep6, dep7,dep8,dep9,dep10,dep11,dep12,]
        },
        {
          name: `Total Amount debit for a month `,
          data: [-deb1, -deb2, -deb3, -deb4, -deb5, -deb6, -deb7,-deb8,-deb9,-deb10,-deb11,-deb12,]
        }
      ],
      chart: {
        height: 400,
        stacked: true,
        type: 'bar',
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '33%',
          borderRadius: 12,
          startingShape: 'rounded',
          endingShape: 'rounded'
        }
      },
      colors: [config.colors.primary, config.colors.info],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 4,
        lineCap: 'round',
        colors: [cardColor]

      },
      legend: {
        show: true,
        horizontalAlign: 'center',
        position: 'top',
        markers: {
          height: 8,
          width: 8,
          radius: 12,
          offsetX: -3
        },
        labels: {
          colors: axisColor
        },
        itemMargin: {
          horizontal: 10
        }
      },
      grid: {
        borderColor: borderColor,
        padding: {
          top: 0,
          bottom: -8,
          left: 40,
          right: 0
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',"Aug","Sept","oct","Nov","Dec"],
        labels: {
          style: {
            fontSize: '18px',
            colors: axisColor,
          }
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '15px',
            colors: axisColor
          }
        }
      },
      responsive:[
        {
          breakpoint: 1700,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '32%'
              }
            }
          }
        },
        {
          breakpoint: 1580,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 1440,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '42%'
              }
            }
          }
        },
        {
          breakpoint: 1300,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '48%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '40%'
              }
            }
          }
        },
        {
          breakpoint: 1040,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 11,
                columnWidth: '48%'
              }
            }
          }
        },
        {
          breakpoint: 991,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '30%'
              }
            }
          }
        },
        {
          breakpoint: 840,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '35%'
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '28%'
              }
            }
          }
        },
        {
          breakpoint: 640,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '32%'
              }
            }
          }
        },
        {
          breakpoint: 576,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '37%'
              }
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '45%'
              }
            }
          }
        },
        {
          breakpoint: 420,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '52%'
              }
            }
          }
        },
        {
          breakpoint: 380,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '60%'
              }
            }
          }
        }
      ],
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof totalRevenueChartEl !== undefined && totalRevenueChartEl !== null) {
    const totalRevenueChart = new ApexCharts(totalRevenueChartEl, totalRevenueChartOptions);
    totalRevenueChart.render();
  }

  // Growth Chart - Radial Bar Chart
  // --------------------------------------------------------------------
  const growthChartEl = document.querySelector('#growthChart'),
    growthChartOptions = {
      series: [78],
      labels: ['Growth'],
      chart: {
        height: 240,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: 10,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '55%'
          },
          track: {
            background: cardColor,
            strokeWidth: '100%'
          },
          dataLabels: {
            name: {
              offsetY: 15,
              color: headingColor,
              fontSize: '15px',
              fontWeight: '600',
              fontFamily: 'Public Sans'
            },
            value: {
              offsetY: -25,
              color: headingColor,
              fontSize: '22px',
              fontWeight: '500',
              fontFamily: 'Public Sans'
            }
          }
        }
      },
      colors: [config.colors.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.5,
          gradientToColors: [config.colors.primary],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.6,
          stops: [30, 70, 100]
        }
      },
      stroke: {
        dashArray: 5
      },
      grid: {
        padding: {
          top: -35,
          bottom: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof growthChartEl !== undefined && growthChartEl !== null) {
    const growthChart = new ApexCharts(growthChartEl, growthChartOptions);
    growthChart.render();
  }

  // Profit Report Line Chart
  // --------------------------------------------------------------------
  const profileReportChartEl = document.querySelector('#profileReportChart'),
    profileReportChartConfig = {
      chart: {
        height: 80,
        // width: 175,
        type: 'line',
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 10,
          left: 5,
          blur: 3,
          color: config.colors.warning,
          opacity: 0.15
        },
        sparkline: {
          enabled: true
        }
      },
      grid: {
        show: false,
        padding: {
          right: 8
        }
      },
      colors: [config.colors.warning],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      series: [
        {
          data: [110, 270, 145, 245, 205, 285]
        }
      ],
      xaxis: {
        show: false,
        lines: {
          show: false
        },
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        show: false
      }
    };
  if (typeof profileReportChartEl !== undefined && profileReportChartEl !== null) {
    const profileReportChart = new ApexCharts(profileReportChartEl, profileReportChartConfig);
    profileReportChart.render();
  }

  // Order Statistics Chart
  // --------------------------------------------------------------------
  const chartOrderStatistics = document.querySelector('#orderStatisticsChart'),
    orderChartConfig = {
      chart: {
        height: 165,
        width: 130,
        type: 'donut'
      },
      labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
      series: [85, 15, 50, 50],
      colors: [config.colors.primary, config.colors.secondary, config.colors.info, config.colors.success],
      stroke: {
        width: 5,
        colors: cardColor
      },
      dataLabels: {
        enabled: false,
        formatter: function (val, opt) {
          return parseInt(val) + '%';
        }
      },
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 0,
          bottom: 0,
          right: 15
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              value: {
                fontSize: '1.5rem',
                fontFamily: 'Public Sans',
                color: headingColor,
                offsetY: -15,
                formatter: function (val) {
                  return parseInt(val) + '%';
                }
              },
              name: {
                offsetY: 20,
                fontFamily: 'Public Sans'
              },
              total: {
                show: true,
                fontSize: '0.8125rem',
                color: axisColor,
                label: 'Weekly',
                formatter: function (w) {
                  return '38%';
                }
              }
            }
          }
        }
      }
    };
  if (typeof chartOrderStatistics !== undefined && chartOrderStatistics !== null) {
    const statisticsChart = new ApexCharts(chartOrderStatistics, orderChartConfig);
    statisticsChart.render();
  }

  // Income Chart - Area chart
  // --------------------------------------------------------------------
  const incomeChartEl = document.querySelector('#incomeChart'),
    incomeChartConfig = {
      series: [
        {
          data: [24, 21, 30, 22, 42, 26, 35, 29]
        }
      ],
      chart: {
        height: 215,
        parentHeightOffset: 0,
        parentWidthOffset: 0,
        toolbar: {
          show: false
        },
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      legend: {
        show: false
      },
      markers: {
        size: 6,
        colors: 'transparent',
        strokeColors: 'transparent',
        strokeWidth: 4,
        discrete: [
          {
            fillColor: config.colors.white,
            seriesIndex: 0,
            dataPointIndex: 7,
            strokeColor: config.colors.primary,
            strokeWidth: 2,
            size: 6,
            radius: 8
          }
        ],
        hover: {
          size: 7
        }
      },
      colors: [config.colors.primary],
      fill: {
        type: 'gradient',
        gradient: {
          shade: shadeColor,
          shadeIntensity: 0.6,
          opacityFrom: 0.5,
          opacityTo: 0.25,
          stops: [0, 95, 100]
        }
      },
      grid: {
        borderColor: borderColor,
        strokeDashArray: 3,
        padding: {
          top: -20,
          bottom: -8,
          left: -10,
          right: 8
        }
      },
      xaxis: {
        categories: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: true,
          style: {
            fontSize: '13px',
            colors: axisColor
          }
        }
      },
      yaxis: {
        labels: {
          show: false
        },
        min: 10,
        max: 50,
        tickAmount: 4
      }
    };
  if (typeof incomeChartEl !== undefined && incomeChartEl !== null) {
    const incomeChart = new ApexCharts(incomeChartEl, incomeChartConfig);
    incomeChart.render();
  }

  // Expenses Mini Chart - Radial Chart
  // --------------------------------------------------------------------
  const weeklyExpensesEl = document.querySelector('#expensesOfWeek'),
    weeklyExpensesConfig = {
      series: [65],
      chart: {
        width: 60,
        height: 60,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          strokeWidth: '8',
          hollow: {
            margin: 2,
            size: '45%'
          },
          track: {
            strokeWidth: '50%',
            background: borderColor
          },
          dataLabels: {
            show: true,
            name: {
              show: false
            },
            value: {
              formatter: function (val) {
                return '$' + parseInt(val);
              },
              offsetY: 5,
              color: '#697a8d',
              fontSize: '13px',
              show: true
            }
          }
        }
      },
      fill: {
        type: 'solid',
        colors: config.colors.primary
      },
      stroke: {
        lineCap: 'round'
      },
      grid: {
        padding: {
          top: -10,
          bottom: -15,
          left: -10,
          right: -10
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      }
    };
  if (typeof weeklyExpensesEl !== undefined && weeklyExpensesEl !== null) {
    const weeklyExpenses = new ApexCharts(weeklyExpensesEl, weeklyExpensesConfig);
    weeklyExpenses.render();
  }
})();
