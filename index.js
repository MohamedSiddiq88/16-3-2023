let cont=document.getElementById("col1");
let iptdate=document.createElement("input");
iptdate.setAttribute("type","date");
iptdate.setAttribute("id","date");
let button=document.createElement("input");
button.setAttribute("type","button");
button.setAttribute("class","btn btn-primary");
button.setAttribute("id","but");
button.setAttribute("value","Display Date");
button.addEventListener("click",date);
let disp=document.createElement("div");
disp.setAttribute("id","dis");
cont.append(iptdate);
cont.append(button);
cont.append(disp);
function date(){
    disp.innerHTML="";
    var inputs=document.getElementById("date").value;
console.log(typeof(inputs));
if(Date.parse(inputs)){
var inputdate=new Date(inputs);
console.log(inputdate);
var currentdate=new Date();
console.log(currentdate);
//Milliseconds diff
var millisecdiff=currentdate.getTime()-inputdate.getTime();
console.log(millisecdiff);
//Seconds Diff
var secondsdiff=mathfloor(millisecdiff,1000);
console.log(secondsdiff);
//Minutes diff
var minutesdiff=mathfloor(secondsdiff,60);
console.log(minutesdiff);
//Hours diff
var hoursdiff=mathfloor(minutesdiff,60);
console.log(hoursdiff);
//day diff
var daydiff=mathfloor(hoursdiff,24);
console.log(daydiff);
//year diff
var yeardiff=getyears(inputdate,currentdate);
console.log(yeardiff);
//months diff
var monthdiff=getmonths(inputdate,currentdate);
console.log(monthdiff);
//display
//first line
let fl=document.createElement("div");
    fl.append(inputdate);
    disp.append(fl);
    //second line
    let sl=document.createElement("div");
    sl.innerText="Year "
    sl.append(yeardiff);
    disp.append(sl);
    //third line
    let tl=document.createElement("div");
    tl.innerText="Month "
    tl.append(monthdiff);
    disp.append(tl);
    //fourth line
    let frl=document.createElement("div");
    frl.innerText="Day ";
    frl.append(daydiff);
    disp.append(frl);
    //fivth line
    let fvl=document.createElement("div");
    fvl.innerText="Hour ";
    fvl.append(hoursdiff);
    disp.append(fvl);
    //sixth line
    let sxl=document.createElement("div");
    sxl.innerText="Minute ";
    sxl.append(minutesdiff);
    disp.append(sxl);
    //seventh line
    let svl=document.createElement("div");
    svl.innerText="Second ";
    svl.append(secondsdiff);
    disp.append(svl);
    //eight line
    let el=document.createElement("div");
    el.innerText="Milli second ";
    el.append(millisecdiff);
    disp.append(el);
}
else{
    console.log("invalid input entered");
}
    

}

function mathfloor(value1,value2){
    return Math.floor(value1/value2);
    }
    
    function getyears(value1,value2){
    var d1=new Date(value1);
    var d2=new Date(value2);
    return d2.getFullYear()-d1.getFullYear();
    }
    
    
    function getmonths(value1,value2){
        var year=getyears(value1,value2);
        var months=(year*12)+(value2.getMonth()-value1.getMonth());
        return months;
    }


