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
  $(".nextButton").click(function (e) {
    e.preventDefault()
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
$(".forChangeInput").change(function () {
  $(this).next().addClass("forInputChange");
})
$(".saveButton").click(function () {
  $(".simpleAddressSearch .nextButton").removeAttr("disabled");
})





$(".personalInfoForm input").on("change", function () {
  // if($(".firstName").val().length >=3 &&
  //   $(".lastName").val().length >=3 &&
  //   $(".emailAddress").val().includes("@") &&
  //   $("[name=medically]:checked").length > 0 &&
  //   $(".personalInfoWrapper .form-check-input")[0].checked &&
  //   $(".personalInfoWrapper .form-check-input2")[0].checked) {
  // }

})
$(".personalInfoWrapper .nextButton").removeAttr("disabled");

$(".phoneNumberInput").keypress(function () {
  if($(this).val().length == 9) {
    $(".verificationWrapper").removeClass("hidden");
  }
})
$(".verificationButton").click(function () {
  $(".loaderWrapper").removeClass("hidden");
  setTimeout(function () {
    $(".loaderWrapper").addClass("hidden");
  }, 2000)
})