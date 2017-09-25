//加载模块
var express = require("express");//服务器模块
var bodyParser = require("body-parser");//处理解析post请求数据模块
var multer = require("multer");//处理formdata格式提交的数据模块
var fs = require("fs");//处理文件的写入读出模块
var cookieParser = require("cookie-parser");  // 解析cookie模块
//var cookieParser = require("cookiepaeser");
//创建服务器对象
var app = express();
 
//指定根目录文件夹
app.use(express.static("www"));
//解析请求数据
app.use(bodyParser.urlencoded({extended:true}));

//解析cookie 数据
app.use(cookieParser());

/*********************************注册***************************************/

app.post("/user/register",function(req,res){
	console.log(123);
	//先判断用户是否已经被注册过 ,后台获得req返回的数据,也要res返回给前端东西
	var filePath = "users/" + req.body.username + ".json";
	// 判断文件是否存在
	fs.exists(filePath,function(exi){
		if (exi) {
			//用户存在
			res.status(200).json({code:2,msg:"用户名已经存在，请重新填写"});
		} else{
			//用户不存在
			//直接把注册等信息写到本地	
			//在body里添加注册时间和ip
			req.body.ip = req.ip;
			req.body.time = new Date();
	        fs.writeFile(filePath,JSON.stringify(req.body),function(err){
	        	if(err){
	        		res.status(200).json({code:0,msg:"系统写入文件失败，请稍后再试"});
	        	}else{
	        		res.status(200).json({code:1,msg:"注册成功"});
	        	}
	        });
		}
	});	
});
/**********************************登录***********************************/
app.post("/user/login",function(req,res){
	// 判断用户是否存在
	var filePath = "users/" + req.body.username + ".json";
	fs.exists(filePath,function(exi){
		if(exi){
			// 用户存在,接着判断密码是否正确
			fs.readFile(filePath,function(err,data){				
				if(err){
					// 读取文件失败
			        res.status(200).json({code:2,msg:"系统错误,读取文件失败"});
				}else{
					// 注意data是一个字符串
					var user = JSON.parse(data);
					if(req.body.password == user.password){
			            // 把用户名保存到响应报文的cookie(1.把用户名以cookie的形式保存在前端,可以作为是否登录的一个凭证;
			            // 2.发送网络请求的时候,会把cookie带到后台)
			            // param1: 键  param2: 值  param3: 过期时间 对象Object{expires}
			            var time = new Date();
			            time.setMonth(time.getMonth() + 1);
			            res.cookie("username",req.body.username,{expires:time});
			            res.status(200).json({code:1,msg:"登陆成功"});
					}else{
			            res.status(200).json({code:3,msg:"密码错误"});
					}
				}
			});
		} else{
			// 用户名不存在
			res.status(200).json({code:0,msg:"用户名不存在"});
		}
	});
});
/***********************************退出登录****************************************/
app.post("/user/logout",function(req,res){
	// 清除cookie 中的username(access_token,timestamp)
	console.log(123);
	res.clearCookie("username");
    res.status(200).json({code:1,msg:"你好,请登录"});
});

/*******************************************maimaimai*********************************************/
app.post("/maimaimai/register",function(req,res){
	// console.log(123);
	//先判断用户是否已经被注册过 ,后台获得req返回的数据,也要res返回给前端东西
	
	var filePath = "maimaimai/" + req.body.maimaimai + ".json";
	// 判断文件是否存在
	fs.exists(filePath,function(exi){
		if (exi) {
			//用户存在
	        // console.log("cunzai");
			
			res.status(200).json({code:2,msg:"用户名已经存在，请重新填写"});
		} else{
			//用户不存在
			//直接把注册等信息写到本地	
			//在body里添加注册时间和ip
			req.body.ip = req.ip;
			req.body.time = new Date();
			console.log(req.body);
	        fs.writeFile(filePath,JSON.stringify(req.body),function(err){
	        	if(err){
	        		res.status(200).json({code:0,msg:"系统写入文件失败，请稍后再试"});
	        	}else{
	        		res.status(200).json({code:1,msg:"注册成功"});
	        	}
	        });
		}
	});	
});

/***********************************获取maimaimai数据*****************************************/
app.get("/maimaimai/all",function(req,res){
	// 返回所有问题(包含答案)
	// 获取一个文件夹中所有的子文件
	fs.readdir("maimaimai",function(err,files){
		if (err) {
			// 读取失败
		    res.status(200).json({code:0,msg:"系统错误,读取文件失败"});
		}else{
			res.status(200).json(files);
			
		};
	});
});


//监听
app.listen(3000,function(){
	console.log("服务器启动成功......");
});