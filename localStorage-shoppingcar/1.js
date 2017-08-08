let ul1 = document.getElementById('ul1');
let ul2 = document.getElementById('ul2');
let list1 = Array.from(ul1.children);
let result = []; //存放点击数据的

if(localStorage.getItem('mmm')){
		result = JSON.parse(localStorage.getItem('mmm'));
		addHtml(result);
	}

window.addEventListener('storage',function(){
	if(localStorage.getItem('mmm')){
		result = JSON.parse(localStorage.getItem('mmm'));
		addHtml(result);
	}
})

list1.forEach(function(e){
	e.onclick = function(){
		if(!result.includes(e.innerHTML)){
			result.push(e.innerHTML);
			addHtml(result);
			localStorage.setItem('mmm',JSON.stringify(result));
		}
	}
})

function addHtml(arr){
	let html = ''
	arr.forEach(function(e){
		html+=`<li>${e}</li>`;
	})
	ul2.innerHTML = html;
}

ul2.onclick = function(ev){
	if(ev.target.tagName == 'LI'){
		result = result.filter(e=> e!==ev.target.innerHTML);
		localStorage.setItem('mmm',JSON.stringify(result));
		addHtml(result);
	}
}

