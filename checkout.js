"use strict";

window.addEventListener("DOMContentLoaded", start);


//Adding the same object from ticket
const Area ={
  area: "area",
  spots: 0,
  available: 0

}

const allRes=[];

const Reservation ={
id:"",
tickets: 0,
tent_four:0,
tent_two:0,
area:"",
amount:0,
vip: false
}


//Function that starts the whole systaaaaam
function start(){
  console.log("start");


  //Here I call functions
  registerButtons();


  prepareData();
}


function registerButtons(){

  //Here I add buttons for the cart
}



function prepareData(){

  let storageVip =localStorage.getItem("vip");
 console.log(storageVip);
 let savedVIP = JSON.parse(storageVip);

console.log(savedVIP);


const cartVIP = Object.create(Reservation);
cartVIP.id = savedVIP.id;
cartVIP.tickets = savedVIP.tickets;
cartVIP.tent_four = savedVIP.tent_four/2;
cartVIP.tent_two = savedVIP.tent_two;
cartVIP.area = savedVIP.area;

allRes.push(cartVIP);

allRes.forEach(displayCart);


}

function displayCart(cartVIP){

  const clone = document.querySelector("#cart").content.cloneNode(true);


  const priceVIP = 1299;
  const tentTwoPrice = 299;
  const tentFourPrice = 399;
  const ticketName = "VIP Festival Ticket";
  const tentTwoName = "2 Person tent";
  const tentFourName = "4 Person tent";

  clone.querySelector("[data-field=cart_camp_area]").textContent= cartVIP.area;
  clone.querySelector("[data-field=cart_vip_ticket]").textContent= ticketName;
  clone.querySelector("[data-field=cart_vip_quantity]").textContent= cartVIP.tickets;
  clone.querySelector("[data-field=cart_vip_price]").textContent = priceVIP + "DKK";
  clone.querySelector("[data-field=cart_vip_total]").textContent= priceVIP * cartVIP.tickets +"DKK";

  clone.querySelector("[data-field=cart_two_tent]").textContent= tentTwoName;
  clone.querySelector("[data-field=cart_two_tent_quantity]").textContent= cartVIP.tent_two;
  clone.querySelector("[data-field=cart_two_tent_price]").textContent= tentTwoPrice;
  clone.querySelector("[data-field=cart_two_tent_total]").textContent = tentTwoPrice * cartVIP.tent_two + "DKK";

  clone.querySelector("[data-field=cart_four_tent]").textContent= tentFourName;
  clone.querySelector("[data-field=cart_four_tent_quantity]").textContent= cartVIP.tent_four;
  clone.querySelector("[data-field=cart_four_tent_price]").textContent= tentFourPrice;
  clone.querySelector("[data-field=cart_four_tent_total]").textContent = tentFourPrice * cartVIP.tent_four + "DKK";
  
  document.querySelector("#cart_table").appendChild(clone);

  timerDesktop();

}


//Timer function and times up
function timerDesktop(){

//Here I set the timer layout to be 05:00 as default
document.querySelector(".timer").innerHTML = "05" + ":" + "08";
//Setting so when calling timerDesktop, the timer for desktop starts
startTimer();

function startTimer(){

//Here I make a variable for the innerHTML for the timer
 const min_sec = document.querySelector(".timer").innerHTML;

//Here I split the the string so it becomes an array of only the four digits for minutes and seconds
 const arraytime = min_sec.split(/[:]+/);

 //Here I set m, my minutes variable, as the first part of the array 0
 let m = arraytime[0];

 //Here I set s, my seconds variable, as the last part of the array 1 -1 for countdown and call the function seconds
 let s = seconds(arraytime[1] - 1);

 //Here I make an if statement saying if seconds hits 59, minutes have to decrement 1 value
 if (s == 59) {
   m = m - 1;
 }

 //Here if minutes are smaller than 0, its only the seconds that returns
 if (m < 0) {
   return;
 }

 //Here I add my minute and seconds variables to the inner HTML, so the timers length is added to the other variable of timer default
 document.querySelector(".timer").innerHTML = m + ":" + s;

 //Here I call the setTimeout function and makes it call the startTImer function every second, therefore its always in loop
 setTimeout(startTimer, 1000);




 //Here I make an if statement saying, if the timer seconds hits the string 00, it stops the settimeOut function
 if(s === "00" && m === "00"){
     clearTimeout(setTimeout, timesUp());
     localStorage.clear("vip");
 } else {
  buy();
 }
 
 function buy(){
   console.log("hej");
 }
 


}
//Here I make the function seconds to make sure when seconds hits under 10 or are over or equal 0, it needs a 0 infront (09), and when its neither its counting down from 59
function seconds(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } 
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}


}

function timesUp(){
  console.log("TIMES UP BIIIIIIITCH");
  
  const timesupPop = document.getElementById("timesup_popup");

  timesupPop.style.display ="block"
  document.querySelector(".timesup_continue").addEventListener("click", closeDownTime);

function closeDownTime(){
  const timesupPop = document.getElementById("timesup_popup");

  timesupPop.style.display ="none"

  location.href = "index.html";
}

}

/* let form = document.querySelector("form");

form.addEventListener("input", test);

function test (e) {
 if(e.target.value.length == e.target.maxLength){
        e.target.nextElementSibling.focus();
          
    }
}
 */


