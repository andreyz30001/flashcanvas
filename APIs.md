# HTML5 Canvas API #

The current version of FlashCanvas supports as much Canvas APIs as
[ExplorerCanvas](http://code.google.com/p/explorercanvas/) does;
support for more APIs will follow in the near future.

The following is a summary of FlashCanvas support status.
More easy-to-understand
[comparison table](http://flashcanvas.net/docs/canvas-api)
is provided at FlashCanvas site.


## HTMLCanvasElement ##

### Supported ###

  * width
  * height
  * getContext()
  * toDataURL()


## CanvasRenderingContext2D ##

### Supported ###

  * canvas
  * save()
  * restore()
  * scale()
  * rotate()
  * translate()
  * transform()
  * setTransform()
  * globalAlpha
  * fillStyle
  * createLinearGradient()
  * createRadialGradient()
  * lineWidth
  * lineCap
  * lineJoin
  * miterLimit
  * clearRect()
  * fillRect()
  * strokeRect()
  * beginPath()
  * closePath()
  * moveTo()
  * lineTo()
  * quadraticCurveTo()
  * bezierCurveTo()
  * arcTo()
  * rect()
  * arc()
  * fill()
  * stroke()
  * font
  * textAlign
  * textBaseline
  * measureText()

### Partially supported ###

  * strokeStyle
  * createPattern()
  * clip()
  * fillText()
  * strokeText()
  * drawImage()

### Not supported yet ###

  * globalCompositeOperation
  * shadowOffsetX
  * shadowOffsetY
  * shadowBlur
  * shadowColor
  * isPointInPath()
  * drawFocusRing()
  * createImageData()
  * getImageData()
  * putImageData()