/**
 * Lets add some dom logger - just for fun
 *
 * @author Tchernopyatov A.V
 * @version 1.1, 07/26/2018
 */
(function(window){
  "use strict";
  var debug = document.getElementById("debug");
  var domLogger = {};
  domLogger.appendDiv =  function(text) {
    var div = document.createElement("div");
    var textNode = document.createTextNode(text);
    div.appendChild(textNode);
    debug.appendChild(div);
  };
  window.domLogger = domLogger;
})(window);
