(function()
{
    var Sprite = Laya.Sprite;
    var Stage  = Laya.Stage;
    var WebGL  = Laya.WebGL;
    var sp1, sp2;
    (function()
    {
        //初始化舞台
        Laya.init(500, 300, WebGL);
        drawSomething();
    })();
    function drawSomething()
    {
        sp1 = new Sprite();
        sp2 = new Sprite();
        Laya.stage.addChild(sp1);
        Laya.stage.addChild(sp2);
        //画直线
        sp1.graphics.drawLine(10, 58, 167, 58, "#ff0000", 5);
        //折线  数组中的坐标都是相对坐标
        sp2.graphics.drawLines(20, 68, [0, 0, 40, -50, 80, 0, 120, -50],  "#ff0000", 5);
    }
})();