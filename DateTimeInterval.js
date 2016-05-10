

//var startDate1;
//var endDate2;

//document.getElementById("demo2").innerHTML= myURLFunction();
//console.log("MyUrlFunction is complete");
//fetchDates();
//console.log("fetchDates is complete");
//document.getElementById("timeinterval").innerHTML = startDate1;
function fetchDates(){
 
  //window.location.href = "http://myapp.com";
 // URL myURL = new URL("http://myapp.com/");
  
 
  document.getElementById("Option1").style.visibility = "visible";
  document.getElementById("Option2").style.visibility = "visible";
  document.getElementById("Option3").style.visibility = "visible";
  document.getElementById("Option4").style.visibility = "visible";
  document.getElementById("Option5").style.visibility = "visible";
  
  
  var startDate = (document.getElementById("fromDate").value +"T"+ document.getElementById("fromTime").value);
  //document.getElementById("demo2").innerHTML = startDate;
  //var startDate1 = new Date(startDate);
  var startDate1 = new moment(startDate);//.format("YYY-MM-DD h:mm:ss");
  //window.alert(startDate1);
  var endDate =(document.getElementById("toDate").value+"T"+document.getElementById("toTime").value);
  //var endDate2 = new Date(endDate);
  var endDate2 = new moment(endDate);
  var duration = moment.duration(endDate2.diff(startDate1));
  var days = Math.floor(duration.asDays());
  var hours = Math.floor(duration.hours());
  var minutes = Math.floor(duration.minutes());
  displayOptions(days);
  document.getElementById("demo1").innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' minutes';
  var urlUpdate = "?from="+startDate+"&to="+endDate;
  window.history.pushState(null,null, urlUpdate);
  
}

function displayOptions(days){

        
    if(days>=7 && days<31){
	  document.getElementById("Option1").style.visibility = "hidden";
  }else if(days>=31 && days<365){
	    document.getElementById("Option1").style.visibility = "hidden";
	    document.getElementById("Option2").style.visibility = "hidden";
  }else if(days>=365){
	    document.getElementById("Option1").style.visibility = "hidden";
	    document.getElementById("Option2").style.visibility = "hidden";
		document.getElementById("Option3").style.visibility = "hidden";
  }else if(days <=0){
	  window.alert("Invalid");
	  document.getElementById("Option1").style.visibility = "hidden";
	    document.getElementById("Option2").style.visibility = "hidden";
		document.getElementById("Option3").style.visibility = "hidden";
		document.getElementById("Option4").style.visibility = "hidden";
	    document.getElementById("Option5").style.visibility = "hidden";
  }
}



/**Date.daysBetween = function( date1, date2 ) {
  //Get 1 day in milliseconds
  
  var one_day=1000*60*60*24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date2_ms - date1_ms;
  //take out milliseconds
  difference_ms = difference_ms/1000;
  var seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  var hours = Math.floor(difference_ms % 24);  
  var days = Math.floor(difference_ms/24);
  displayOptions(days);
  	
  
  return days + ' days ' + hours + ' hours ' + minutes + ' minutes';
}
*/
 


//Taking dates from url
function myURLFunction() {

    //var linkUrl = "http\\:myapp.com?from=2012-10-25T11:00:00&to=2012-10-27T13:00:00";
	
    var linkUrl = window.location.href;//"?from=2015-10-21T11:00:00&to=2015-10-27T13:15:00";
	window.history.pushState(null,null, linkUrl+"?from=2015-10-21T11:00:00&to=2015-10-27T13:15:00");
    var parts=linkUrl.split("=");
    var StartDate=parts[1];
    var EndDate=parts[2];
    var mainstartDate=StartDate.slice(0,-12);
    var re = /(\d{2})\:(\d{2})\:(\d{2})/
    var startTime = parts[1].match(re);
    var mainstartTime=startTime.slice(0,-3);
    var mainendDate=EndDate.slice(0,-9);
    var endTime = parts[2].match(re);
    var mainendTime=endTime.slice(0,-3);
	//console.log("mainstartDate");
    document.getElementById("fromDate").value = mainstartDate;
	document.getElementById("fromTime").value = mainstartTime;
	document.getElementById("toDate").value = mainendDate;
	document.getElementById("toTime").value = mainendTime;
    fetchDates();
    //return
	//document.getElementById("demo2").innerHTML="startDate=\n"+mainstartDate+" startTime=\n" + mainstartTime+" Enddate=\n"+mainendDate+" mainendTime=\n"+mainendTime;
}




//document.getElementById("demo1").innerHTML = Date.daysBetween(startDate1, endDate2) ;