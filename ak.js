/*****************************日历*****************************************/
function showDate(){
	var now=new Date();
	var year=now.getFullYear()
	var month=now.getMonth();
	var date=now.getDate()
	console.log(month);
	console.log(date);
	var d=new Date(year,month,1);
	console.log(d);
	var days=getDays(year,month);
	var count=0;
	var day=d.getDay();
	for (var i=0,arr=[];i<42;i++)
	{
		if (i<day||count==days)
		{
			arr.push(0);
		}else{
			arr.push(++count);
		}

	}
	var tds=data.querySelectorAll("tbody td");
	for(var i=0;i<42;i++)
	{
		tds[i].innerHTML=(arr[i]==0?" ":arr[i]);
		if (tds[i].innerHTML==date)
		{
			tds[i].className="label";
		}
	}
	var thtds=data.querySelectorAll("thead tr td")[0];
	thtds.innerHTML=year+"年"+(month+1)+"月";
}
function getDays(year,month){
	return month==2?(year%4==0&&year%100!=0||year%400==0?29:28):
		   month==4||month==6||month==9||month==11?30:31
	}
/*****************************日历*****************************************/
window.onload=function(){
	showDate();
}






