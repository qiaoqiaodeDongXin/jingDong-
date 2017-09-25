jQuery(document).ready(function($) {
    $("form").submit(function(event){
    	//阻止默认事件
    	event.preventDefault();
    	//判断密码和确认密码是否一致
    	var pswInputs = $("input[type=password]");
    	//pswInputs[i] 是获取jQuery对象里面的原生标签对象
    	if (pswInputs[0].value != pswInputs[1].value) {
    		//修改modal-body内容
    		$(".modal-body").text("两次密码输入不一致");
    		//弹出模态框给用户提示
    		$("#myModal").modal("show");//modal应该是bootstrap封装的方法
    		return;
    	}  
    	
    	//发送注册请求
    	//先获取数据
    	//var data = new FormData(this);//用formdata获取表单数据
    	//将表单数据编译成字符串(username=eewe&password=1111111&isMale=true&email=345%40qwe.cgn&course=VR)
    	var data = $(this).serialize();
    	//console.log(data);
    	$.post('/user/register',data,function(resData){
    		console.log(123);
    	    $(".modal-body").text(resData.msg);
    	    $("#myModal").modal("show").on("hide.bs.modal",function(){
    	    	if (resData.code == 1){
    	    		// 注册成功之后跳转到登录页面否则还留在本页面继续注册
    	    		location.href = "/JDlogin.html";
    	    	}
    	    });
    	});
    });
});