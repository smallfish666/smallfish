$("#addMobileBtn").click(function(){
    $("#addBox").fadeIn();
});
$(".cancleBrand").click(function(){
    $("#addBox").fadeOut();
});

$(".updateMobileBtn").click(function(){
    $("#updateMobileBox").fadeIn();
    $(".adduser").val($(this).parents("tr").children(".auser").text().trim());
    $(".addbrand").val($(this).parents("tr").children(".abrand").text().trim());
    $(".unaddprice").val($(this).parents("tr").children(".aprice").text().trim());
    $(".addprice").val($(this).parents("tr").children(".uaprice").text().trim());
});
$(".cancleMobile").click(function(){
    $("#updateMobileBox").fadeOut();
});

//highlighting
$(function(){
    var ustr = location.href.split("0/")[1].split("-")[0];
      console.log(ustr);
    if(ustr == "user"){
        $(".usercontrol").css("color","#A19C97")
    }else if(ustr == "mobile"){
        $(".mobilecontrol").css("color","#A19C97")
    }else if(ustr == "brand"){
      $(".logocontrol").css("color","#A19C97")
    }else if(ustr.split("/")[0]== "users"){
      $(".usercontrol").css("color","#A19C97")
    }
    console.log(location.href)
})