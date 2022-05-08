var icon=document.getElementById('icon');
icon.onclick=function(){
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains("light-theme")){
        icon.src="../media/dark theme icon/sun.jpg";
        
    }else{icon.src="../media/OIP.jpg";}
}

