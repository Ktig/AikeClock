/*****************************时间*****************************************/
var flag=0,fr=0;
var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
function timemoney(){//金钱函数
	s++;
	(s>=0&&s<10)&&(s="0"+s);
	if (s==60)
	{
		m++;(m>=0&&m<10)&&(m="0"+m);
		s="0"+0;
	}
	if (m==60)
	{
		h++;(h>=0&&h<10)&&(h="0"+h);
		m="0"+0;
	}
	if (h==24)
	{
		h="0"+0;
	}
	document.querySelector("#span01").innerHTML=h
	document.querySelector("#span02").innerHTML=m
	document.querySelector("#span03").innerHTML=s	
	}
	timer=setInterval(timemoney,1000);
function btns(){//总控制
	flag++;
	document.querySelector("#btn1").innerHTML=flag;
	if (flag==1)
	{
		clearInterval(timer);
		/*one.querySelector(".eastem").className=" ";
		three.querySelector(".eastem").className=" ";
		six.querySelector(".eastem").className=" ";
		eight.querySelector(".eastem").className=" ";
		four.querySelector(".eastem").className=" ";//逆时针此轮元素

		two.querySelector(".wise").className=" ";
		five.querySelector(".wise").className=" ";
		seven.querySelector(".wise").className=" ";
		nine.querySelector(".wise").className=" ";//顺时针此轮元素*/
		document.querySelector("#one>#gear-inner").className="";
		document.querySelector("#three>#gear-inner").className="";
		document.querySelector("#four>#gear-inner").className="";
		document.querySelector("#six>#gear-inner").className="";
		document.querySelector("#eight>#gear-inner").className="";

		document.querySelector("#two>#gear-inner").className="";
		document.querySelector("#five>#gear-inner").className="";
		document.querySelector("#seven>#gear-inner").className="";
		document.querySelector("#nine>#gear-inner").className="";
		
		document.querySelector("#btn1").className="current";//
		document.querySelector("#btn2").className="";//
		document.querySelector("#btn3").className="";//
		document.querySelector("#btn4").className="";//按键动画动画切换

		document.querySelector("#span03").className="current";//大轮时间框动画切换
		document.querySelector("#btn2").disabled=false;
		document.querySelector("#btn3").disabled=false;
		document.querySelector("#btn4").disabled=true;
		//document.querySelector("#btn4").disabled=false;
		btn2.addEventListener("click",bts);
		btn3.addEventListener("click",bts);
	}
	if (flag==2)
	{	
		clearInterval(timer);
		document.querySelector("#btn1").className="current";//
		document.querySelector("#btn2").className="";//
		document.querySelector("#btn3").className="";//
		document.querySelector("#btn4").className="";//按键动画动画切换

		document.querySelector("#span03").className="";//
		document.querySelector("#span02").className="current";//大轮时间框动画切换
		document.querySelector("#btn4").disabled=true;
		btn2.removeEventListener("click",bts);
		btn3.removeEventListener("click",bts);
		btn2.addEventListener("click",btm);
		btn3.addEventListener("click",btm);
	}
	if (flag==3)
	{
		clearInterval(timer);
		document.querySelector("#btn1").className="current";//
		document.querySelector("#btn2").className="";//
		document.querySelector("#btn3").className="";//
		document.querySelector("#btn4").className="";//按键动画动画切换

		document.querySelector("#span03").className="";//
		document.querySelector("#span02").className="";//
		document.querySelector("#span01").className="current";//大轮时间框动画切换
		document.querySelector("#btn4").disabled=true;
		btn2.removeEventListener("click",bts);
		btn3.removeEventListener("click",bts);
		btn2.removeEventListener("click",btm);
		btn3.removeEventListener("click",btm);
		btn2.addEventListener("click",bth);
		btn3.addEventListener("click",bth);
	}
	if (flag==4)
	{
		flag=0;
		document.querySelector("#one>#gear-inner").className="eastem"
		document.querySelector("#three>#gear-inner").className="eastem";
		document.querySelector("#four>#gear-inner").className="eastem";
		document.querySelector("#six>#gear-inner").className="eastem";
		document.querySelector("#eight>#gear-inner").className="eastem";

		document.querySelector("#two>#gear-inner").className="wise";
		document.querySelector("#five>#gear-inner").className="wise";
		document.querySelector("#seven>#gear-inner").className="wise";
		document.querySelector("#nine>#gear-inner").className="wise";
		console.log("按键看看:"+flag);
		timer=setInterval(timemoney,1000);
		btn3.removeEventListener("click",bth);
		btn2.removeEventListener("click",bth);
		document.querySelector("#btn1").className="";//
		document.querySelector("#btn2").className="";//
		document.querySelector("#btn3").className="";//
		document.querySelector("#btn4").className="";//按键动画动画切换

		document.querySelector("#span03").className="";//
		document.querySelector("#span02").className="";//
		document.querySelector("#span01").className="";//大轮时间框动画切换
		document.querySelector("#btn1").disabled=true;
		document.querySelector("#btn2").disabled=true;
		document.querySelector("#btn3").disabled=true;
		document.querySelector("#btn4").disabled=false;
	}
}
function btnTR(){//解除前三按键禁锢！！
	//alert("hello")
	document.querySelector("#btn1").disabled=false;
	document.querySelector("#btn1").innerHTML=0;
	console.log("状态:"+flag);
	//console.log("秒位:"+s);
	//console.log("分位:"+m);
	console.log("秒位:"+s);
	console.log("分位:"+m);
	console.log("时位:"+h);
	console.log("出啊发到");


	
	document.querySelector("#btn4").className="current";
	document.querySelector("#btn1").className="";
	document.querySelector("#btn2").className="";
	document.querySelector("#btn3").className="";
	
	document.querySelector("#span03").className="";//
	document.querySelector("#span02").className="";//
	document.querySelector("#span01").className="";//大轮时间框动画切换
	
}
function bts(e){//秒控制
	if (e.target.innerHTML=="+")
	{
		document.querySelector("#btn2").className="current";//
		document.querySelector("#btn1").className="";//
		document.querySelector("#btn4").className="";//
		document.querySelector("#btn3").className="";//按键动画动画切换
		s++;
		s<10&&(s="0"+s)
		if (s>59){;s=0+"0";m++;m<10&&(m="0"+m);}
		console.log("时位:"+h+','+"分位:"+m+','+"秒位:"+s);
		document.querySelector("#span03").innerHTML=s;
		if (m>59){m=0+"0";h++;h<10&&(h="0"+h);if (h>23){h=0+"0";}}
		document.querySelector("#span02").innerHTML=m;
		
		document.querySelector("#span01").innerHTML=h;
	}
	else if (e.target.innerHTML=="-")
	{
		document.querySelector("#btn3").className="current";//
		document.querySelector("#btn1").className="";//
		document.querySelector("#btn4").className="";//
		document.querySelector("#btn2").className="";//按键动画动画切换
		s--;
		(s>=0&&s<10)&&(s="0"+s);
		if (s<0){s=59;m--;(m>=0&&m<10)&&(m="0"+m);}
		document.querySelector("#span03").innerHTML=s;
		if(m<0){m=59;h--;(h>=0&&h<10)&&(h="0"+h);}
		document.querySelector("#span02").innerHTML=m;
		if(h<0){h=23;}
		document.querySelector("#span01").innerHTML=h;
	}
}
function btm(e){//分控制
	if (e.target.innerHTML=="+")
	{
		document.querySelector("#btn2").className="current";//
		document.querySelector("#btn1").className="";//
		document.querySelector("#btn4").className="";//
		document.querySelector("#btn3").className="";//按键动画动画切换
		m++;
		m<10&&(m="0"+m);
		if(m>59){m=0+"0";h++;h<10&&(h="0"+h);}
		document.querySelector("#span02").innerHTML=m
		if(h>23){h=0+"0";}
		document.querySelector("#span01").innerHTML=h;
	}
	else if (e.target.innerHTML=="-")
	{
		document.querySelector("#btn3").className="current";//
		document.querySelector("#btn1").className="";//
		document.querySelector("#btn4").className="";//
		document.querySelector("#btn2").className="";//按键动画动画切换
		m--;
		(m>=0&&m<10)&&(m="0"+m);
		if(m<0){m=59;h--;(h>=0&&h<10)&&(h="0"+h);}
		document.querySelector("#span02").innerHTML=m;
		if(h<0){h=23;}
		document.querySelector("#span01").innerHTML=h;
	}
}
function bth(e){//时控制
	if (e.target.innerHTML=="+")
	{	
		document.querySelector("#btn2").className="current";//
		document.querySelector("#btn1").className="";//
		document.querySelector("#btn4").className="";//
		document.querySelector("#btn3").className="";//按键动画动画切换
		h++;
		h<10&&(h="0"+h);
		if(h>23){h=0+"0";};
		document.querySelector("#span01").innerHTML=h;
	}
	else if (e.target.innerHTML=="-")
	{
		document.querySelector("#btn3").className="current";//
		document.querySelector("#btn1").className="";//
		document.querySelector("#btn4").className="";//
		document.querySelector("#btn2").className="";//按键动画动画切换
		h--;
		(h>=0&&h<10)&&(h="0"+h);
		if(h<0){h=23;}
		document.querySelector("#span01").innerHTML=h;
	}
}
btn4.addEventListener("click",btnTR);


/*function Rotate(){
	fr+=(Math.PI*2);
	document.querySelector(".gear-inner").setAttribute("style","");
	document.querySelector(".gear-inner").style.transform="rotate("+fr+"deg)"
}
var timer2=setInterval(Rotate,25)*/





