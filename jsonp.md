**请求接口时**：  
1.拿到接口，第一件事：  
&emsp;&emsp;直接访问接口，看看是jsonp还是ajax  
&emsp;&emsp;&emsp;&emsp;jsonp:  
&emsp;&emsp;&emsp;&emsp;函数名+()->fn({})或者url有callback。此时callback后面的函数名**必须是**自己全局定义的函数名  
&emsp;&emsp;&emsp;&emsp;ajax:   
&emsp;&emsp;&emsp;&emsp;对象->{}/[]