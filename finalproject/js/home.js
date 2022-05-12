function openfunction(){
    document.getElementById("menu").style.width="300px";   
    document.getElementById("mainbox").style.marginLeft="300px"
}
function closefunction(){
    document.getElementById("menu").style.width="0px";
    document.getElementById("mainbox").style.marginLeft="0px"    
    document.getElementById("mainbox").innerHTML="&#9776; Games"
}
var body = document.body;

function count(countBegin, countEnd, element, time) {
  var inc = 1;
  var timer = setInterval(function() {
    if (countBegin >= countEnd) {
      element.innerHTML = countEnd;
      clearInterval(timer);
    } else {
      if (countBegin % 10 <= 5 || countBegin % 100 <= 5) {
        inc += 1;
      }
      countBegin += inc;
      element.innerHTML = countBegin;
    }
  }, time);
}

function checker() {
  var height = body.scrollHeight;
  var ratio;

  if (height > 4000) {
    ratio = 0.75;
  } else if (height > 3500) {
    ratio = 0.8;
  } else if (height > 2100) {
    ratio = 0.65;
  }
  if (window.scrollY > height * ratio) {
    console.log("Start at: ", window.scrollY);
    count(0, 5000, document.querySelector("#A"), 10);
    count(0, 300, document.querySelector("#B"), 50);
    count(0, 1200, document.querySelector("#C"), 30);
    count(0, 6000, document.querySelector("#D"), 10);
    window.removeEventListener("scroll", checker);
  }
}
window.addEventListener("scroll", checker);


var icon=document.getElementById('icon');
icon.onclick=function(){
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains("light-theme")){
        icon.src="../media/dark theme icon/sun.jpg";
        
    }else{icon.src="../media/OIP.jpg";}
}

var sum = 0;
function add_to_cart(price)
{
    sum+=price;
    if(confirm("Are you sure you want to add it to the cart?"))
    {
        alert("Added to cart successfully");
    }
    else
    {
        sum-=price;
        alert("Discarded from your cart");
    }
}
function confirming()
{
    if(sum == 0)
    {
        alert("Your cart is empty")
    }
    else if(confirm("The price for your stuff is :" +  sum + "; continue?"))
    {
        alert("Your order has been placed");
        alert("Your cart has been cleared");
        sum = 0;
    }
    else
    {
        if(confirm("Do you want to cancel clear your cart?"))
        {
            sum = 0;
            alert("Your cart has been cleared");
        }
    }
}
function show1(){
    document.getElementById('div1').style.display ='none';
    document.getElementById("req1").required = false ;
    document.getElementById("req2").required = false ;
    document.getElementById("req3").required = false ;
  }
  function show2(){
    document.getElementById('div1').style.display = 'block';
    document.getElementById("req1").required = true ;
    document.getElementById("req2").required = true ;
    document.getElementById("req3").required = true ;
  }

  var icon=document.getElementById('icon');
icon.onclick=function(){
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains("light-theme")){
        icon.src="../images/dark theme icon/sun.jpg";
    }else{icon.src="../images/OIP.jpg";}
}

var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
if(theme_key==1){
    link.href = 'css/style.min.css';
}else if(theme_key ==2){
    link.href = 'css/style2.min.css';
}
head.appendChild(link);
var link2 = document.createElement('link');
link2.rel = 'stylesheet';
link2.type = 'text/css';
if(theme_key==1){
    link2.href = 'css/footerHeader1.css';
}else if(theme_key ==2){
    link2.href = 'css/footerHeader2.css';
}
head.appendChild(link2);