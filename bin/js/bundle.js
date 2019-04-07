var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
    var Stage = Laya.Stage;
    var Text = Laya.Text;
    var Browser = Laya.Browser;
    var WebGL = Laya.WebGL;
    (function () {
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
    function createTexts() {
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
    function createText() {
        var txt = new Text();
        txt.text = "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" + "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！\n" + "Layabox是HTML5引擎技术提供商与优秀的游戏发行商，面向AS/JS/TS开发者提供HTML5开发技术方案！";
        txt.borderColor = "#FFFF00";
        txt.size(300, 50);
        txt.fontSize = 20;
        txt.color = "#ffffff";
        Laya.stage.addChild(txt);
        return txt;
    }
    //单行输入input
    function Text_InputSingleline() {
        var textInput = new Laya.TextInput("单行输入"); //创建一个 TextInput 类的实例对象 textInput 。
        textInput.wordWrap = true; //设置 textInput 的文本自动换行。
        textInput.fontSize = 30; //设置 textInput 的字体大小。
        textInput.x = 0; //设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        textInput.y = 0; //设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        textInput.width = 300; //设置 textInput 的宽度。
        textInput.height = 200; //设置 textInput 的高度。
        textInput.bgColor = "#aabbcc";
        Laya.stage.addChild(textInput); //将 textInput 添加到显示列表。
    }
    //多行输入input
    function Text_InputMultiline() {
        var textInput = new Laya.TextInput("多行输入"); //创建一个 TextInput 类的实例对象 textInput 。
        textInput.fontSize = 30; //设置 textInput 的字体大小。
        textInput.wordWrap = true; //设置 textInput 的文本自动换行。
        textInput.multiline = true; //设置textInput的多行输入
        textInput.x = 0; //设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
        textInput.y = 300; //设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
        textInput.width = 300; //设置 textInput 的宽度。
        textInput.height = 200; //设置 textInput 的高度。
        textInput.bgColor = "#aabbcc";
        Laya.stage.addChild(textInput); //将 textInput 添加到显示列表。
    }
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXJJREVfYmV0YS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvVGV4dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNWQSxDQUFDLFlBQ0Q7QUFDSSxRQUFJLFFBQVUsS0FBSyxLQUFuQjtBQUNBLFFBQUksT0FBVSxLQUFLLElBQW5CO0FBQ0EsUUFBSSxVQUFVLEtBQUssT0FBbkI7QUFDQSxRQUFJLFFBQVUsS0FBSyxLQUFuQjtBQUNBLEtBQUMsWUFBVTtBQUNQO0FBQ0EsYUFBSyxJQUFMLENBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixLQUF0QjtBQUNBLGFBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsTUFBTSxZQUExQjtBQUNBLGFBQUssS0FBTCxDQUFXLE1BQVgsR0FBb0IsTUFBTSxZQUExQjtBQUNBLGFBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsTUFBTSxhQUE3QjtBQUNBLGFBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsU0FBckI7QUFDQTtBQUNBO0FBQ0gsS0FURDtBQVVBO0FBQ0EsYUFBUyxXQUFULEdBQXNCO0FBQ2xCLFlBQUksS0FBSyxZQUFUO0FBQ0EsV0FBRyxRQUFILEdBQWMsS0FBSyxPQUFuQjtBQUNBLFdBQUcsR0FBSCxDQUFPLEVBQVAsRUFBVyxFQUFYO0FBQ0EsWUFBSSxLQUFLLFlBQVQ7QUFDQSxXQUFHLFFBQUgsR0FBYyxLQUFLLE1BQW5CO0FBQ0EsV0FBRyxHQUFILENBQU8sRUFBUCxFQUFXLEdBQVg7QUFDQSxZQUFJLEtBQUssWUFBVDtBQUNBLFdBQUcsUUFBSCxHQUFjLEtBQUssTUFBbkI7QUFDQSxXQUFHLEdBQUgsQ0FBTyxFQUFQLEVBQVcsR0FBWDtBQUNIO0FBQ0Q7QUFDQyxhQUFTLFVBQVQsR0FBcUI7QUFDbEIsWUFBSSxNQUFNLElBQUksSUFBSixFQUFWO0FBQ0EsWUFBSSxJQUFKLEdBQ0ksZ0VBQ0EsNkRBREEsR0FFQSwyREFISjtBQUlBLFlBQUksV0FBSixHQUFrQixTQUFsQjtBQUNBLFlBQUksSUFBSixDQUFTLEdBQVQsRUFBYyxFQUFkO0FBQ0EsWUFBSSxRQUFKLEdBQWUsRUFBZjtBQUNBLFlBQUksS0FBSixHQUFZLFNBQVo7QUFDQSxhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEdBQXBCO0FBQ0EsZUFBTyxHQUFQO0FBQ0g7QUFDRDtBQUNBLGFBQVMsb0JBQVQsR0FBK0I7QUFDM0IsWUFBSSxZQUFZLElBQUksS0FBSyxTQUFULENBQW1CLE1BQW5CLENBQWhCLENBRDJCLENBQ2dCO0FBQzNDLGtCQUFVLFFBQVYsR0FBcUIsSUFBckIsQ0FGMkIsQ0FFRDtBQUMxQixrQkFBVSxRQUFWLEdBQXFCLEVBQXJCLENBSDJCLENBR0g7QUFDeEIsa0JBQVUsQ0FBVixHQUFjLENBQWQsQ0FKMkIsQ0FJWDtBQUNoQixrQkFBVSxDQUFWLEdBQWMsQ0FBZCxDQUwyQixDQUtYO0FBQ2hCLGtCQUFVLEtBQVYsR0FBa0IsR0FBbEIsQ0FOMkIsQ0FNTDtBQUN0QixrQkFBVSxNQUFWLEdBQW1CLEdBQW5CLENBUDJCLENBT0o7QUFDdkIsa0JBQVUsT0FBVixHQUFvQixTQUFwQjtBQUNBLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsU0FBcEIsRUFUMkIsQ0FTSTtBQUNsQztBQUNEO0FBQ0EsYUFBUyxtQkFBVCxHQUE4QjtBQUMxQixZQUFJLFlBQVksSUFBSSxLQUFLLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBaEIsQ0FEMEIsQ0FDaUI7QUFDM0Msa0JBQVUsUUFBVixHQUFxQixFQUFyQixDQUYwQixDQUVGO0FBQ3hCLGtCQUFVLFFBQVYsR0FBcUIsSUFBckIsQ0FIMEIsQ0FHQTtBQUMxQixrQkFBVSxTQUFWLEdBQXNCLElBQXRCLENBSjBCLENBSUM7QUFDM0Isa0JBQVUsQ0FBVixHQUFjLENBQWQsQ0FMMEIsQ0FLVjtBQUNoQixrQkFBVSxDQUFWLEdBQWMsR0FBZCxDQU4wQixDQU1UO0FBQ2pCLGtCQUFVLEtBQVYsR0FBa0IsR0FBbEIsQ0FQMEIsQ0FPSjtBQUN0QixrQkFBVSxNQUFWLEdBQW1CLEdBQW5CLENBUjBCLENBUUg7QUFDdkIsa0JBQVUsT0FBVixHQUFvQixTQUFwQjtBQUNBLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsU0FBcEIsRUFWMEIsQ0FVSztBQUNsQztBQUNKLENBbkVEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIihmdW5jdGlvbigpXHJcbntcclxuICAgIHZhciBTdGFnZSAgID0gTGF5YS5TdGFnZTtcclxuICAgIHZhciBUZXh0ICAgID0gTGF5YS5UZXh0O1xyXG4gICAgdmFyIEJyb3dzZXIgPSBMYXlhLkJyb3dzZXI7XHJcbiAgICB2YXIgV2ViR0wgICA9IExheWEuV2ViR0w7XHJcbiAgICAoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyDkuI3mlK/mjIFXZWJHTOaXtuiHquWKqOWIh+aNouiHs0NhbnZhc1xyXG4gICAgICAgIExheWEuaW5pdCgyMDAwLCAxMDAwLCBXZWJHTCk7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnblYgPSBTdGFnZS5BTElHTl9NSURETEU7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hbGlnbkggPSBTdGFnZS5BTElHTl9DRU5URVI7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5zY2FsZU1vZGUgPSBTdGFnZS5TQ0FMRV9TSE9XQUxMO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYmdDb2xvciA9IFwiIzIzMjYyOFwiO1xyXG4gICAgICAgIFRleHRfSW5wdXRTaW5nbGVsaW5lKCk7XHJcbiAgICAgICAgVGV4dF9JbnB1dE11bHRpbGluZSgpO1xyXG4gICAgfSkoKTtcclxuICAgIC8vIOiwg+eUqOWIm+W7uuaWh+acrOeahOWHveaVsCDlubborr7nva7lhbbkvY3nva7kuI5vdmVyZmxvd1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGV4dHMoKXtcclxuICAgICAgICB2YXIgdDEgPSBjcmVhdGVUZXh0KCk7XHJcbiAgICAgICAgdDEub3ZlcmZsb3cgPSBUZXh0LlZJU0lCTEU7XHJcbiAgICAgICAgdDEucG9zKDEwLCAxMCk7XHJcbiAgICAgICAgdmFyIHQyID0gY3JlYXRlVGV4dCgpO1xyXG4gICAgICAgIHQyLm92ZXJmbG93ID0gVGV4dC5TQ1JPTEw7XHJcbiAgICAgICAgdDIucG9zKDEwLCAxMTApO1xyXG4gICAgICAgIHZhciB0MyA9IGNyZWF0ZVRleHQoKTtcclxuICAgICAgICB0My5vdmVyZmxvdyA9IFRleHQuSElEREVOO1xyXG4gICAgICAgIHQzLnBvcygxMCwgMjEwKTtcclxuICAgIH1cclxuICAgIC8vIOWIm+W7uuaWh+acrOeahOWHveaVsOWMheijhVxyXG4gICAgIGZ1bmN0aW9uIGNyZWF0ZVRleHQoKXtcclxuICAgICAgICB2YXIgdHh0ID0gbmV3IFRleHQoKTtcclxuICAgICAgICB0eHQudGV4dCA9XHJcbiAgICAgICAgICAgIFwiTGF5YWJveOaYr0hUTUw15byV5pOO5oqA5pyv5o+Q5L6b5ZWG5LiO5LyY56eA55qE5ri45oiP5Y+R6KGM5ZWG77yM6Z2i5ZCRQVMvSlMvVFPlvIDlj5HogIXmj5DkvptIVE1MNeW8gOWPkeaKgOacr+aWueahiO+8gVxcblwiICtcclxuICAgICAgICAgICAgXCJMYXlhYm945pivSFRNTDXlvJXmk47mioDmnK/mj5DkvpvllYbkuI7kvJjnp4DnmoTmuLjmiI/lj5HooYzllYbvvIzpnaLlkJFBUy9KUy9UU+W8gOWPkeiAheaPkOS+m0hUTUw15byA5Y+R5oqA5pyv5pa55qGI77yBXFxuXCIgK1xyXG4gICAgICAgICAgICBcIkxheWFib3jmmK9IVE1MNeW8leaTjuaKgOacr+aPkOS+m+WVhuS4juS8mOengOeahOa4uOaIj+WPkeihjOWVhu+8jOmdouWQkUFTL0pTL1RT5byA5Y+R6ICF5o+Q5L6bSFRNTDXlvIDlj5HmioDmnK/mlrnmoYjvvIFcIjtcclxuICAgICAgICB0eHQuYm9yZGVyQ29sb3IgPSBcIiNGRkZGMDBcIjtcclxuICAgICAgICB0eHQuc2l6ZSgzMDAsIDUwKTtcclxuICAgICAgICB0eHQuZm9udFNpemUgPSAyMDtcclxuICAgICAgICB0eHQuY29sb3IgPSBcIiNmZmZmZmZcIjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHR4dCk7XHJcbiAgICAgICAgcmV0dXJuIHR4dDtcclxuICAgIH1cclxuICAgIC8v5Y2V6KGM6L6T5YWlaW5wdXRcclxuICAgIGZ1bmN0aW9uIFRleHRfSW5wdXRTaW5nbGVsaW5lKCl7XHJcbiAgICAgICAgdmFyIHRleHRJbnB1dCA9IG5ldyBMYXlhLlRleHRJbnB1dChcIuWNleihjOi+k+WFpVwiKTsvL+WIm+W7uuS4gOS4qiBUZXh0SW5wdXQg57G755qE5a6e5L6L5a+56LGhIHRleHRJbnB1dCDjgIJcclxuICAgICAgICB0ZXh0SW5wdXQud29yZFdyYXAgPSB0cnVlOy8v6K6+572uIHRleHRJbnB1dCDnmoTmlofmnKzoh6rliqjmjaLooYzjgIJcclxuICAgICAgICB0ZXh0SW5wdXQuZm9udFNpemUgPSAzMDsvL+iuvue9riB0ZXh0SW5wdXQg55qE5a2X5L2T5aSn5bCP44CCXHJcbiAgICAgICAgdGV4dElucHV0LnggPSAwOy8v6K6+572uIHRleHRJbnB1dCDlr7nosaHnmoTlsZ7mgKcgeCDnmoTlgLzvvIznlKjkuo7mjqfliLYgdGV4dElucHV0IOWvueixoeeahOaYvuekuuS9jee9ruOAglxyXG4gICAgICAgIHRleHRJbnB1dC55ID0gMDsvL+iuvue9riB0ZXh0SW5wdXQg5a+56LGh55qE5bGe5oCnIHkg55qE5YC877yM55So5LqO5o6n5Yi2IHRleHRJbnB1dCDlr7nosaHnmoTmmL7npLrkvY3nva7jgIJcclxuICAgICAgICB0ZXh0SW5wdXQud2lkdGggPSAzMDA7Ly/orr7nva4gdGV4dElucHV0IOeahOWuveW6puOAglxyXG4gICAgICAgIHRleHRJbnB1dC5oZWlnaHQgPSAyMDA7Ly/orr7nva4gdGV4dElucHV0IOeahOmrmOW6puOAglxyXG4gICAgICAgIHRleHRJbnB1dC5iZ0NvbG9yID0gXCIjYWFiYmNjXCI7XHJcbiAgICAgICAgTGF5YS5zdGFnZS5hZGRDaGlsZCh0ZXh0SW5wdXQpOy8v5bCGIHRleHRJbnB1dCDmt7vliqDliLDmmL7npLrliJfooajjgIJcclxuICAgIH1cclxuICAgIC8v5aSa6KGM6L6T5YWlaW5wdXRcclxuICAgIGZ1bmN0aW9uIFRleHRfSW5wdXRNdWx0aWxpbmUoKXtcclxuICAgICAgICB2YXIgdGV4dElucHV0ID0gbmV3IExheWEuVGV4dElucHV0KFwi5aSa6KGM6L6T5YWlXCIpOy8v5Yib5bu65LiA5LiqIFRleHRJbnB1dCDnsbvnmoTlrp7kvovlr7nosaEgdGV4dElucHV0IOOAglxyXG4gICAgICAgIHRleHRJbnB1dC5mb250U2l6ZSA9IDMwOy8v6K6+572uIHRleHRJbnB1dCDnmoTlrZfkvZPlpKflsI/jgIJcclxuICAgICAgICB0ZXh0SW5wdXQud29yZFdyYXAgPSB0cnVlOy8v6K6+572uIHRleHRJbnB1dCDnmoTmlofmnKzoh6rliqjmjaLooYzjgIJcclxuICAgICAgICB0ZXh0SW5wdXQubXVsdGlsaW5lID0gdHJ1ZTsvL+iuvue9rnRleHRJbnB1dOeahOWkmuihjOi+k+WFpVxyXG4gICAgICAgIHRleHRJbnB1dC54ID0gMDsvL+iuvue9riB0ZXh0SW5wdXQg5a+56LGh55qE5bGe5oCnIHgg55qE5YC877yM55So5LqO5o6n5Yi2IHRleHRJbnB1dCDlr7nosaHnmoTmmL7npLrkvY3nva7jgIJcclxuICAgICAgICB0ZXh0SW5wdXQueSA9IDMwMC8v6K6+572uIHRleHRJbnB1dCDlr7nosaHnmoTlsZ7mgKcgeSDnmoTlgLzvvIznlKjkuo7mjqfliLYgdGV4dElucHV0IOWvueixoeeahOaYvuekuuS9jee9ruOAglxyXG4gICAgICAgIHRleHRJbnB1dC53aWR0aCA9IDMwMDsvL+iuvue9riB0ZXh0SW5wdXQg55qE5a695bqm44CCXHJcbiAgICAgICAgdGV4dElucHV0LmhlaWdodCA9IDIwMDsvL+iuvue9riB0ZXh0SW5wdXQg55qE6auY5bqm44CCXHJcbiAgICAgICAgdGV4dElucHV0LmJnQ29sb3IgPSBcIiNhYWJiY2NcIjtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHRleHRJbnB1dCk7Ly/lsIYgdGV4dElucHV0IOa3u+WKoOWIsOaYvuekuuWIl+ihqOOAglxyXG4gICAgfVxyXG59KSgpIl19
