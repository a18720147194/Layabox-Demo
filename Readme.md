## **update detail**

### **1. Hello** Layabox

​	修改.laya/compile下配置main入口文件

​	新文件内：

​		创建舞台(stage)，文本；设置文本颜色，内容，字体大小，描边，起点位置；将文本添加到舞台

### 2.Text 

​	文本自动换行与对齐方式等基础样式

​	超出文本区域的处理overflow：（hidden，visible，scroll）

​	TextInput 单行输入，通过设置multiline为true开启多行输入

### 3.位图

​	有loadImage、drawTexture两种方法显示图片

​	通过mask属性，即可实现遮罩效果

​	位图设置颜色滤镜，需要先设置一个颜色矩阵，然后用ColorFilter方法创建一个颜色滤镜实例

​	发光滤镜类 GlowFilter位于laya.filters包中，通过调整发光的偏移角度也可以当成阴影滤使用。注意：该滤镜	只支持WebGL模式下有效

​	模糊滤镜的设置，创建一个模糊滤镜实例，然后设置模糊强度，叠加给位图

### 4.矢量图

​	drawLine()用于绘制矢量直线，折线使用drawLines()方法

​	1.一次贝塞尔曲线

​	![1.gif](https://official.layabox.com/laya_data/LayaAir2.0/Chinese/LayaAir_JS/2D/beginners/Graphics/Curve/gif/1.gif)

​	2.二次贝塞尔曲线

​	![2.gif](https://official.layabox.com/laya_data/LayaAir2.0/Chinese/LayaAir_JS/2D/beginners/Graphics/Curve/gif/2.gif)

​	3.三次贝塞尔曲线

​	![3.gif](https://official.layabox.com/laya_data/LayaAir2.0/Chinese/LayaAir_JS/2D/beginners/Graphics/Curve/gif/3.gif)

​	4.四次贝塞尔曲线

​	![5.gif](https://official.layabox.com/laya_data/LayaAir2.0/Chinese/LayaAir_JS/2D/beginners/Graphics/Curve/gif/5.gif)

​	LayaAir引擎的曲线绘制采用的是二次贝塞尔曲线

​	laya.display.Graphics类的“drawCurves();”曲线绘制方法

​	绘制多边形使用laya.display.Graphics类的“drawpoly();”方法

​	绘制圆形使用laya.display.Graphics的“drawCircle();”方法，扇形则是drawPie()

​	”drawRect();”方法用于绘制矢量矩形或者drawPath()方法

​	LayaAir引擎中可以使用graphics的drwaPath方法绘制圆角或弧线，具体的操作需要三步，指定绘制路径的起始点["moveTo", x, y]、绘制一条水平直线["lineTo", x, y]绘制弧线["arcTo", p1.x, p1.y, p2.x, p2.y, r]

​	初始化舞台前Laya.Config.isAntialias=true;开启锯齿消除设置，开启这个设置后是会增加性能的消耗