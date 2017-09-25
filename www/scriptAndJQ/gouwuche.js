var username = $.cookie("username");
if(username){
    $("#login").html(username).after("<li class='tuichu'  id='logout'>退出登录</li>");
}
$(".navul").on("click","#logout",function(){
    console.log(123);
    $.post("/user/logout",function(resData){
        // 如果正常退出登录,刷新下本页面
        if (resData.code == 1) {
            location.reload();
            console.log(123);
            $("#login").html(resData.msg);
        };
    })
});
$.get("/maimaimai/all",function(resData){
 	// 遍历所有问题
 	console.log(resData);
 	// var shop = resData.toString();
 	// console.log(shop);
 	for(var i = 0; i < resData.length; i++){
 		$(".shopping").append(resData[i].slice(0,resData[i].indexOf("."))+"            ");
 	}
 	// console.log(shop.indexOf("."));
    
 });



