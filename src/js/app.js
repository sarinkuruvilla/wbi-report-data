(function() {

        "use strict";


        var randomScalingFactor = function(){ return Math.round(Math.random()*100);};
        var lineChartData = {
            datasets : [
                {
                    label: "My First dataset",
                    fillColor : "rgba(220,220,220,0)",
                    strokeColor : "rgba(220,220,220,0)",
                    pointColor : "rgba(220,220,220,1)",
                    pointStrokeColor : "#fff",
                    pointHighlightFill : "#fff",
                    pointHighlightStroke : "rgba(220,220,220,1)",
                    data: [
                        { x: 59, y: 50 }, 
                        { x: 59.5, y: 40 }, 
                        { x: 61.3, y: 20 }, 
                        { x: 62, y: 10 },
                        { x: 65, y: 1 }
                    ]
                }
            ]

        };
        var options = {
            showScale: true
        };


    window.onload = function(){
        var ctx = document.getElementById("canvas").getContext("2d");
        window.myLine = new Chart(ctx).Scatter(lineChartData, {
            responsive: true,
            scaleShowGridLines : false,
            pointDotRadius : 18,
            scales: {
                yAxes: [
                    {
                        beginAtZero: true,
                        labels: {
                            userCallback: function(tick, index, ticks) {
                                return Math.abs(tick);
                            }
                        }
                    }
                ]
            }
        });


        for(var fillColor in myLine.datasets[0].points) {
            myLine.datasets[0].points[fillColor].fillColor = 'rgba('+ chroma(chroma.bezier(['dce9db', '2082c7']).scale().colors(myLine.datasets[0].points.length)[fillColor]).rgb() + ', 0.5)';

            
            //myLine.datasets[0].points[fillColor].fillColor = 'rgba(32, 130, 199,0.6)';
            

        }
        
        
        myLine.update();
    };

})();