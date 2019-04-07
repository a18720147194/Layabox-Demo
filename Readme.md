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