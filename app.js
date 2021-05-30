

var milSec = document.getElementById('mil-sec');
var sec = document.getElementById('sec');
var mints = document.getElementById('min');
var hr = document.getElementById('hr');


var timeInterval;

function startCount(){
  timeInterval = setInterval(function(){
    milSec.innerHTML = Number(milSec.innerHTML) + 1;

    if(milSec.innerHTML > 9){
      var msZero = document.getElementById('ms0');
      msZero.style.display = "none";
    }
    if(milSec.innerHTML > 99){
      sec.innerHTML = Number(sec.innerHTML) + 1;
      milSec.innerHTML = 0;
    }

    if(sec.innerHTML > 9){
      var sZero = document.getElementById('s0');
      sZero.style.display = "none";
    }
    if(sec.innerHTML > 5){
      mints.innerHTML = Number(mints.innerHTML) + 1;
      sec.innerHTML = 0;
    }

    if(mints.innerHTML > 9){
      var mZero = document.getElementById('m0');
      mZero.style.display = "none";
    }
    if(mints.innerHTML > 3){
      hr.innerHTML = Number(hr.innerHTML) + 1;
      mints.innerHTML = 0;
    }


    if(hr.innerHTML > 9){
      var hZero = document.getElementById('h0');
      hZero.style.display = "none";
    }
    
    
    
  },10);
}

function reset(){

  milSec.innerHTML = '0';
  console.log(milSec.innerHTML);
  sec.innerHTML = '0';
  console.log(sec.innerHTML);
  mints.innerHTML = '0';
  console.log(mints.innerHTML);
  hr.innerHTML = '0';
  console.log(hr.innerHTML);
  
}



function stopCount(){
  clearInterval(timeInterval)
}
