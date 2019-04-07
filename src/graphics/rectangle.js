(function()
{
    var Sprite = Laya.Sprite;
    var Stage  = Laya.Stage;
    (function()
    {
        //消除矢量绘制的锯齿，但会增加性能消耗
        //Laya.Config.isAntialias=true;
        //初始化舞台
        Laya.init(1136, 640);
        drawSomething1();
        drawSomething2();
        drawSomething3();
    })();
    function drawSomething1()
    {
        var sp = new Sprite();
        Laya.stage.addChild(sp);
        //画矩形
        sp.graphics.drawRect(20, 20, 100, 50, "#ffff00");
     }
     function drawSomething2()
    {
        var sp = new Sprite();
        Laya.stage.addChild(sp);
        //自定义路径
        var path =  [
            ["moveTo", 0, 0], //画笔移到A点
            ["lineTo", 100, 0],//画到B点
            ["lineTo", 100, 50],//再画到C点
            ["lineTo", 0, 50], //继续画到D点
            ["closePath"] //闭合路径
        ];
            //绘制矩形
        sp.graphics.drawPath(20, 120, path, {fillStyle: "#ff0000"});
     }
     function drawSomething3()
    {
        var sp = new Sprite();
        Laya.stage.addChild(sp);
        //自定义路径
        var path =  [
                ["moveTo", 30, 0], //画笔的起始点，
                ["arcTo", 500, 0, 500, 30, 30], //p1（500,0）为夹角B，（500,30）为端点p2
                ["arcTo", 500, 300, 470, 300, 30],//p1（500,300）为夹角C，（470,300）为端点p2
                ["arcTo", 0, 300, 0, 270, 30], //p1(0,300)为夹角D，（0,270）为端点p2
                ["arcTo", 0, 0, 30, 0, 30],//p1(0,0)为夹角A，（30,0）为端点p2
            ];
            //绘制圆角矩形
        sp.graphics.drawPath(150, 100, path, {fillStyle: "#ff0000"});
     }
})();