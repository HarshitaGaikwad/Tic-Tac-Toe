
var b1, b2,b3,b4,b5,b6,b7,b8,b9;
b1= document.getElementById("b1");
b2= document.getElementById("b2");
b3= document.getElementById("b3");
b4= document.getElementById("b4");
b5= document.getElementById("b5");
b6= document.getElementById("b6");
b7= document.getElementById("b7");
b8= document.getElementById("b8");
b9= document.getElementById("b9");

var boxref=document.querySelectorAll("input");

var freezebox=[];

var mywinCnd=[
  [b1,b2,b3],
  [b1,b4,b7],
  [b1,b5,b9],
  [b2,b5,b8],
  [b3,b6,b9],
  [b4,b5,b6],
  [b1,b5,b9],
  [b3,b5,b7],
  [b7,b8,b9]
]


function myfunc() {
 for (var i=0; i<mywinCnd.length;i++) {
  var condition=mywinCnd[i];
  if (condition.every(btn =>btn.value=='X'))
  {
    
    document.getElementById('print').innerHTML="Player X wins!";
    dsballbtn();
    freezebox = freezebox.push(condition);
    return;
    
    
  }
  else if (condition.every(btn =>btn.value=='O'))
  {
    document.getElementById('print').innerHTML="Player O wins!";
   dsballbtn();
   freezebox = freezebox.push(condition);
    return;
  }
 
}
if (count === 9) {
  document.getElementById('print').innerHTML = "It's a Tie!";
}
}

function dsballbtn() {
  
  // for (var k = 0; k < freezebox.length; k++) {
  //   freezebox[k].style.background = 'grey'; // Set background color for each element
  // }

  for (var j = 0; j < boxref.length; j++) {
    boxref[j].disabled = true;
  }
}



function myfunc_2()
{
   location.reload();
   b1=b2=b3=b4=b5=b6=b7=b8=b9="";
}

count=0;
flag=1;
function myfunc_3()
{
  update("b1","X");
}

function myfunc_4()
{
  update("b2","X");
}

function myfunc_5()
{
  update("b3","X");
}

function myfunc_6()
{
  update("b4","X");
}

function myfunc_7()
{
  update("b5","X");
}

function myfunc_8()
{
  update("b6","X");
}

function myfunc_9()
{
  update("b7","X");
}

function myfunc_10()
{
  update("b8","X");
}

function myfunc_11()
{
   update("b9","X");
}
function update(boxId,value)
{
  if (flag==1)
  {
    document.getElementById(boxId).value=value;
    document.getElementById(boxId).disabled=true;
    flag=0;  
    count++;
  }
  else
  {
    document.getElementById(boxId).value='O'; 
    document.getElementById(boxId).disabled=true;
    flag=1;  
    count++;
  }
  myfunc();
}