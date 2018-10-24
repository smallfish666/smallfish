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

