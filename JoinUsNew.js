$(document).ready(function () {

  $('#typeahead').autoComplete({
    onSelect: function (e,term) {
      $(".simpleAddressSearch .nextButton").removeAttr("disabled");
      $(".dataAddress").text(term);
    },
    source: function(term, callback){

      var splitedParts = term.split(' ');
      if(splitedParts[1] && splitedParts[1].length >=3) {
        setTimeout(function () {
          callback(["5 the drive epsom", "6 the drive epsom", "7 the drive epsom"])
        }, 1000);
      }
      if (term.length >= 3) {
        // $.ajax({
        //   url: 'http://58dianli.com/api/icp/find-address?address='+encodeURI(term),
        //   type: 'GET',
        //   success: function(data) {console.log(data)},
        //   error: function(data) {console.log(data)},
        //   beforeSend: function (xhr) {
        //     xhr.setRequestHeader("Content-Type", "application/json");
        //     xhr.setRequestHeader("Accept", "application/json");
        //   }
        // })
        // $.getJSON('http://58dianli.com/api/icp/find-address', { address: encodeURI(term)}, function(data){
        //   console.log(data);
        //   callback(data);
        // });
      }
    }
  });


  $('#fullpage').fullpage();
  $(".nextButton").click(function () {
    $.fn.fullpage.moveSectionDown();
  })

});



$(".simpleAddressSearch .nextButton").click(function (e) {
  console.log(e);
  $(".situationWrapper").removeClass("disabledStyle");
})


$("#option1").change(function (e) {
  $(".calendarWrapper1").removeClass("hidden");
  $(".calendarWrapper2").addClass("hidden");
  $(".situationWrapper .nextButton").attr("disabled", 'true');
});

$("#option2").change(function (e) {
  $(".calendarWrapper2").removeClass("hidden");
  $(".calendarWrapper1").addClass("hidden");
  $(".situationWrapper .nextButton").attr("disabled", 'true');

});
$(".calendarWrapper1 input, .calendarWrapper2 input").change(function () {
  $(".situationWrapper .nextButton").removeAttr("disabled");
});
$(".situationWrapper .nextButton").click(function () {
  $(".planWrapper").removeClass("disabledStyle");
})
$(".planWrapper .nextButton").click(function () {
  $(".personalInfoWrapper").removeClass("disabledStyle");
})
$(".personalInfoWrapper .nextButton").click(function () {
  $(".phoneNumberWrapper").removeClass("disabledStyle");
})


$(".card").click(function (e) {
  $(".selectedCard").removeClass("selectedCard");
  $(".planWrapper .nextButton").removeAttr("disabled");
  $(this).addClass("selectedCard");

})
var minVisibleDays = Date.now() + 86400000 * 3
var maxVisibleDays = Date.now() + 86400000 * 33

$(".calendar").datepicker({
  minDate: new Date(minVisibleDays),
  maxDate: new Date(maxVisibleDays),
  language: "en",
  onSelect: function () {
    $(".situationWrapper .nextButton").removeAttr("disabled");
  },
  autoClose: true

});
$(".mainInput").change(function () {
  $(".addressLabel").addClass("forInputChange");
})
$(".saveButton").click(function () {
  $(".simpleAddressSearch .nextButton").removeAttr("disabled");
})


$(".firstName").change(function () {
  if (".firstName".length >= 3 && ".lastName".length >= 3) {
    $(".personalInfoWrapper .nextButton").removeAttr("disabled");
  }
})