$(document).ready(function () {

  $('#typeahead').autoComplete({
    source: function(term, response){
      $.getJSON('http://58dianli.com/api/icp/find-address', { address: encodeURI(term)}, function(data){ response(data); });
    }
  });
  $('#fullpage').fullpage();
//   console.log("here");
//
//   var scrolling = false;
//
//   var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
//   window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
//     if (scrolling) {
//       return
//     }
//     scrolling = true
//
//     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
//     if (st > lastScrollTop){
//       // downscroll code
//     } else {
//       // upscroll code
//     }
//     $("body").scrollTo($('.step').eq(i), {duration: 500, onAfter: function () {
//       scrolling = false
//
//     }});
//
//     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//   }, false);
});
