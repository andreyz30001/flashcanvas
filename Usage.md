# Installation #

## Include _flashcanvas.js_ ##

FlashCanvas consists of JavaScript, Flash and PHP files:

  * _flashcanvas.js_
  * _flashcanvas.swf_
  * _canvas2png.js_ (optional)
  * _proxy.php_ (optional)
  * _save.php_ (optional)

These files can be found in the bin directory in the distribution package.
To install FlashCanvas, copy these files into some directory on a Web server,
and then add the following HTML code between `<head>` and `</head>` tags on your web page.

```
<!--[if lt IE 9]>
<script type="text/javascript" src="path/to/flashcanvas.js"></script>
<![endif]-->
```

At the same time, you should check that your site is in IE9 standards
mode when viewed with IE9. In other document modes, IE9 cannot display
canvas elements. If you don't know how to configure the document mode,
you should read
[this article](http://blogs.msdn.com/b/ie/archive/2010/09/08/debugging-common-canvas-issues.aspx)
posted on IEBlog.


## Initialize Canvas elements ##

When _flashcanvas.js_ is loaded, it automatically initializes canvas elements in the HTML document.
But in the following cases, you need to manually initialize the element by calling FlashCanvas.initElement() method.

  * If you create a canvas element dynamically using document.createElement("canvas").
  * If you use a canvas element before window.onload event is fired.

To make the code cross-browser, you should also check the existence of FlashCanvas object.
Here is a sample code:

```
var canvas = document.createElement("canvas");
document.getElementById("target").appendChild(canvas);
if (typeof FlashCanvas != "undefined") {
    FlashCanvas.initElement(canvas);
}
```


# Use FlashCanvas instead of ExplorerCanvas #

Some existing canvas applications such as
[Flot](http://code.google.com/p/flot/)
and
[JavaScript InfoVis Toolkit](http://thejit.org/)
utilize
[ExplorerCanvas](http://code.google.com/p/explorercanvas/)
library to support Internet Explorer.
To ensure the compatibility with ExplorerCanvas, FlashCanvas also
implements the G\_vmlCanvasManager object and its methods. Therefore,
if you load _flashcanvas.js_ instead of _excanvas.js_, most of those
applications will work without modifying your code.


# Save a canvas image #

When you need to save a canvas image as an image file,
[Canvas2Image](http://www.nihilogic.dk/labs/canvas2image/)
library is a commonly-used solution. Unfortunately, however, this
library does not work well with some browsers such as Internet Explorer.

As an alternative and cross-browser solution, we prepared _canvas2png.js_
script that works with all major browsers. This script saves a canvas
image as a PNG file with the help of _save.php_ script. _canvas2png.js_
provides only one function, canvas2png(), that takes an
HTMLCanvasElement as an argument and can be used in the following way.

```
var canvas = document.getElementById("mycanvas");
canvss2png(canvas);
```

And it is also possible for FlashCanvas users to save a canvas image
from the right-click menu.


# Load images from other domain #

FlashCanvas uses
[flash.display.Loader.load()](http://livedocs.adobe.com/flash/9.0/ActionScriptLangRefV3/flash/display/Loader.html#load%28%29)
method to load images, but this method has a restriction that it cannot
load images from other domain. To avoid this problem, we prepared
_proxy.php_, a PHP script that proxies a request to other domains.
This script is automatically called from FlashCanvas when you load an
image from other domain. To make the PHP script work, you must enable
cURL extension or allow\_url\_fopen option of PHP.


# Load _flashcanvas.js_ asynchronously #

We do recommend that you load _flashcanvas.js_ as early as you can in the
`<head>` tags. But it is possible to load _flashcanvas.js_ using Ajax if
you write your code carefully.

  * You must ensure that document.createElement("canvas") is executed before any canvas element appears. Normally, this code is automatically executed within _flashcanvas.js_. But if _flashcanvas.js_ will be loaded late, you should execute this HTML5 shiv manually.
  * You should set the location of the SWF files by using the swfPath option because an automatic detection of the URL will fail in that case.

Here is a sample code.

```
document.createElement("canvas");
window.FlashCanvasOptions = {
    swfPath: "http://example.com/js/"
};
jQuery.getScript("flashcanvas.js", function(){
    ......
});
```