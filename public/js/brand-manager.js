$("#addBrandBtn").click(function(){
    $("#addbrandBox").fadeIn();
});
$(".cancleBrand").click(function(){
    $("#addbrandBox").fadeOut();
});

//高亮
$(function(){
    var ustr = location.href.split("0/")[1].split("-")[0];
      console.log(ustr);
    if(ustr == "user"){
        $(".item1").css("background","#67E8CB")
    }else if(ustr == "mobile"){
        $(".item2").css("background","#67E8CB")
    }else if(ustr == "brand"){
      $(".item3").css("background","#67E8CB")
    }else if(ustr.split("/")[0]== "users"){
      $(".item1").css("background","#67E8CB")
    }
    
})