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


//高亮
$(function(){
    var userhh = location.href.split("0/")[1].split("-")[0];
      console.log(ustr);
    if(userhh == "user"){
        $(".usercontrol").css("background","#67E8CB")
    }else if(userhh == "mobile"){
        $(".mobilecontrol").css("background","#67E8CB")
    }else if(userhh == "brand"){
      $(".logocontrol").css("background","#67E8CB")
    }else if(userhh.split("/")[0]== "users"){
      $(".usercontrol").css("background","#67E8CB")
    }
    
})