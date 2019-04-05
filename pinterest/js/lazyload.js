window.onload = function(){
	
  var  odiv=document.getElementById('tupian');
  var oBox=odiv.getElementsByClassName("box");
  var oImg=odiv.getElementsByTagName('img');
  var oBoxw=oBox[0].offsetWidth;
  var cols=5;
  loadImg(oImg);
  window.onscroll = function(){
    loadImg(oImg);
  };
  //瀑布流加载图片
  function waterfall(ele,col,eleWidth){
    var hArr = [];
    for(var i = 0;i < ele.length;i++){
        if(i < col){
            hArr.push(ele[i].offsetHeight);
        }else{
            //min不能用于数组，apply的第一个参数传递作用域，第二个参数传递数组。Math.min.apply(null, [1, 2, 3]) 等价于 Math.min(1, 2, 3)
            var minH = Math.min.apply(null,hArr);
            var index = hArr.indexOf(minH);
            ele[i].style.position = 'absolute';   
            ele[i].style.top = minH + 'px';           //ele.style.left/top 是有px的，而offsetHeight/offsetWidth是没有px的
            ele[i].style.left = index * eleWidth + 'px';
            hArr[index] += ele[i].offsetHeight;
        }
    }
  }
  //懒加载图片
  function loadImg(arr){
  for( var i = 0,len = arr.length; i < len; i++){
    //判断图片相对应视图窗口的高度是否小于屏幕可视窗口大小
    if(arr[i].getBoundingClientRect().top < document.documentElement.clientHeight && !arr[i].isLoad){  //判断图片
      arr[i].isLoad = true;
      if(arr[i].dataset){                    //判断是否存在HTML5的dataset对象
        aftLoadImg(arr[i],arr[i].dataset.original);    
      }else{
        aftLoadImg(arr[i],arr[i].getAttribute("data-original"));
      }
      arr[i].style.cssText = "transition: opacity 4s; opacity: 1;"    //使opacity变化在4秒内完成
    }
  }
}
function aftLoadImg(obj,url){
  obj.src = url;
  waterfall(oBox,cols,oBoxw);   //需要再次调用瀑布流方法
}

//表单之间的切换
    var obtn1=document.getElementById('loadbtn1');
	var obtn2=document.getElementById('loadbtn2');
	var form1=document.getElementById('formone');
	var form2=document.getElementById('formtwo');
	var otext1=document.getElementById('text1');
	var otext2=document.getElementById('text2');
	
	
	otext1.onclick=function()
	{
		obtn1.style.display='none';
		obtn2.style.display='block';
		form2.style.display='none';
		form1.style.display='block';
	}
	otext2.onclick=function()
	{
		
		obtn1.style.display='block';
		obtn2.style.display='none';
		form2.style.display='block';
		form1.style.display='none';
	}
	
	obtn2.onclick=function()
	{
		obtn2.style.display='none';
		obtn1.style.display='block';
		form1.style.display='none';
		form2.style.display='block';
	}
	
	obtn1.onclick= function()
	{
		obtn1.style.display='none';
		obtn2.style.display='block';
		form1.style.display='block';
		form2.style.display='none';
	
	}
     var obtnfour=document.getElementById('btnfour');
     var otestemail=document.getElementById('btnone');
     var osmallpart=document.getElementById('smallpart');
     var obigpart=document.getElementById('bigpart');
     var omenu=document.getElementById('menu');
     var obtntwo2=document.getElementById('btntwo');
         var obtn4=document.getElementById('btn4');
         var obtnone=document.getElementById('btn1');
         var obtntwo=document.getElementById('btn2');
       
         
 
         obtn4.onclick=function()
         {
         	 var re=/^\w+@[a-z0-9]+\.[a-z]+$/i;  //使用正则表达式验证邮箱格式
                                                   
                if(re.test(obtnone.value))
                {	
                if (obtntwo.value.length>=6)	     //检验是否输入六位以上密码
                {
                	osmallpart.style.display='none';
                    obigpart.style.position='relative';
                    omenu.style.display='block';	
                }
                else
                {
                 alert('请输入至少六位密码');
                }
                }
                else
                {
                    alert("请正确输入邮箱！");
                }
         }
   

    obtnfour.onclick=function()
        {
	
	
	             var re=/^\w+@[a-z0-9]+\.[a-z]+$/i;  //使用正则表达式验证邮箱格式
                                                   
                if(re.test(otestemail.value))
                {	
                if (obtntwo2.value.length>=6)	     //检验是否输入六位以上密码
                {
                	osmallpart.style.display='none';
                    obigpart.style.position='relative';
                    omenu.style.display='block';	
                }
                else
                {
                 alert('请输入至少六位密码');
                }
                }
                else
                {
                    alert("请正确输入邮箱！");
                }
       }
 
}