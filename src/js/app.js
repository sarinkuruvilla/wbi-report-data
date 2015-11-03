$(function () {

    var options = window.options =  {
        chart: {
            renderTo: 'container',
            type: 'scatter',
            // events: {
            //     load: function () {
                    
            //         var chart = this,
            //             each = Highcharts.each,
            //             series = chart.series[0];
                    
            //         each(series.data, function(p, i) {
            //             p.graphic.attr({
            //                 translateY : 50;
            //             });
                        
            //             p.graphic.attr()[chart.pointCount < 250 ? 'animate' : 'attr'](Highcharts.merge({
            //                 translateY : 0;
            //             }));
            //         });
            //     }
            // },
            zoomType: 'xy',
            marginRight: 15,
            marginTop: 20,
            style: {
                fontFamily: 'Roboto Condensed'
            },
            animation: {
                duration: 1200
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
            min: 59,
            max: 65,
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
            max: 50,
            ceiling: 100,
            min: 1,
            startOnTick: false,
            tickInterval: 10
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
        series: [{
            name: '',
            data: []
        }]
    };
    var chart;
    var initialChart = function initialChart (o) {
        chart = new Highcharts.Chart(o);
    };

    var getData = function getJSON(url, f) {
        $.getJSON( url, function(data) {
        })
          .done(function(data) {
            options.tooltip = data.tooltip;
            options.xAxis[0] = data.xAxis;
            options.yAxis[0] = data.yAxis;
            options.series[0].data = data.data;

          })
          .fail(function() {
            console.log( "JSON error" );
          })
          .always(function() {
            f(options);
            //var f = f;
            //console.log(f);
            //$('#container').highcharts(options);
        });
    };
    
    getData('data/state.json', initialChart);
    

    $('a').click(function() {
        if ($(this).attr('data-url')) {
            var url = $(this).attr('data-url');
            getData(url, function(){
                chart.series[0].update(options.tooltip);
                chart.xAxis[0].update(options.xAxis[0]);
                chart.yAxis[0].update(options.yAxis[0]);
                chart.series[0].setData(options.series[0].data);

            });
        }
        // getJSON('data/communities.json');
    });
});