;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-remind" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M0 435.309237 0 610.024096C0 645.308043 28.657739 674 63.838605 674L228.9009 674 213.800267 667.735906 469.201726 923.669451C499.273171 953.803546 535.639639 938.646511 535.639639 895.975706L535.639639 149.357629C535.639639 106.839052 499.309939 91.492944 469.201726 121.663883L213.800267 377.597427 228.9009 371.333333 63.838605 371.333333C28.573201 371.333333 0 400.011223 0 435.309237ZM228.9009 414 237.750464 414 244.001534 407.735906 499.402993 151.802362C501.578012 149.62281 503.223142 148.452401 503.936853 148.166441 502.587712 148.706997 500.074389 148.808867 497.235991 147.609892 494.446571 146.431607 492.826063 144.636013 492.299426 143.387549 492.628553 144.167789 492.972973 146.225184 492.972973 149.357629L492.972973 895.975706C492.972973 899.146332 492.625939 901.221845 492.296619 902.001423 492.834735 900.727578 494.485777 898.907403 497.311223 897.729796 500.154871 896.544602 502.647469 896.657431 503.972905 897.192945 503.239477 896.896619 501.582121 895.714639 499.402993 893.530972L244.001534 637.597427 237.750464 631.333333 228.9009 631.333333 63.838605 631.333333C52.233293 631.333333 42.666667 621.755283 42.666667 610.024096L42.666667 435.309237C42.666667 423.540514 52.172352 414 63.838605 414L228.9009 414Z"  ></path>'+
      ''+
      '<path d="M821.045045 535.666667C821.045045 416.514537 730.531159 319.333333 618.090091 319.333333 606.308015 319.333333 596.756757 328.884593 596.756757 340.666667 596.756757 352.44874 606.308015 362 618.090091 362 706.262724 362 778.378379 439.427744 778.378379 535.666667 778.378379 631.905589 706.262724 709.333333 618.090091 709.333333 606.308015 709.333333 596.756757 718.884593 596.756757 730.666667 596.756757 742.44874 606.308015 752 618.090091 752 730.531159 752 821.045045 654.818797 821.045045 535.666667Z"  ></path>'+
      ''+
      '<path d="M1002.666667 527.293033C1002.666667 369.877487 905.044211 229.428404 756.28896 165.086453 745.475106 160.409076 732.916983 165.383673 728.239605 176.197526 723.562229 187.011379 728.536826 199.569503 739.350679 204.24688 872.873312 262.000181 960 387.349039 960 527.293033 960 660.177203 881.48423 780.22717 758.227616 841.567753 747.679578 846.81715 743.384179 859.623501 748.633577 870.171539 753.882974 880.719578 766.689325 885.014976 777.237363 879.765581 914.638133 811.385935 1002.666667 676.791034 1002.666667 527.293033Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-remind-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M0 435.309237 0 610.024096C0 645.308043 28.657739 674 63.838605 674L228.9009 674 213.800267 667.735906 469.201726 923.669451C499.273171 953.803546 535.639639 938.646511 535.639639 895.975706L535.639639 149.357629C535.639639 106.839052 499.309939 91.492944 469.201726 121.663883L213.800267 377.597427 228.9009 371.333333 63.838605 371.333333C28.573201 371.333333 0 400.011223 0 435.309237ZM228.9009 414 237.750464 414 244.001534 407.735906 499.402993 151.802362C501.578012 149.62281 503.223142 148.452401 503.936853 148.166441 502.587712 148.706997 500.074389 148.808867 497.235991 147.609892 494.446571 146.431607 492.826063 144.636013 492.299426 143.387549 492.628553 144.167789 492.972973 146.225184 492.972973 149.357629L492.972973 895.975706C492.972973 899.146332 492.625939 901.221845 492.296619 902.001423 492.834735 900.727578 494.485777 898.907403 497.311223 897.729796 500.154871 896.544602 502.647469 896.657431 503.972905 897.192945 503.239477 896.896619 501.582121 895.714639 499.402993 893.530972L244.001534 637.597427 237.750464 631.333333 228.9009 631.333333 63.838605 631.333333C52.233293 631.333333 42.666667 621.755283 42.666667 610.024096L42.666667 435.309237C42.666667 423.540514 52.172352 414 63.838605 414L228.9009 414Z"  ></path>'+
      ''+
      '<path d="M821.045045 535.666667C821.045045 416.514537 730.531159 319.333333 618.090091 319.333333 606.308015 319.333333 596.756757 328.884593 596.756757 340.666667 596.756757 352.44874 606.308015 362 618.090091 362 706.262724 362 778.378379 439.427744 778.378379 535.666667 778.378379 631.905589 706.262724 709.333333 618.090091 709.333333 606.308015 709.333333 596.756757 718.884593 596.756757 730.666667 596.756757 742.44874 606.308015 752 618.090091 752 730.531159 752 821.045045 654.818797 821.045045 535.666667Z"  ></path>'+
      ''+
      '<path d="M1002.666667 527.293033C1002.666667 369.877487 905.044211 229.428404 756.28896 165.086453 745.475106 160.409076 732.916983 165.383673 728.239605 176.197526 723.562229 187.011379 728.536826 199.569503 739.350679 204.24688 872.873312 262.000181 960 387.349039 960 527.293033 960 660.177203 881.48423 780.22717 758.227616 841.567753 747.679578 846.81715 743.384179 859.623501 748.633577 870.171539 753.882974 880.719578 766.689325 885.014976 777.237363 879.765581 914.638133 811.385935 1002.666667 676.791034 1002.666667 527.293033Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)