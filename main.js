/*var myHeading=document.querySelector('h1');/*适用querySelector（）函数获取标题，
并将其存储在myHeading变量中，
如要对某个元素进行操作，就要先选择他

myHeading.textContent='Hello World';
/*将myHeading的变量属性.textContent赋值为hello world*/
var myImage=document.querySelector('img');

myImage.onclick=function(){
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='images/1475134_1331559643qMzc.png'){
		myImage.setAttribute('src','images/海绵宝宝.png');
	}else{
		myImage.setAttribute('src','image/1475134_1331559643qMzc.png');
	}
}/*将<img>元素的引用存放在myImage变量里。之后，将这个变量与onclick事件与一个匿名函数绑定
当每次图片被点击时：
1.我们获取这张图片的src属性的值
2.使用一个判断语句判断src的值是否等于原始图片的路径
	a.如果是，将src改为另一张图片的路径，强制在<img>中读取另一张图片
	b.如果不是，将src设为原来图片的路径，即原来的状态*/
