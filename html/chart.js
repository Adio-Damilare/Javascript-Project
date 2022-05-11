/**
 * Dashboard Analytics
 */
 

 'use strict';

 (function () {
   var user = JSON.parse(localStorage.getItem("registerMonths"));
   let cardColor, headingColor, axisColor, shadeColor, borderColor;
   var dep2=0;
   var dep3=0;
   var dep4=0;
   var dep5=0;
   var dep6=0;
   var dep7=0;
   var dep8=0;
   var dep9=0;
   var dep10=0;
   var dep11=0;
   var dep12=0;
   var dep13=0
   if(user[0]){
     for(let r=0;r<user[0].length;r++){
      dep2+=parseInt(user[0][r]);
 
     }
   }else{
     dep2=300
   }
  
   if(user[1]){
     for( let r=0;r<user[1].length;r++){
  
       dep3+=user[1][r];
     }
   }else{
     dep3=0
   }
  
   if(user[2]){
     for( let r=0;r<user[2].length;r++){
  
       dep4+=user[2][r];
     }
   }else{
     dep4=0
   }
  
   if(user[3]){
     for( let r=0;r<user[3].length;r++){
  
       dep5+=user[3][r];
     }
   }else{
     dep5=0
   }
  
   if(user[4]){
     for( let r=0;r<user[4].length;r++){
  
       dep6+=user[4][r];
     }
   }else{
     dep6=0
   }
  
   if(user[5]){
     for( let r=0;r<user[5].length;r++){
  
       dep7+=user[5][r];
     }
   }else{
     dep7=0
   }
  
   if(user[6]){
     for( let r=0;r<user[6].length;r++){
  
       dep8+=user[6][r];
     }
   }else{
     dep8=0
   }
  
   if(user[7]){
     for( let r=0;r<user[7].length;r++){
  
       dep9+=user[r];
     }
   }else{
     dep9=0
   }
  
   if(user[8]){
     for( let r=0;r<user[8].length;r++){
  
       dep10+=user[8][r];
     }
   }else{
     dep10=0
   }
  
   if(user[9]){
     for( let r=0;r<user[9].length;r++){
  
       dep11+=user[9][r];
     }
   }else{
     dep11=0
   }
  
   if(user[10]){
     for( let r=0;r<user[10].length;r++){
  
       dep12+=user[10][r];
     }
   }else{
     dep12=0
   }
  
   if(user[11]){
     for( let r=0;r<user[11].length;r++){
  
       dep13+=user[11][r];
     }
   }else{
     dep13=90
   }



   
//    }

 
   // Income Chart - Area chart
   // --------------------------------------------------------------------
   const incomeChartEl = document.querySelector('#incomeChart'),
     incomeChartConfig = {
       series: [
         {
           data: [dep2,dep3,dep4,dep5,dep6, dep7, dep8, dep9, dep10, dep11,dep12,dep13]
         }
       ],
       chart: {
         height: 245,
         parentHeightOffset: 0,
         parentWidthOffset: 0,
         toolbar: {
           show: false
         },
         type: 'area'
       },
       dataLabels: {
         enabled: true
       },
       stroke: {
         width: 1,
         curve: 'smooth'
       },
       legend: {
         show: true
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
           stops: [0, 105, 100]
         }
       },
       grid: {
         borderColor: borderColor,
         strokeDashArray: 3,
         padding: {
           top: -50,
           bottom: -8,
           left: 20,
           right: 8
         }
       },
       xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',"Aug","Sept","oct","Nov","Dec"],
         axisBorder: {
           show: false
         },
         axisTicks: {
           show: false
         },
         labels: {
           show: true,
           style: {
             fontSize: '12px',
             colors: axisColor
           }
         }
       },
       yaxis: {
         labels: {
           show:false
         },
         min: 0.0005,
         max: 50,
         tickAmount: 8
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
    //    series: [5],
    //    chart: {
    //      width: 60,
    //      height: 60,
    //      type: 'radialBar'
    //    },
    //    plotOptions: {
    //      radialBar: {
    //        startAngle: 0,
    //        endAngle: 360,
    //        strokeWidth: '8',
    //        hollow: {
    //          margin: 2,
    //          size: '45%'
    //        },
    //        track: {
    //          strokeWidth: '50%',
    //          background: borderColor
    //        },
    //        dataLabels: {
    //          show: true,
    //          name: {
    //            show: false
    //          },
    //          value: {
    //            formatter: function (val) {
    //              return '$' + parseInt(val);
    //            },
    //            offsetY: 5,
    //            color: '#697a8d',
    //            fontSize: '13px',
    //            show: true
    //          }
    //        }
    //      }
    //    },
    //    fill: {
    //      type: 'solid',
    //      colors: config.colors.primary
    //    },
    //    stroke: {
    //      lineCap: 'round'
    //    },
    //    grid: {
    //      padding: {
    //        top: -10,
    //        bottom: -15,
    //        left: -10,
    //        right: -10
    //      }
    //    },
    //    states: {
    //      hover: {
    //        filter: {
    //          type: 'none'
    //        }
    //      },
    //      active: {
    //        filter: {
    //          type: 'none'
    //        }
    //      }
    //    }
     };
   if (typeof weeklyExpensesEl !== undefined && weeklyExpensesEl !== null) {
     const weeklyExpenses = new ApexCharts(weeklyExpensesEl, weeklyExpensesConfig);
     weeklyExpenses.render();
   }})();
