$("#addMobileBtn").click(function(){
    $("#addBox").fadeIn();
    //alert("表格不能为空");
});
$(".cancleBrand").click(function(){
    $("#addBox").fadeOut();
});

// $("#sub").click(function(){
//     var abuval = $(".adduser").val();
//     var adbval = $(".addbrand").val();
//     var uapval = $(".unaddprice").val();
//     var apval = $(".addprice").val();
//     if(!( abuval && adbval && uapval && apval)){
//         alert("请正确填写表格哦!");
//         event.preventDefault();
//     }

// });

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