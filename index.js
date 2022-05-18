console.log("Working...");
// function clock(){
//     // let hours=document.querySelector("span.hours-digit").appendChild(h);
//     // let minutes=document.querySelector("span.mins-digit").appendChild(m);
//     // let seconds=document.querySelector("span.secs-digit").appendChild(s);
//     // let meridian=document.querySelector("spa.AMPM").appendChild(meridian);


//     //object for date method
//     let obj=new Date();
//     var h=obj.getHours();
//     let m=obj.getMinutes();
//     let s=obj.getSeconds();

//     //meridian condition for AM and PM
//     if(h==12){
//         meridian.textContent="PM";
//     }
//     else if(h==24){
//         meridian.textContent="AM";
//     }
//     else if(h>12){
//         h=h-12;
//         meridian.textContent="PM";
//     }
//     else{
//         meridian.textContent="AM";
//     }

//     // hours.textContent=zeroAppend(h);
//     // minutes.textContent=zeroAppend(m);
//     // seconds.textContent=zeroAppend(s);
//     let hours=document.querySelector("span.hours-digit").textContent.appendChild(h);
//     let minutes=document.querySelector("span.mins-digit").textContent.appendChild(m);
//     let seconds=document.querySelector("span.secs-digit").textContent.appendChild(s);
//     let meridian=document.querySelector("span.AMPM").textContent.appendChild(meridian);

// }
// setInterval(clock,1000);

function clock(){
    var date = new Date();
    var hours= date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    let time="AM";
    if(hours>12){
        time="PM";
    }
    let wakeup=document.getElementsByClassName("wakeup_dropdown").value;
let lunch=document.getElementsByClassName("lunch_dropdown").value;
let nap=document.getElementsByClassName("nap_dropdown").value;
let night=document.getElementsByClassName("night_dropdown").value;

if(wakeup==hours){
    document.getElementById("changeImage").style.backgroundImage = "url('MorningPic.png')";
}
if(lunch==hours){
    document.getElementsByClassName("wish-text").innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    document.getElementsByClassName("food-text").innerHTML = "LETS HAVE SOME LUNCH !!";
    document.getElementById("changeImage").style.backgroundImage = "url('afternoon.png')";
}
if(nap==hours){
    document.getElementsByClassName("wish-text").innerHTML = "GOOD EVENING !!";
    document.getElementsByClassName("food-text").innerHTML = "STOP YAWNING , GET SOME TEA !!";
    document.getElementById("changeImage").style.backgroundImage = "url('lunch.png')";
}
if(night==hours){
    document.getElementsByClassName("wish-text").innerHTML = "GOOD NIGHT !!";
    document.getElementsByClassName("food-text").innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP !!";
    document.getElementById("changeImage").style.backgroundImage = "url('night.png')";
}


    hours=(hours>12) ? hours-12 : hours ;
    hours= ((hours - 12) <10 ) ? 0 + hours : hours;
    var hrs=document.getElementsByClassName("hours-digit");
    var mm=document.getElementsByClassName("mins-digit");
    var ss=document.getElementsByClassName("secs-digit");

    hrs[0].innerText = hours;
    mm[0].innerText = min;
    ss[0].innerText = sec;

    let tim=document.getElementsByClassName("AMPM");
    tim[0].innerHTML = time ;

    var t = setTimeout(function(){ clock() }, 1000); 
    displayvalue();


}

function displayvalue(){
    let wakeup=document.getElementById("wakeup_dropdown").value;
    let lunch=document.getElementById("lunch_dropdown").value;
    let nap=document.getElementById("nap_dropdown").value;
    let night=document.getElementById("night_dropdown").value;
    

    var wakeValue = document.getElementById("wakeup_dropdown");
    var value1 = wakeValue.options[wakeValue.selectedIndex].text;

    var lunchValue = document.getElementById("lunch_dropdown");
    var value2 = lunchValue.options[lunchValue.selectedIndex].text;

    var napValue = document.getElementById("nap_dropdown");
    var value3 = napValue.options[napValue.selectedIndex].text;

    var nightValue = document.getElementById("night_dropdown");
    var value4 = nightValue.options[nightValue.selectedIndex].text;

    if (waketime == "none") {
        document.getElementById("waketime").innerHTML = "";
      } else {
        document.getElementById("waketime").innerHTML =
          "Wake up time : " + value1;
      }
  
      if (lunchtime == "none") {
        document.getElementById("lunchtime").innerHTML = "";
      } else {
        document.getElementById("lunchtime").innerHTML =
          "Lunch time : " + value2;
      }
  
      if (naptime == "none") {
        document.getElementById("naptime").innerHTML = "";
      } else {
        document.getElementById("naptime").innerHTML = "Nap time : " + value3;
      }
      if (nighttime == "none") {
          document.getElementById("nighttime").innerHTML = "";
        } else {
          document.getElementById("nighttime").innerHTML = "Night Time : " + value4;
        }
}
clock();
