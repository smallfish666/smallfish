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
