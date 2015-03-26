var day = new Date();
var hours = new Array(7);
hours[0]={open:"9:00:00",close:"18:30:00"};
hours[1]={open:"9:00:00",close:"18:30:00"};
hours[2]={open:"9:00:00",close:"18:30:00"};
hours[3]={open:"9:00:00",close:"18:30:00"};
hours[4]={open:"9:00:00",close:"18:30:00"};
hours[5]={open:"9:00:00",close:"18:30:00"};
hours[6]={open:"00:00:00",close:"00:00:00"};

var weekday=new Array(7);
weekday[0]= hours[0];
weekday[1]= hours[1];
weekday[2]= hours[2];
weekday[3]= hours[3];
weekday[4]= hours[4];
weekday[5]= hours[5];
weekday[6]= hours[6];

function currentTime() {
  var d = new Date();
var hour = d.getHours();
  if(hour<10){hour="0"+hour;}
  else if(hour>12)
  {hour=hour - 12;}
var minutes = d.getMinutes();
  if(minutes<10){minutes="0"+minutes;}
var seconds = d.getSeconds();
  if(seconds<10){seconds="0"+seconds;}
var results = hour+':'+minutes+':'+seconds;
document.getElementById('time2').innerHTML = results;
  setTimeout(function() {currentTime();},1000);
  return true;
}




// currentTime(); 

function countDown() {
  var d = new Date();
var hour = d.getHours();
  if(hour<10){hour="0"+hour;}
  else if(hour>12)
  {hour=hour - 12;}
var minutes = d.getMinutes();
  if(minutes<10){minutes="0"+minutes;}
var seconds = d.getSeconds();
  if(seconds<10){seconds="0"+seconds;}
   var open = weekday[day.getDay()].open;
   var close = weekday[day.getDay()].close;
   var timeClose = parseInt(open.substring(0,open.indexOf(":")),10);
   var timeRemaining = Math.floor(timeClose - d.getHours());
  var remMinutes;
  if(minutes>0){
    timeRemaining = timeRemaining - 1;
    remMinutes = 60 - minutes;
    var remSeconds = 60 - seconds;
  }


var timeRemaining = Math.floor(timeClose - d.getHours());
if (timeRemaining < 0) {
    output = "Sorry we are closed already";
} else {
    output = "You have " + timeRemaining + " to come in and shop till you drop";
    document.getElementById('time2').innerHTML = output;
}

 
  if(timeRemaining<0){
      document.getElementById('time').innerHTML ="Sorry We Are Closed";
  } else {
      // document.getElementById('time').innerHTML ='<br><br>Close At: '+timeClose+" pm<br>Time Remaining: Hours:"+timeRemaining+"  Minutes:"+remMinutes+"  Seconds:";
      // var remaining = "Close At:" +timeClose+ " pm<br>Time Remaining: Hours:" +timeRemaining+ ":" +remMinutes+;
      // var close = weekday(d.getDay()).close - 12;
      var remaining = "Close At:" +close+"<br>Still Open for: "+timeRemaining+":"+remMinutes+" minutes";
      document.getElementById('time').innerHTML = remaining;
      
  }
      setTimeout(function() { countDown(); },1000 );
  return true;
 }

countDown();