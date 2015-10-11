$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            marginRight: 15,
            marginTop: 20,
            style: {
                fontFamily: 'Roboto Condensed'
            }
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
            floor: 59,
            ceiling: 65,
            tickInterval: 1,
            offset: 15
        },
        yAxis: {
            tickPositions: [1,10,20,30,40,50],
            reversed: true,
            gridLineWidth: 0,
            title: {
                text: 'Rank'
            },
            labels: {
                format: '{value}-'
            },
            ceiling: 50,
            floor: 0,
            min: 1,
            startOnTick: false,
            tickInterval: 10
        },
        plotOptions: {
            scatter: {
                animation: true,
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
            useHTML: true,
            headerFormat: '<b>State Name</b><br>2014 Rank: {point.y}<br>2014 Well-Being Index Score: {point.x}<br><hr>Historical Data<br>',
            pointFormat: '<table class="history"><tr><td></td><td>2013</td><td>2012</td><td>2011</td><td>2010</td><td>2009</td><td>2008</td></tr><tr><td>Rank</td><td class="year-value">{point.Rank2013}</td><td class="year-value">{point.Rank2012}</td><td class="year-value">{point.Rank2011}</td><td class="year-value">{point.Rank2010}</td><td class="year-value">{point.Rank2009}</td><td class="year-value">{point.Rank2008}</td></tr></table>',
        },
        series: [{
            name: ' ',
            data: [
                {x:64.7, y:1, Rank2013: 16, Rank2012: 31, Rank2011: 4, Rank2010: 4, Rank2009:5, Rank2008:11, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:64.5, y:2, Rank2013: 8, Rank2012: 1, Rank2011: 1, Rank2010: 1, Rank2009:1, Rank2008:2, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:64.3, y:3, Rank2013: 2, Rank2012: 12, Rank2011: 11, Rank2010: 7, Rank2009:19, Rank2008:31, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:63.9, y:4, Rank2013: 34, Rank2012: 13, Rank2011: 21, Rank2010: 2, Rank2009:12, Rank2008:4, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:63.7, y:5, Rank2013: 5, Rank2012: 6, Rank2011: 10, Rank2010: 14, Rank2009:3, Rank2008:3, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:63.2, y:6, Rank2013: 7, Rank2012: 2, Rank2011: 6, Rank2010: 5, Rank2009:10, Rank2008:8, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:63.1, y:7, Rank2013: 3, Rank2012: 7, Rank2011: 8, Rank2010: 10, Rank2009:24, Rank2008:20, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:62.9, y:8, Rank2013: 12, Rank2012: 4, Rank2011: 5, Rank2010: 8, Rank2009:2, Rank2008:1, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:62.8, y:9, Rank2013: 33, Rank2012: 25, Rank2011: 24, Rank2010: 23, Rank2009:31, Rank2008:7, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:62.8, y:10, Rank2013: 21, Rank2012: 27, Rank2011: 27, Rank2010: 27, Rank2009:23, Rank2008:22, color: 'rgba(32, 130, 199, 1)', marker: { states: { hover: { fillColor: 'rgba(32, 130, 199, 1)' } } } },
                {x:62.8, y:11, Rank2013: 4, Rank2012: 3, Rank2011: 3, Rank2010: 6, Rank2009:4, Rank2008:5, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.8, y:12, Rank2013: 17, Rank2012: 18, Rank2011: 18, Rank2010: 18, Rank2009:21, Rank2008:9, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.7, y:13, Rank2013: 6, Rank2012: 5, Rank2011: 12, Rank2010: 17, Rank2009:6, Rank2008:27, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.4, y:14, Rank2013: 24, Rank2012: 14, Rank2011: 15, Rank2010: 21, Rank2009:13, Rank2008:17, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.4, y:15, Rank2013: 15, Rank2012: 21, Rank2011: 25, Rank2010: 25, Rank2009:16, Rank2008:24, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.2, y:16, Rank2013: 10, Rank2012: 9, Rank2011: 16, Rank2010: 19, Rank2009:7, Rank2008:26, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.2, y:17, Rank2013: 13, Rank2012: 10, Rank2011: 14, Rank2010: 11, Rank2009:18, Rank2008:12, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.2, y:18, Rank2013: 14, Rank2012: 20, Rank2011: 22, Rank2010: 22, Rank2009:26, Rank2008:28, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.2, y:19, Rank2013: 32, Rank2012: 35, Rank2011: 30, Rank2010: 36, Rank2009:32, Rank2008:38, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.2, y:20, Rank2013: 19, Rank2012: 23, Rank2011: 26, Rank2010: 29, Rank2009:22, Rank2008:14, color: 'rgba(38, 171, 225, 1)', marker: { states: { hover: { fillColor: 'rgba(38, 171, 225, 1)' } } } },
                {x:62.2, y:21, Rank2013: 11, Rank2012: 8, Rank2011: 9, Rank2010: 15, Rank2009:14, Rank2008:16, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:62.2, y:22, Rank2013: 38, Rank2012: 40, Rank2011: 33, Rank2010: 35, Rank2009:35, Rank2008:32, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:62.1, y:23, Rank2013: 1, Rank2012: 19, Rank2011: 2, Rank2010: 3, Rank2009:8, Rank2008:21, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:61.9, y:24, Rank2013: 31, Rank2012: 16, Rank2011: 19, Rank2010: 9, Rank2009:20, Rank2008:18, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:61.9, y:25, Rank2013: 29, Rank2012: 22, Rank2011: 23, Rank2010: 20, Rank2009:9, Rank2008:10, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:61.9, y:26, Rank2013: 30, Rank2012: 34, Rank2011: 42, Rank2010: 37, Rank2009:36, Rank2008:29, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:61.8, y:27, Rank2013: 25, Rank2012: 24, Rank2011: 20, Rank2010: 28, Rank2009:27, Rank2008:19, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:61.8, y:28, Rank2013: 9, Rank2012: 15, Rank2011: 17, Rank2010: 12, Rank2009:17, Rank2008:6, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:61.7, y:29, Rank2013: 18, Rank2012: 11, Rank2011: 13, Rank2010: 13, Rank2009:15, Rank2008:15, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:61.5, y:30, Rank2013: 27, Rank2012: 33, Rank2011: 28, Rank2010: 31, Rank2009:25, Rank2008:23, color: 'rgba(116, 204, 216, 1)', marker: { states: { hover: { fillColor: 'rgba(116, 204, 216, 1)' } } } },
                {x:61.5, y:31, Rank2013: 26, Rank2012: 39, Rank2011: 40, Rank2010: 43, Rank2009:46, Rank2008:44, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:61.2, y:32, Rank2013: 20, Rank2012: 17, Rank2011: 7, Rank2010: 16, Rank2009:11, Rank2008:13, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:61.2, y:33, Rank2013: 35, Rank2012: 30, Rank2011: 34, Rank2010: 32, Rank2009:33, Rank2008:37, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:61.2, y:34, Rank2013: 23, Rank2012: 32, Rank2011: 29, Rank2010: 24, Rank2009:29, Rank2008:25, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:61.2, y:35, Rank2013: 36, Rank2012: 29, Rank2011: 31, Rank2010: 30, Rank2009:30, Rank2008:34, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:61.1, y:36, Rank2013: 22, Rank2012: 28, Rank2011: 32, Rank2010: 26, Rank2009:28, Rank2008:30, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:61.1, y:37, Rank2013: 39, Rank2012: 37, Rank2011: 35, Rank2010: 33, Rank2009:40, Rank2008:33, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:61.1, y:38, Rank2013: 28, Rank2012: 26, Rank2011: 47, Rank2010: 44, Rank2009:37, Rank2008:35, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:61.0, y:39, Rank2013: 42, Rank2012: 41, Rank2011: 39, Rank2010: 38, Rank2009:39, Rank2008:36, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:60.9, y:40, Rank2013: 41, Rank2012: 43, Rank2011: 36, Rank2010: 42, Rank2009:41, Rank2008:42, color: 'rgba(187, 225, 206, 1)', marker: { states: { hover: { fillColor: 'rgba(187, 225, 206, 1)' } } } },
                {x:60.8, y:41, Rank2013: 43, Rank2012: 38, Rank2011: 43, Rank2010: 34, Rank2009:38, Rank2008:40, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } },
                {x:60.7, y:42, Rank2013: 37, Rank2012: 36, Rank2011: 37, Rank2010: 41, Rank2009:34, Rank2008:41, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } },
                {x:60.7, y:43, Rank2013: 45, Rank2012: 46, Rank2011: 44, Rank2010: 47, Rank2009:48, Rank2008:47, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } },
                {x:60.6, y:44, Rank2013: 44, Rank2012: 47, Rank2011: 41, Rank2010: 40, Rank2009:42, Rank2008:43, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } },
                {x:60.6, y:45, Rank2013: 47, Rank2012: 45, Rank2011: 45, Rank2010: 46, Rank2009:44, Rank2008:39, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } },
                {x:60.3, y:46, Rank2013: 48, Rank2012: 48, Rank2011: 48, Rank2010: 48, Rank2009:45, Rank2008:50, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } },
                {x:60.1, y:47, Rank2013: 46, Rank2012: 44, Rank2011: 46, Rank2010: 45, Rank2009:47, Rank2008:46, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } },
                {x:60.0, y:48, Rank2013: 40, Rank2012: 42, Rank2011: 38, Rank2010: 39, Rank2009:43, Rank2008:45, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } },
                {x:59.8, y:49, Rank2013: 49, Rank2012: 49, Rank2011: 49, Rank2010: 49, Rank2009:49, Rank2008:48, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } },
                {x:59.0, y:50, Rank2013: 50, Rank2012: 50, Rank2011: 50, Rank2010: 50, Rank2009:50, Rank2008:49, color: 'rgba(220, 233, 219, 1)', marker: { states: { hover: { fillColor: 'rgba(220, 233, 219, 1)' } } } }
            ]

        }]

       
    });
});