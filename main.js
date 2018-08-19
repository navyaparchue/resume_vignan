/*function json(file,callback){

	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("appilication/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState=="4" && xhr.status=="200"){
			callback(xhr.responseText);
	    }
  }
    xhr.send(null);
}
json("data.json",function(text){
	let d=JSON.parse(text);
	console.log(d);
	basics(d.basicdetails);
	carr(d.carrier);
	edu(d.education);
	techskills(d.skills);
	ach(d.Achievements);
	de(d.Description);
})*/
fetch("data.json")
.then(function(response){
	return response.json();
})
.then(function(d){
	console.log(d);
	basics(d.basicdetails);
	carr(d.carrier);
	edu(d.education);
	techskills(d.skills);
	ach(d.Achievements);
	de(d.Description);
})
var main=document.querySelector(".first");
var l=document.createElement("div");
l.classList.add("left");
l.setAttribute("id","nirula");
main.appendChild(l);

function basics(basic){
var i=document.createElement("img");
i.src=basic.image;
l.appendChild(i);
var nam=document.createElement("h3");
nam.textContent=basic.name;
l.appendChild(nam);
var mail=document.createElement("h4");
mail.textContent=basic.email;
l.appendChild(mail);
var phon=document.createElement("h4");
phon.textContent=basic.phone;
l.appendChild(phon);
var addr=document.createElement("h4");
addr.textContent=basic.address;
l.appendChild(addr);
}
var r=document.createElement("div");
r.classList.add("right");
main.appendChild(r);

function edu(e){
var e1=document.createElement("div");
e1.classList.add("educa");
r.appendChild(e1);
var head=document.createElement("h1");
head.textContent="Educational Details";
e1.appendChild(head);
head.appendChild(document.createElement("HR"));
for(var i=0;i<e.length;i++){
	var h=document.createElement("h2");
	h.textContent=e[i].course;
	e1.appendChild(h);
	var u=document.createElement("ul");
	e1.appendChild(u);
	var list=document.createElement("li");
	list.textContent=e[i].college;
	u.appendChild(list);
	var list1=document.createElement("li");
	list1.textContent=e[i].percentage;
	list.appendChild(list1);
}
}
function techskills(s){
	var d=document.createElement("div");
    r.appendChild(d);
    var h1=document.createElement("h1");
    d.appendChild(h1);
    h1.textContent="Skills Set";
    h1.appendChild(document.createElement("HR"));
    var tab=document.createElement("table");
    var row="";
    for(var i=0; i<s.length; i++){
    	row+="<tr><td>"+s[i].name+"</td><td>"+s[i].value+"</td></tr>";
    }
    tab.innerHTML=row;
    d.appendChild(tab);
}
function carr(car){
	var c1=document.createElement("div");
	r.appendChild(c1);
	var h1=document.createElement("h1");
    c1.appendChild(h1);
	h1.textContent="Carrier Objective";
	h1.appendChild(document.createElement("HR"));
	var para=document.createElement("p");
	para.textContent=car.ca;
	c1.appendChild(para);
}
function ach(achi){
	var a1=document.createElement("div");
	r.appendChild(a1);
	var h1=document.createElement("h1");
	a1.appendChild(h1);
	h1.textContent="Achievements";
	h1.appendChild(document.createElement("HR"));
	for(i in achi){
		var u=document.createElement("ul");
		a1.appendChild(u);
		var list=document.createElement("li");
		list.textContent=achi[i];
		u.appendChild(list);
	}
}
	function de(desc){
	var d1=document.createElement("div");
	r.appendChild(d1);
	var h1=document.createElement("h1");
	d1.appendChild(h1);
	h1.textContent="Description";
	h1.appendChild(document.createElement("HR"));
	var descr=document.createElement("p");
	descr.textContent=desc.des;
	d1.appendChild(descr);
}
