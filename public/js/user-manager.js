$(".update").click(function(){
    $("#updateBox").fadeIn();
    $(".updateUser").val($(this).parents("tr").children(".userName").text().trim());
    $(".updateNick").val($(this).parents("tr").children(".nickName").text().trim());
    $(".updatePhone").val($(this).parents("tr").children(".phone").text().trim());
});
$(".cancle").click(function(){
    $("#updateBox").fadeOut();
});


$.post('/mobile/addbrand',function(result) {
    console.log(result.data[0].addbrand)
    var html = ''
    for(var i = 0 ; i < result.data.length;i++){
        html += `<option>${result.data[i].addbrand}</option>`
    }
    $('.selBrand').append(html);
})

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

