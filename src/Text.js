(function()
{
    var Stage   = Laya.Stage;
    var Text    = Laya.Text;
    var Browser = Laya.Browser;
    var WebGL   = Laya.WebGL;
    (function(){
        // 不支持WebGL时自动切换至Canvas
        Laya.init(2000, 1000, WebGL);
        Laya.stage.alignV = Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Stage.ALIGN_CENTER;
        Laya.stage.scaleMode = Stage.SCALE_SHOWALL;
        Laya.stage.bgColor = "#232628";
        Text_InputSingleline();
        Text_InputMultiline();
    })();
    // 调用创建文本的函数 并设置其位置与overflow
    function createTexts(){
        var t1 = createText();
        t1.overflow = Text.VISIBLE;
        t1.pos(10, 10);
        var t2 = createText();
        t2.overflow = Text.SCROLL;
        t2.pos(10, 110);
        var t3 = createText();
        t3.overflow = Text.HIDDEN;
        t3.pos(10, 210);
    }
    // 创建文本的函数包装
     function createText(){
        var txt = new Text();
        txt.text =
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" +
            "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
        txt.borderColor = "#FFFF00";
        txt.size(300, 50);
        txt.fontSize = 20;
        txt.color = "#ffffff";
        Laya.stage.addChild(txt);
        return txt;
    }
    //单行输入input
    function Text_InputSingleline(){
        var textInput = new Laya.TextInput("单行输入");//创建一个 TextInput 类的实例对象 textInput 。
        textInput.wordWrap = true;//设置 textInput 的文本自动换行。
        textInput.fontSize = 30;//设置 textInput 的字体大小。
        textInput.x = 0;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        textInput.y = 0;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        textInput.width = 300;//设置 textInput 的宽度。
        textInput.height = 200;//设置 textInput 的高度。
        textInput.bgColor = "#aabbcc";
        Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
    }
    //多行输入input
    function Text_InputMultiline(){
        var textInput = new Laya.TextInput("多行输入");//创建一个 TextInput 类的实例对象 textInput 。
        textInput.fontSize = 30;//设置 textInput 的字体大小。
        textInput.wordWrap = true;//设置 textInput 的文本自动换行。
        textInput.multiline = true;//设置textInput的多行输入
        textInput.x = 0;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        textInput.y = 300//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        textInput.width = 300;//设置 textInput 的宽度。
        textInput.height = 200;//设置 textInput 的高度。
        textInput.bgColor = "#aabbcc";
        Laya.stage.addChild(textInput);//将 textInput 添加到显示列表。
    }
})()