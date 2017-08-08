#### 一、	本地存储：HTML5中window下的属性 ####
1.sessionStorage  
&emsp;&emsp;作用：针对一个 session 的数据存储  
&emsp;&emsp;**生命周期**：关闭窗口，存储的数据清空  
&emsp;注：只能在当前页面存储数据，并不能共享到兄弟页面  
2.localStorage   
&emsp;&emsp;优点：存储的内容比cookie更多，比cookie操作起来更便捷  
&emsp;&emsp;设置语法:localStorage.setItem(key,value)  
&emsp;&emsp;获取语法：localStorage.getItem(key)  
&emsp;&emsp;删除语法：localStorage.removeItem(key)  
&emsp;&emsp;清除：localStorage.clear  
&emsp;&emsp;**生命周期：**只要不删就一直存在  
&emsp;&emsp;事件：  
&emsp;&emsp;&emsp;&emsp;**storage**事件：监听同城同浏览器的兄弟页面是否实时更新 ,此事件的触发机制为**window.addEventListener **  
&emsp;&emsp;注：必须手动在Application里删除才会触发storage事件，人为代码remove都不可以  
&emsp;&emsp;&emsp;&emsp;但是可是实时监听兄弟页面，只要改变了localStorage就会触发storage事件  
		 
&emsp;&emsp;注：**最好**在服务器环境下运行  
&emsp;&emsp;&emsp;&emsp;专门前端存储数据的，前端的数据库，同样存在浏览器中(大约5M)  