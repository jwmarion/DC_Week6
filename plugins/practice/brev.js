$(document).ready(function () {

  $.fn.reverse = function(){
    t = e.text().split();
    n = '';
    t.forEach(function(e){
      n.append(t.pop());
    });
  };
});
