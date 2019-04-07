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
    var Sprite = Laya.Sprite;
    var Stage = Laya.Stage;
    (function () {
        //初始化舞台
        Laya.init(1136, 640);
        drawSomething1();
        drawSomething2();
        drawSomething3();
    })();
    function drawSomething1() {
        var sp = new Sprite();
        Laya.stage.addChild(sp);
        //画矩形
        sp.graphics.drawRect(20, 20, 100, 50, "#ffff00");
    }
    function drawSomething2() {
        var sp = new Sprite();
        Laya.stage.addChild(sp);
        //自定义路径
        var path = [["moveTo", 0, 0], //画笔移到A点
        ["lineTo", 100, 0], //画到B点
        ["lineTo", 100, 50], //再画到C点
        ["lineTo", 0, 50], //继续画到D点
        ["closePath"] //闭合路径
        ];
        //绘制矩形
        sp.graphics.drawPath(20, 120, path, { fillStyle: "#ff0000" });
    }
    function drawSomething3() {
        var sp = new Sprite();
        Laya.stage.addChild(sp);
        //自定义路径
        var path = [["moveTo", 30, 0], //画笔的起始点，
        ["arcTo", 500, 0, 500, 30, 30], //p1（500,0）为夹角B，（500,30）为端点p2
        ["arcTo", 500, 300, 470, 300, 30], //p1（500,300）为夹角C，（470,300）为端点p2
        ["arcTo", 0, 300, 0, 270, 30], //p1(0,300)为夹角D，（0,270）为端点p2
        ["arcTo", 0, 0, 30, 0, 30]];
        //绘制圆角矩形
        sp.graphics.drawPath(150, 100, path, { fillStyle: "#ff0000" });
    }
})();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6L0xheWFBaXJJREVfYmV0YS9yZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JhcGhpY3MvcmVjdGFuZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1ZBLENBQUMsWUFDRDtBQUNJLFFBQUksU0FBUyxLQUFLLE1BQWxCO0FBQ0EsUUFBSSxRQUFTLEtBQUssS0FBbEI7QUFDQSxLQUFDLFlBQ0Q7QUFDSTtBQUNBLGFBQUssSUFBTCxDQUFVLElBQVYsRUFBZ0IsR0FBaEI7QUFDQTtBQUNBO0FBQ0E7QUFDSCxLQVBEO0FBUUEsYUFBUyxjQUFULEdBQ0E7QUFDSSxZQUFJLEtBQUssSUFBSSxNQUFKLEVBQVQ7QUFDQSxhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEVBQXBCO0FBQ0E7QUFDQSxXQUFHLFFBQUgsQ0FBWSxRQUFaLENBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLEVBQTZCLEdBQTdCLEVBQWtDLEVBQWxDLEVBQXNDLFNBQXRDO0FBQ0Y7QUFDRCxhQUFTLGNBQVQsR0FDRDtBQUNJLFlBQUksS0FBSyxJQUFJLE1BQUosRUFBVDtBQUNBLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsRUFBcEI7QUFDQTtBQUNBLFlBQUksT0FBUSxDQUNSLENBQUMsUUFBRCxFQUFXLENBQVgsRUFBYyxDQUFkLENBRFEsRUFDVTtBQUNsQixTQUFDLFFBQUQsRUFBVyxHQUFYLEVBQWdCLENBQWhCLENBRlEsRUFFVztBQUNuQixTQUFDLFFBQUQsRUFBVyxHQUFYLEVBQWdCLEVBQWhCLENBSFEsRUFHWTtBQUNwQixTQUFDLFFBQUQsRUFBVyxDQUFYLEVBQWMsRUFBZCxDQUpRLEVBSVc7QUFDbkIsU0FBQyxXQUFELENBTFEsQ0FLTTtBQUxOLFNBQVo7QUFPSTtBQUNKLFdBQUcsUUFBSCxDQUFZLFFBQVosQ0FBcUIsRUFBckIsRUFBeUIsR0FBekIsRUFBOEIsSUFBOUIsRUFBb0MsRUFBQyxXQUFXLFNBQVosRUFBcEM7QUFDRjtBQUNELGFBQVMsY0FBVCxHQUNEO0FBQ0ksWUFBSSxLQUFLLElBQUksTUFBSixFQUFUO0FBQ0EsYUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixFQUFwQjtBQUNBO0FBQ0EsWUFBSSxPQUFRLENBQ0osQ0FBQyxRQUFELEVBQVcsRUFBWCxFQUFlLENBQWYsQ0FESSxFQUNlO0FBQ25CLFNBQUMsT0FBRCxFQUFVLEdBQVYsRUFBZSxDQUFmLEVBQWtCLEdBQWxCLEVBQXVCLEVBQXZCLEVBQTJCLEVBQTNCLENBRkksRUFFNEI7QUFDaEMsU0FBQyxPQUFELEVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsRUFBOEIsRUFBOUIsQ0FISSxFQUc4QjtBQUNsQyxTQUFDLE9BQUQsRUFBVSxDQUFWLEVBQWEsR0FBYixFQUFrQixDQUFsQixFQUFxQixHQUFyQixFQUEwQixFQUExQixDQUpJLEVBSTJCO0FBQy9CLFNBQUMsT0FBRCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLENBQXBCLEVBQXVCLEVBQXZCLENBTEksQ0FBWjtBQU9JO0FBQ0osV0FBRyxRQUFILENBQVksUUFBWixDQUFxQixHQUFyQixFQUEwQixHQUExQixFQUErQixJQUEvQixFQUFxQyxFQUFDLFdBQVcsU0FBWixFQUFyQztBQUNGO0FBQ0wsQ0FqREQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG4oZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiKGZ1bmN0aW9uKClcclxue1xyXG4gICAgdmFyIFNwcml0ZSA9IExheWEuU3ByaXRlO1xyXG4gICAgdmFyIFN0YWdlICA9IExheWEuU3RhZ2U7XHJcbiAgICAoZnVuY3Rpb24oKVxyXG4gICAge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW6Iie5Y+wXHJcbiAgICAgICAgTGF5YS5pbml0KDExMzYsIDY0MCk7XHJcbiAgICAgICAgZHJhd1NvbWV0aGluZzEoKTtcclxuICAgICAgICBkcmF3U29tZXRoaW5nMigpO1xyXG4gICAgICAgIGRyYXdTb21ldGhpbmczKCk7XHJcbiAgICB9KSgpO1xyXG4gICAgZnVuY3Rpb24gZHJhd1NvbWV0aGluZzEoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBzcCA9IG5ldyBTcHJpdGUoKTtcclxuICAgICAgICBMYXlhLnN0YWdlLmFkZENoaWxkKHNwKTtcclxuICAgICAgICAvL+eUu+efqeW9olxyXG4gICAgICAgIHNwLmdyYXBoaWNzLmRyYXdSZWN0KDIwLCAyMCwgMTAwLCA1MCwgXCIjZmZmZjAwXCIpO1xyXG4gICAgIH1cclxuICAgICBmdW5jdGlvbiBkcmF3U29tZXRoaW5nMigpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHNwID0gbmV3IFNwcml0ZSgpO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQoc3ApO1xyXG4gICAgICAgIC8v6Ieq5a6a5LmJ6Lev5b6EXHJcbiAgICAgICAgdmFyIHBhdGggPSAgW1xyXG4gICAgICAgICAgICBbXCJtb3ZlVG9cIiwgMCwgMF0sIC8v55S756yU56e75YiwQeeCuVxyXG4gICAgICAgICAgICBbXCJsaW5lVG9cIiwgMTAwLCAwXSwvL+eUu+WIsELngrlcclxuICAgICAgICAgICAgW1wibGluZVRvXCIsIDEwMCwgNTBdLC8v5YaN55S75YiwQ+eCuVxyXG4gICAgICAgICAgICBbXCJsaW5lVG9cIiwgMCwgNTBdLCAvL+e7p+e7reeUu+WIsETngrlcclxuICAgICAgICAgICAgW1wiY2xvc2VQYXRoXCJdIC8v6Zet5ZCI6Lev5b6EXHJcbiAgICAgICAgXTtcclxuICAgICAgICAgICAgLy/nu5jliLbnn6nlvaJcclxuICAgICAgICBzcC5ncmFwaGljcy5kcmF3UGF0aCgyMCwgMTIwLCBwYXRoLCB7ZmlsbFN0eWxlOiBcIiNmZjAwMDBcIn0pO1xyXG4gICAgIH1cclxuICAgICBmdW5jdGlvbiBkcmF3U29tZXRoaW5nMygpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHNwID0gbmV3IFNwcml0ZSgpO1xyXG4gICAgICAgIExheWEuc3RhZ2UuYWRkQ2hpbGQoc3ApO1xyXG4gICAgICAgIC8v6Ieq5a6a5LmJ6Lev5b6EXHJcbiAgICAgICAgdmFyIHBhdGggPSAgW1xyXG4gICAgICAgICAgICAgICAgW1wibW92ZVRvXCIsIDMwLCAwXSwgLy/nlLvnrJTnmoTotbflp4vngrnvvIxcclxuICAgICAgICAgICAgICAgIFtcImFyY1RvXCIsIDUwMCwgMCwgNTAwLCAzMCwgMzBdLCAvL3Ax77yINTAwLDDvvInkuLrlpLnop5JC77yM77yINTAwLDMw77yJ5Li656uv54K5cDJcclxuICAgICAgICAgICAgICAgIFtcImFyY1RvXCIsIDUwMCwgMzAwLCA0NzAsIDMwMCwgMzBdLC8vcDHvvIg1MDAsMzAw77yJ5Li65aS56KeSQ++8jO+8iDQ3MCwzMDDvvInkuLrnq6/ngrlwMlxyXG4gICAgICAgICAgICAgICAgW1wiYXJjVG9cIiwgMCwgMzAwLCAwLCAyNzAsIDMwXSwgLy9wMSgwLDMwMCnkuLrlpLnop5JE77yM77yIMCwyNzDvvInkuLrnq6/ngrlwMlxyXG4gICAgICAgICAgICAgICAgW1wiYXJjVG9cIiwgMCwgMCwgMzAsIDAsIDMwXSwvL3AxKDAsMCnkuLrlpLnop5JB77yM77yIMzAsMO+8ieS4uuerr+eCuXAyXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIC8v57uY5Yi25ZyG6KeS55+p5b2iXHJcbiAgICAgICAgc3AuZ3JhcGhpY3MuZHJhd1BhdGgoMTUwLCAxMDAsIHBhdGgsIHtmaWxsU3R5bGU6IFwiI2ZmMDAwMFwifSk7XHJcbiAgICAgfVxyXG59KSgpOyJdfQ==
