var array = new Array();
var array2= new Array();
var prenum="";
for(i=1;i<=90;i++){
    array2.push(i);
}
if (sessionStorage.length != 0){
    for(i=0;i<=90;i++){
        if(sessionStorage.getItem(i) != null) {
            array.push(i);
            var index = array2.indexOf(i);
            array2.splice(index, 1);
        }
    }
    document.getElementById('number').innerHTML=sessionStorage.key(0);
    document.getElementById('prenumber').innerHTML=sessionStorage.key(1);
    prenum=sessionStorage.key(1);
}

function clearn(){
    sessionStorage.clear();
    array.splice(0,array.length);
    array2.splice(0,array2.length);
    for(i=1;i<=90;i++){
        array2.push(i);
    }
    recreatetable(0);
    document.getElementById('number').innerHTML="";
    document.getElementById('prenumber').innerHTML="";
    prenum="none";
}

function generatenum(){
    var num = array2[Math.floor(Math.random() * array2.length)];
    document.getElementById('number').innerHTML=num;
    document.getElementById('prenumber').innerHTML=prenum;
    recreatetable(num);
    prenum=num;
}

function recreatetable(addkey) {
       
    var boardhtml = "<table border='1'>";
       if(addkey != '0'){
       array.push(addkey);
       sessionStorage.setItem(addkey,"done");
       var index = array2.indexOf(addkey);
       array2.splice(index, 1);
       }
       for(i=1;i<=90;i++){
           if(i==1 || i==31 || i==61){
       
           boardhtml += "<tr>";
       }
       if(array.indexOf(i) > -1){
            boardhtml += "<td bgcolor='red' id='td" + i + "'><font size='6'>" + i + "</font></td>";
       } else {
            boardhtml += "<td id='td" + i + "'><font size='6'>" + i + "</font></td>";
       }
       if(i==30 || i==60 || i==90){       
        boardhtml += "</tr>";
       }
      }
    boardhtml += "</table>";
    document.getElementById('board').innerHTML=boardhtml;
}
recreatetable(0);