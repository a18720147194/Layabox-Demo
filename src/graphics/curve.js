(function()
{
    var Sprite = Laya.Sprite;
    var Stage  = Laya.Stage;
    var WebGL  = Laya.WebGL;
    var sp, sp1;
    (function()
    {
        //初始化舞台，不支持WebGL时自动切换至Canvas
        Laya.init(500, 300, WebGL);
        drawSomething();
    })();
    function drawSomething()
    {
        sp = new Sprite();
        Laya.stage.addChild(sp);
        sp1 = new Sprite();
        Laya.stage.addChild(sp1);
        //画曲线 贝塞尔曲线
        sp.graphics.drawCurves(10, 58, [0, 0, 19, 50, 39, 0], "#ff0000", 3);
        sp1.graphics.drawCurves(10, 58, [0, 0, 19, -100, 39, 0, 58, 100, 78, 0], "#ffffff", 3);
    }
})();