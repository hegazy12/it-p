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
