var usernameReg = /^\w{5,12}$/;
    $("#username").blur(function(){
        var username = $(this).val();
        if (usernameReg.test(username)){
            $(".username-error").hide();
        }else{
            $(".username-error").show();
        }
    });

    var passwordReg = /^\w{6,14}$/;
    $("#password").blur(function () {
        var password = $(this).val();
        console.log(password);
        if (passwordReg.test(password)) {
            $(".password-error").hide();
        } else {
            $(".password-error").show();
        }
    });
    $("#repeatPwd").blur(function () {
        var repeatPwd = $(this).val();
        if (repeatPwd == $("#password").val()) {
            $(".repeatPwd-error").hide();
        } else {
            $(".repeatPwd-error").show();
        }
    });

    var nicknameReg = /^\S{2}$/;
    $("#nickname").blur(function () {
        var nickname = $(this).val();
        if (nicknameReg.test(nickname)) {
            $(".nickname-error").hide();
        } else {
            $(".nickname-error").show();
        }
    });
    var phoneReg = /^1[3-9]\d{9}$/;
    $("#phone").blur(function () {
        var phone = $(this).val();
        if (phoneReg.test(phone)) {
            $(".phone-error").hide();
        } else {
            $(".phone-error").show();
        }
    });
