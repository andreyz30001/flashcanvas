# Security advisory #

FlashCanvas-20131211 fixed a security vulnerability
that had existed in the proxy script (CVE-2013-6880),
and thus it is highly recommended to update your files.

Even if you're not using the proxy script,
it is necessary to update or REMOVE the script.
If the old proxy script exists on your server,
that may cause a security problem.


# Description #

FlashCanvas is a JavaScript library which adds the HTML5 Canvas support to Internet Explorer.
It renders shapes and images via Flash drawing API,
and in many cases, runs faster than other similar libraries which use VML or Silverlight.

If you need a more sophisticated version of FlashCanvas,
FlashCanvas Pro, that supports almost all Canvas APIs, is also available.
For more information about FlashCanvas Pro,
please visit [FlashCanvas website](http://flashcanvas.net/).


# Requirements #

  * Microsoft Internet Explorer
  * Adobe Flash Player 9 or later


# Usage #

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

That's all you have to do in most cases.
More detailed usage is described in the [Usage](Usage.md) page.


# Examples #

You can see some examples of FlashCanvas at the [Examples](Examples.md) page.
If you would like to see more examples,
please visit [FlashCanvas website](http://flashcanvas.net/).
There, you can see more Canvas applications and games working with FlashCanvas.