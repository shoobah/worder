function initCanvas() {

}

$(function () {
    //Get the canvas
    var cv = $("#myCanvas").get(0);
    if (!cv) {
        alert("FUCK! No canvas!!");
        return;
    }
    var theImage = $("#image1").get(0);
    var ctx = cv.getContext('2d');
    if (ctx) {
        ctx.fillStyle = "#5af";
        ctx.strokeStyle = "#000";
        ctx.lineWidth = "2";
        ctx.strokeRect(0, 0, 500, 500);
        ctx.drawImage(theImage, 100, 100);
    }
});