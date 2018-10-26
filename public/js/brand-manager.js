$("#addBrandBtn").click(function(){
    $("#addbrandBox").fadeIn();
});
$(".cancleBrand").click(function(){
    $("#addbrandBox").fadeOut();
});

$("#sub").click(function(){
    var abdval = $(".addbranduser").val();
    var fival = $(".fileimg").val();
    if(!( abdval && fival)){
        alert("请正确填写表格哦!");
        event.preventDefault();
    }

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