$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        credits: {
           enabled: false
        },
        title: {
            text: ' '
        },
        legend: {
            enabled: false
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Well-Being Index Score'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true,
        },
        yAxis: {
            reversed: true,
            gridLineWidth: 0,
            title: {
                text: 'Rank'
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 15,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: true
                        }
                    }
                }
            }
        },
        tooltip: {
            borderColor: '#ccc',
            backgroundColor: '#fff',
            borderRadius: 1,
            headerFormat: '<b>State Name</b><br>',
            pointFormat: '2014 Rank: {point.y}<br>2014 Well-Being Index Score: {point.x}<hr>'
        },
        series: [{
            name: ' ',
            data: [
                {x:64.7, y:1, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:64.5, y:2, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:64.3, y:3, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:63.9, y:4, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:63.7, y:5, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:63.2, y:6, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:63.1, y:7, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:62.9, y:8, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:62.8, y:9, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:62.8, y:10, color: 'rgba(32, 130, 199, 0.6)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 0.6)' } } } },
                {x:62.8, y:11, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.8, y:12, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.7, y:13, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.4, y:14, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.4, y:15, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.2, y:16, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.2, y:17, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.2, y:18, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.2, y:19, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.2, y:20, color: 'rgba(38, 171, 225, 0.6)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 0.6)' } } } },
                {x:62.2, y:21, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:62.2, y:22, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:62.1, y:23, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:61.9, y:24, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:61.9, y:25, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:61.9, y:26, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:61.8, y:27, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:61.8, y:28, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:61.7, y:29, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:61.5, y:30, color: 'rgba(116, 204, 216, 0.6)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 0.6)' } } } },
                {x:61.5, y:31, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:61.2, y:32, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:61.2, y:33, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:61.2, y:34, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:61.2, y:35, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:61.1, y:36, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:61.1, y:37, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:61.1, y:38, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:61.0, y:39, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:60.9, y:40, color: 'rgba(187, 225, 206, 0.6)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 0.6)' } } } },
                {x:60.8, y:41, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } },
                {x:60.7, y:42, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } },
                {x:60.7, y:43, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } },
                {x:60.6, y:44, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } },
                {x:60.6, y:45, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } },
                {x:60.3, y:46, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } },
                {x:60.1, y:47, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } },
                {x:60.0, y:48, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } },
                {x:59.8, y:49, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } },
                {x:59.0, y:50, color: 'rgba(220, 233, 219, 0.6)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 0.6)' } } } }
            ]

        }]

       
    });
});

