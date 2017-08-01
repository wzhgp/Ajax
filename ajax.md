# Ajax #
##  ##
**全称**：Asynchronous JavaScript and XML(异步的js与XML)  
**作用:**是一种前端与后端的数据交互方式(前端与后端分离的技术)  
**优点：**  
	&emsp;1.减少服务器压力  
	&emsp;2.优化用户体验，无刷新页面就能访问数据  
	&emsp;3.使用异步方式与服务器通信，不需要打断用户的操作具有更加迅速的响应能力。
#### **XML**：是一种数据格式 ####
	例1：
		'<person>
			<name>小强</name>
			<age>23</age>
		</person>'
	例2：'{name:"小青",age:18}'
  
**注：1.不管什么格式，服务器返回来的数据都是字符串。**  
**&emsp;&emsp;2.不能再本地运行代码，因为后端的文件必须要在服务器下运行**    
****
**关于安装服务器：**  
	&emsp;&emsp; 安装服务器，不能是在中文目录下，文件名也必须是英文或数字
			安装完后，在config里面找到httpd.conf文件 将Document后的目录中的后缀改成php/www
			在www文件中新建1.txt作文测试文件
			在浏览器中输入localhost/1.txt，测试文件是否成功
#### ajax交互模型（实现原理，实现机制） ####
打电话机制：  
&emsp;&emsp;&emsp;1.买部手机  
&emsp;&emsp;&emsp;2.输入电话号码  
&emsp;&emsp;&emsp;3.拨号    
&emsp;&emsp;&emsp;4.等待对方接电话  
&emsp;&emsp;&emsp;5.通话  
#### JS-ajax语法 ####
语法：ajax.open(method,url,[boolean])  
参数：method:用什么凡是请求
		get:
		post:
url:请求的地址
boolean:是否异步，默认为true/无需写，本身就是异步模式  
注：post和get的区别：  
&emsp;&emsp;post:   
&emsp;&emsp;&emsp;1.通过send发送前端数据给后端  
&emsp;&emsp;&emsp;2.相对安全(关于y用户的信息会用post)   
&emsp;&emsp;&emsp;3.体积来说是无限大(后台会限制)  
&emsp;&emsp;&emsp;4.在send()前要设置请求头：setRequestHeader();  
&emsp;&emsp;get:  
&emsp;&emsp;&emsp;1.通过浏览器的url来发送数据给后端   
&emsp;&emsp;&emsp;2.相对来说不安全(只有不跟用户信息打交道或者在数据一定范围都可以使用get,更普遍)  
&emsp;&emsp;&emsp;3.体积受**浏览器**限制  
&emsp;&emsp;&emsp;4.在IE浏览器下，中文会被解析为URL编码格式，所有容易出问题，要用encodeURI()转一下
#### jQ-ajax语法 ####
$.ajax({  
&emsp;&emsp;&emsp;url:'通信的后端地址',  
&emsp;&emsp;&emsp;data{  
&emsp;&emsp;&emsp;//拼接的字段:需要拼接数据(前端穿给后端的数据)  
&emsp;&emsp;&emsp;},  
&emsp;&emsp;&emsp;dataType:'json',  //如果写了就不用JSON.parse转数据了  
&emsp;&emsp;&emsp;success:function(){//回调  
     			
&emsp;&emsp;&emsp;&emsp;}  
})

#### JS-ajax-get实现步骤 ####
	1.创建ajax对象：  
		var ajax = new XMLHttpRequest; 
	2.请求地址：
		 ajax.open('get','通信的后端地址?user='+xx.value')；
	3.发送：
		ajax.send();
	4.等待服务器响应：
		ajax.onload = function(){
			//后端处理完成之后返回的数据
			//ajax.responseText; ->JSON对象
			5.通话
		}
	注：JSON转对象的方法：JSON.parse(JSON)
#### JS原生get方法的小栗子  ####
	用户名：<input type = "text" id = "user">
	<span></span>
	var user = document.getElementById('user');
	var span = document.getElementByTagName('span')[0];
	user.onblur = function(){
		const ajax = XMLHttpRequest;
		ajax.open('get','php/get.php?user='+user.value);//同级目录下php下的php文件
		ajax.send();
		ajax.onload = function(){
			var data = JSON.parse(ajax.responseText);
			span.innerhtml = data.msg;
		}
	}
#### JS原生post方法的小栗子  ####
	var user = document.getElementById('user');
	var span = document.getElementsByTagName('span')[0];
	user.onblur = function(){
		const ajax = new XMLHttpRequest;
		ajax.open('post','php/post.php');
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax.send('user='+user.value);
		ajax.onload = function(){
			var data = ajax.responseText;
			span.innerHTML = data;
		}
	}
#### JQ-get方法的小栗子  ####
	用户名：<input type = "text" id = "user">
	<span></span>
	$('#user').blur(function(){
		$.ajax({
			url:'php/get_json.php',
			data:{
				user:$('#user').val()
			},
			dataType:'json',
			success:function(data){
				$('span').text(data.msg)
			}
		});
	})
#### JQ-post方法的小栗子  ####
	用户名：<input type = "text" id = "user">
	<span></span>
	$('#user').blur(function(){
		$.ajax({
			type:"post",
			url:"php/post.php",
			data:{
				user:$('#user').val(),
			},
			success:function(data){
				$('span').text(data)
			}
		});
	})
	
		


	