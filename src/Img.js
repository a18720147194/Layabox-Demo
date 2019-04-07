
(function()
{
    var Sprite  = Laya.Sprite;
    var Stage   = Laya.Stage;
    var Texture = Laya.Texture;
    var Browser = Laya.Browser;
    var Handler = Laya.Handler;
    var WebGL   = Laya.WebGL;
    var ColorFilter = Laya.ColorFilter;
    var GlowFilter = Laya.GlowFilter;
    var texture1 = "../laya/assets/img/2.png";
    var texture2 = "../laya/assets/img/3.png";
    var flag = false;
    var ape, apeGlow, apeshadow;
    var apeTexture;
    (function(){
        // 不支持WebGL时自动切换至Canvas
        Laya.init(Browser.clientWidth, Browser.clientHeight, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#232628";
        // Loader 类可用来加载文本、JSON、XML、二进制、图像等资源
        // Handler是事件处理器类  create()从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收
        // 个人理解：加载资源 回调函数
        Laya.loader.load([texture1, texture2], Handler.create(this, setup));
    })();
    // loadImage
    function onAssetsLoaded(){
        ape = new Sprite();
        Laya.stage.addChild(ape);
        ape.pivot(0, 0);
        ape.pos(100, 100);
        // 显示默认纹理
        switchTexture();
        ape.on("click", this, switchTexture);
    }
    function switchTexture(){
        var textureUrl = (flag = !flag) ? texture1 : texture2;
        // 更换纹理
        // 清空绘制命令
        ape.graphics.clear();
        ape.loadImage(textureUrl);
        var texture = Laya.loader.getRes(textureUrl);
    }

    //drawTexture
    function onAssetsLoaded2(){
        ape = new Sprite();
        Laya.stage.addChild(ape);
        ape.pivot(0, 0);
        ape.pos(0, 0);
        // 显示默认纹理
        switchTexture2();
        
        ape.on("click", this, switchTexture2);
    }
    function switchTexture2(){
        var textureUrl = (flag = !flag) ? texture1 : texture2;
        // 更换纹理
        ape.graphics.clear();
        var texture = Laya.loader.getRes(textureUrl);
        ape.graphics.drawTexture(texture, 0, 0);
        //创建遮罩对象
        var cMask = new Sprite();
        //画一个圆形的遮罩区域
        cMask.graphics.drawCircle(50,50,50,"#ff0000");
          //圆形所在的位置坐标
        cMask.pos(0,0);
         //实现img显示对象的遮罩效果
        ape.mask = cMask;
        // 设置交互区域
        ape.size(texture.width, texture.height);
    }

    // 滤镜
    function setup(){
        normalizeApe();
        makeRedApe();
        grayingApe();
        createApe1();
        filterGlow();
        filterShadow();
    }
    function normalizeApe(){
        var originalApe = createApe();
        apeTexture = Laya.loader.getRes("../laya/assets/img/2.png");
    }
    function makeRedApe(){
        //由 20 个项目（排列成 4 x 5 矩阵）组成的数组，红色
        var redMat =
            [
                1, 0, 0, 0, 0, //R
                0, 0, 0, 0, 0, //G
                0, 0, 0, 0, 0, //B
                0, 0, 0, 1, 0, //A
            ];
        //创建一个颜色滤镜对象,红色
        var redFilter = new ColorFilter(redMat);
        // 赤化猩猩
        var redApe = createApe();
        redApe.filters = [redFilter];
        var firstChild = Laya.stage.getChildAt(0);
        redApe.x = firstChild.x + apeTexture.width;
        redApe.y = firstChild.y;
    }
    function grayingApe(){
        //由 20 个项目（排列成 4 x 5 矩阵）组成的数组，灰图
        var grayscaleMat = [0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0.3086, 0.6094, 0.0820, 0, 0, 0, 0, 0, 1, 0];
        //创建一个颜色滤镜对象，灰图
        var grayscaleFilter = new ColorFilter(grayscaleMat);
        // 灰度猩猩
        var grayApe = createApe();
        grayApe.filters = [grayscaleFilter];
        var secondChild = Laya.stage.getChildAt(1);
        grayApe.x = secondChild.x + apeTexture.width;
        grayApe.y = secondChild.y;
    }
    function createApe(){
        var ape = new Sprite();
        ape.loadImage("../laya/assets/img/2.png");
        Laya.stage.addChild(ape);
        return ape;
    }
    function createApe1()
    {
        // ape = new Sprite();
        // ape.loadImage(texture1);
        apeGlow = new Sprite();
        apeGlow.loadImage(texture1);
        apeshadow = new Sprite();
        apeshadow.loadImage(texture1);
        // ape.pos(100,50);
        apeGlow.pos(400,0);
        apeshadow.pos(500,0);
        // Laya.stage.addChild(ape);
        Laya.stage.addChild(apeGlow);
        Laya.stage.addChild(apeshadow);
    }
    function filterGlow()
    {
        //创建一个发光滤镜
        var glowFilter = new GlowFilter("#ffff00", 10, 0, 0);
        //设置滤镜集合为发光滤镜
        apeGlow.filters = [glowFilter];
    }
    function filterShadow()
    {
        //创建一个阴影滤镜
        var glowFilter = new GlowFilter("#000000", 8, 8, 8);
        //设置滤镜为阴影滤镜
        apeshadow.filters = [glowFilter];
    }

})();