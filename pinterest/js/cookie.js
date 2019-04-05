window.onload=function ()
{
	 function setCookie(name,value,iday)  //设置cookie
{
var oDate=new Date();
oDate.setDate(oDate.getDate()+iday);
document.cookie=name+'='+value+';expires='+oDate; //设置cookie ,并且设置有效期
}
 function  getCookie(name)
 {
     var arr=document.cookie.split(';');   //在cookie中，数据是以“name=value”的形式存储的，数据之间用“；”隔开
     for(var i=0;i<arr[i].length;i++)     
     {
         var arr2=arr[i].split('=');       //再以“=”为界限进行一次分割，将value与name分开
       if(arr2[0]==name)                 //这里'arr2[0]=name',"arr2[1]=value".
       {

return  arr2[1];
       }  
          
     }
     return '';
 }       	
	var obtn4=document.getElementById('btn4');
	var oyouxiangone=document.getElementsByName('youxiangone')[0];
    var opwdone=document.getElementsByName('pwdone')[0];
    obtn4.onclick=function ()
    {
    	
               setCookie('youxiangone',oyouxiangone.value,12); 
               setCookie('pwdone',opwdone.value,12);
    }
               oyouxiangone.value=getCookie('youxiangone');
               opwdone.value=getCookie('pwdone');
    var obtnfour=document.getElementById('btnfour');
    var oyouxiang=document.getElementsByName('youxiang')[0];
    var opwd=document.getElementsByName('pwd')[0];
     obtnfour.onclick=function ()
      {
           	    setCookie('pwd',opwd.value,12)
                setCookie('youxiang',oyouxiang.value,12); 
    }
              opwd.value=getCookie('pwd');
              oyouxiang.value=getCookie('youxiang');
}
