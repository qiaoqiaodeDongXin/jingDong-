$("form").submit(function(event){
	// 阻止默认事件
	event.preventDefault();

	// 获取表单数据,拼接成字符串(不是formdata格式)
	var data = $(this).serialize();

    // 发送登录请求
    $.post("/user/login",data,function(resData){
    	$(".modal-body").text(resData.msg);
	    $("#myModal").modal("show").on("hide.bs.modal",function(){
	    	if (resData.code == 1){
	    		// 注册成功之后跳转到index页面否则还留在本页面继续登录
	    		location.href = "/JD.html";
	    	}
	    });
    });
});