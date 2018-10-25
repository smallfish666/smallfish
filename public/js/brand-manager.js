$("#addBrandBtn").click(function(){
    $("#addbrandBox").fadeIn();
});
$(".cancleBrand").click(function(){
    $("#addbrandBox").fadeOut();
});

//highlighting
$(function(){
    var ustr = location.href.split("0/")[1].split("-")[0];
      console.log(ustr);
    if(ustr == "user"){
        $(".usercontrol").css("color","brown")
    }else if(ustr == "mobile"){
        $(".mobilecontrol").css("color","brown")
    }else if(ustr == "brand"){
      $(".logocontrol").css("color","brown")
    }else if(ustr.split("/")[0]== "users"){
      $(".usercontrol").css("color","brown")
    }
    console.log(location.href)
})