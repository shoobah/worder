function drawGrid() {
    //Get the canvas
    var canvas = $("#myCanvas").get(0);
    var context;
    if (canvas.getContext) {
        context = canvas.getContext("2d");
    }

    function getX(e) {
        var x;
        if (e.pageX) {
            x = e.pageX;
        }
        else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        }
        x -= canvas.offsetLeft;
        return x;
    }

    function getY(e) {
        var y;
        if (e.pageY) {
            y = e.pageY;
        }
        else {
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        y -= canvas.offsetTop;
        return y;
    }

    function draw() {
        if (context) {
            context.fillStyle = "#00ffaa";
            context.strokeStyle = "black";
            context.lineWidth = 1;
            context.strokeRect(0, 0, 500, 500);
            context.stroke();
        }
    }

    var isDrawing = false;

    $("#myCanvas").mousedown(function (event) {
        if (event.which == 1) {
            context.beginPath();
            context.moveTo(getX(event), getY(event));
        }
    });
    $("#myCanvas").mousemove(function (event) {
        if (event.which == 1) {
            var x = getX(event);
            var y = getY(event);
            context.lineTo(x, y);
            context.stroke();
            $("#info").text("Move, X=" + x + " Y=" + y);
        }
    });
    $("#myCanvas").mouseup(function (event) {
        if (event.which == 1) {
            context.stroke();
        }
    });

    draw();
}

$(function () {
    drawGrid();
});

