jQuery(document).ready(function($) {
	$(".duoimg li,.shaoimg li").css("background-color","#918888");
	$(".clickcloseh").click(function(){
		$(".clickclosebig").fadeOut(1000);
	});
	$("nav .navleft").mouseenter(function() {
		$(this).find("span").addClass("beijingmenter").end().find("ul").css("display","block");
		$(".dangban").css("display","block");
		$("nav .navleft li>div").mouseenter(function(event) {
			$(this).addClass('grayback');
		}).mouseleave(function(event) {
			$(this).removeClass('grayback');
		}).click(function(event) {
			$("nav .navleft li>div").removeClass('redback');
			$(this).addClass('redback');
			val = $(this).text();
			$(".navleft>span").text("☺ "+val);
		});;
	}).mouseleave(function(event) {
		$(this).find("span").removeClass("beijingmenter").end().find("ul").css("display","none");
		$(".dangban").css("display","none");
	});
    // 搜索提示
    var souarr =["  飞利浦电动剃须刀","  美度手表","  无线鼠标","  联想一体电脑","  神舟笔记本","  澳柯玛冰箱","  榨汁机家用","  图书320-200"];
    var soui =0;
    var soutimer = setInterval(function(){
    	$(".sousuo input").attr("placeholder",souarr[soui]);
    	soui++;
    	if( soui ==8 ){
    		soui = 0;
    	};
    	$(".sousuo input").focus(function(){
    		clearInterval(soutimer);
    	})
    }, 2000);
    $(".sousuo input").focus(function(event) {
    	$(".sousuo input").attr("placeholder","");
    });
    $(".sousuo input").blur(function(){
        $(".sousuo input").attr("placeholder",souarr[soui]);
    	soutimer = setInterval(function(){
        	$(".sousuo input").attr("placeholder",souarr[soui]);
        	soui++;
        	if( soui ==8 ){
        		soui = 0;
        	};
        	$(".sousuo input").focus(function(){
        		clearInterval(soutimer);
        	})
        }, 2000);
    })

	// 右部面板
	$(".mianban ul span").mouseenter(function(event) {
		$(".mianban ul span").css("color","#fff");
		$(this).css("color","red");
	}).mouseleave(function(event) {
		$(".mianban ul span").css("color","#fff");
	});
	$(".mianban ul span:odd").mouseenter(function(event) {
		$(this).parents("li").find("div").stop().addClass('jishu').removeClass('oushu');
	});
	$(".mianban ul span:even").mouseenter(function(event) {
		$(this).parents("li").find("div").stop().addClass('oushu').removeClass('jishu');
	});
	$(".mianban").mouseleave(function(event) {
		$(this).find("div").removeClass();
	});

	// lunbo
	var c = 1;
	var timer = null;
	function lunbo(){
		clearInterval(timer);
	    timer = setInterval(function(){
	    	var url =  "url(images/l"+c+".jpg)";
	    	// $(".lunbo").fadeout().css("background-image",url);
	    	$(".lunbo").fadeOut("fast",function(){
	    		$(this).fadeIn("fast").css("background-image",url);
	    	})
	    	$(".dian").css("background-color","#fff");
	    	$(".dian").eq(c-1).css("background-color","red");
	    	c++;
	    	if( c ==9){
	    		c = 1;
	    	}
	    }, 3000);
	}
	lunbo();
	$(".dian").each(function(i,e){
		$(e).click(function(){
			clearInterval(timer);
		    var url =  "url(images/l"+(i+1)+".jpg)";
		    $(".lunbo").fadeOut("fast",function(){
			    $(this).fadeIn("fast").css("background-image",url);
		    });
		    $(".dian").css("background-color","#fff");
		    $(this).css("background-color","red");
		})
	});
	$(".lunbo").mouseleave(function(event) {
		lunbo();
	});
	// 精灵图遍历
	var y = 14;
	var x = 14;
	for(var a = 0 ; a < 3  ;a++){
		$("tr").eq(a).find("i").each(function(index,e){
			$(e).css("background-position",x+"px "+y+"px");
		    x = x-45;
		    if( x == -166){
		    	x = 14;
		    }
		});
		y = y-45;
	};
    //倒计时
    var hour = 1;
    var minute = 59;
    var second = 60;
    $(".daojishi span:eq(0)").html("0"+hour);
    $(".daojishi span:eq(1)").html(minute);
    $(".daojishi span:eq(2)").html(second);
    setInterval(function(){
        second--;
        $(".daojishi span:eq(2)").html(second);
        if(second<0){
    	   	second = 60;
    	   	minute--;
    	   	$(".daojishi span:eq(2)").html(second);
    	   	$(".daojishi span:eq(1)").html(minute);
    	};
        if(minute<0){
    	   	minute = 60;
    	   	hour--;
    	   	$(".daojishi span:eq(1)").html(minute);
    	   	$(".daojishi span:eq(0)").html("00");
    	};
    	if(second<10){
            $(".daojishi span:eq(2)").html("0"+second);
        }
        if(minute<10){
            $(".daojishi span:eq(1)").html("0"+minute);
        }
    }, 100);
   // top fixed
   
    $(window).scroll(function(event) {
    	if($(window).scrollTop() > 400){
    		$(".topfixed").fadeIn("fast");
    	}
    	if($(window).scrollTop() < 400){
    		$(".topfixed").fadeOut("fast");
    	}
    	if($(window).scrollTop() > 1800){
    		$(".leftfixed").fadeIn("fast");
    	}
    	if($(window).scrollTop() < 1800){
    		$(".leftfixed").fadeOut("fast");
    	}
    });
    

    // left fixed
    $(".leftfixed li").each(function(i,e){
    	$(e).click(function(){
    		$(".leftfixed li").css("background","#918888");
    		$(this).css("background","#d70b1c");
    	});
    });
    $(".leftfixed li").eq(0).click(function(){
    	$("body,html").finish().animate({"scrollTop": 1940},1000);
    });
    $(".leftfixed li").eq(1).click(function(){
    	$("body,html").finish().animate({"scrollTop": 2691},1000);
    });
    $(".leftfixed li").eq(2).click(function(){
    	$("body,html").finish().animate({"scrollTop": 3300},1000);
    });
    $(".leftfixed li").eq(3).click(function(){
    	$("body,html").finish().animate({"scrollTop": 3850},1000);
    });
    $(".leftfixed li").eq(4).click(function(){
    	$("body,html").finish().animate({"scrollTop": 4410},1000);
    });
    $(".leftfixed li").eq(5).click(function(){
    	$("body,html").finish().animate({"scrollTop": 5090},1000);
    });
    $(".leftfixed li").eq(6).click(function(){
    	$("body,html").finish().animate({"scrollTop": 5640},1000);
    });
    $(".leftfixed li").eq(7).click(function(){
    	$("body,html").finish().animate({"scrollTop": 6196},1000);
    });
    $(".leftfixed li").eq(8).click(function(){
    	$("body,html").finish().animate({"scrollTop": 6750},1000);
    });
    $(".leftfixed li").eq(9).click(function(){
    	$("body,html").finish().animate({"scrollTop": 7300},1000);
    });
    $(".leftfixed li").eq(10).click(function(){
    	$("body,html").finish().animate({"scrollTop": 8250},1000);
    });
    $(".leftfixed li").eq(11).click(function(){
    	$("body,html").finish().animate({"scrollTop": 0},1000);
    });
    $(".duoimg li,.shaoimg li").each(function(i,e){
        $(e).mouseenter(function(event) {
        	$(".longtiao li").finish().animate({"right": "-35px"},"fast");
        	$(".duoimg li,.shaoimg li").eq(i).css("background-color","#c81623");
        	$(".longtiao li").eq(8+i).css("background-color","#c81623").finish().animate({"right": "28px"},"fast");
        }).mouseleave(function(event) {
        	$(".duoimg li,.shaoimg li").eq(i).css("background-color","#918888");
    	    $(".longtiao li").eq(8+i).css("background-color","#918888").finish().animate({"right": "-35px"},"fast");
        });
    });

    // 后台部分
    $(".navul").on("click","#register",function(){
    	location.href = "register.html";
    });
    $(".navul").on("click","#login",function(){
        location.href = "JDlogin.html";
    });
    $(".gouwuche").click(function(){
        location.href = "gouwuche.html";
    });
    // 退出登录
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
    $(".erweima").click(function(event) {
        $(".maimaimai").fadeIn("fast");
    });
    $(".maimaimai form").submit(function(event){
        // console.log(123);
    
        //阻止默认事件
        event.preventDefault();
        //将表单数据编译成字符串(username=eewe&password=1111111&isMale=true&email=345%40qwe.cgn&course=VR)
        var data = $(this).serialize();
        console.log(data);

        //console.log(data);
        $.post('/maimaimai/register',data,function(resData){
            console.log(123);
        });
        location.href = "gouwuche.html";
    });
});