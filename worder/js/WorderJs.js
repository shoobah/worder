var Worder = {};
(function () {
    Worder.Version = '0.1';
    Worder.Global = {
        GridSize: 30
    };
    Worder.Test = (function (x, y) {
        return x * y + ' ' + this.Version;
    });
    Worder.Grid = {};
    Worder.Grid.Draw = function () { };
})(Worder);