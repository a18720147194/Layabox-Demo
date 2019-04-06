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

//创建舞台，默认背景色是黑色的
Laya.init(600, 300);
var txt = new Laya.Text();
//设置文本内容
txt.text = "Hello Layabox";
//设置文本颜色
txt.color = "#FF0000";
//设置文本字体大小，单位是像素
txt.fontSize = 66;
//设置字体描边
txt.stroke = 5; //描边为5像素
txt.strokeColor = "#FFFFFF";
//设置为粗体
txt.bold = true;
//设置文本的显示起点位置X,Y
txt.pos(60, 100);
//设置舞台背景色
Laya.stage.bgColor = '#23238E';
//将文本内容添加到舞台 
Laya.stage.addChild(txt);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXJJREVfYmV0YS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSGVsbG9MYXlhYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBO0FBQ0EsS0FBSyxJQUFMLENBQVUsR0FBVixFQUFlLEdBQWY7QUFDQSxJQUFJLE1BQU0sSUFBSSxLQUFLLElBQVQsRUFBVjtBQUNBO0FBQ0EsSUFBSSxJQUFKLEdBQVcsZUFBWDtBQUNBO0FBQ0EsSUFBSSxLQUFKLEdBQVksU0FBWjtBQUNBO0FBQ0EsSUFBSSxRQUFKLEdBQWtCLEVBQWxCO0FBQ0E7QUFDQSxJQUFJLE1BQUosR0FBYSxDQUFiLEMsQ0FBZTtBQUNmLElBQUksV0FBSixHQUFrQixTQUFsQjtBQUNBO0FBQ0EsSUFBSSxJQUFKLEdBQVcsSUFBWDtBQUNBO0FBQ0EsSUFBSSxHQUFKLENBQVEsRUFBUixFQUFXLEdBQVg7QUFDQTtBQUNBLEtBQUssS0FBTCxDQUFXLE9BQVgsR0FBc0IsU0FBdEI7QUFDQTtBQUNBLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsR0FBcEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy/liJvlu7roiJ7lj7DvvIzpu5jorqTog4zmma/oibLmmK/pu5HoibLnmoRcclxuTGF5YS5pbml0KDYwMCwgMzAwKTsgXHJcbnZhciB0eHQgPSBuZXcgTGF5YS5UZXh0KCk7IFxyXG4vL+iuvue9ruaWh+acrOWGheWuuVxyXG50eHQudGV4dCA9IFwiSGVsbG8gTGF5YWJveFwiOyAgXHJcbi8v6K6+572u5paH5pys6aKc6ImyXHJcbnR4dC5jb2xvciA9IFwiI0ZGMDAwMFwiO1xyXG4vL+iuvue9ruaWh+acrOWtl+S9k+Wkp+Wwj++8jOWNleS9jeaYr+WDj+e0oFxyXG50eHQuZm9udFNpemUgICAgPSA2NjsgIFxyXG4vL+iuvue9ruWtl+S9k+aPj+i+uVxyXG50eHQuc3Ryb2tlID0gNTsvL+aPj+i+ueS4ujXlg4/ntKBcclxudHh0LnN0cm9rZUNvbG9yID0gXCIjRkZGRkZGXCI7ICBcclxuLy/orr7nva7kuLrnspfkvZNcclxudHh0LmJvbGQgPSB0cnVlOyAgXHJcbi8v6K6+572u5paH5pys55qE5pi+56S66LW354K55L2N572uWCxZXHJcbnR4dC5wb3MoNjAsMTAwKTsgIFxyXG4vL+iuvue9ruiInuWPsOiDjOaZr+iJslxyXG5MYXlhLnN0YWdlLmJnQ29sb3IgID0gJyMyMzIzOEUnOyAgXHJcbi8v5bCG5paH5pys5YaF5a655re75Yqg5Yiw6Iie5Y+wIFxyXG5MYXlhLnN0YWdlLmFkZENoaWxkKHR4dCk7Il19
