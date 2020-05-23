


	/*********************
       Device Detection
    *********************/

   var isWebkit = /Webkit/i.test(navigator.userAgent),
   isChrome = /Chrome/i.test(navigator.userAgent),
   isMobile = !!("ontouchstart" in window),
   isAndroid = /Android/i.test(navigator.userAgent),
   isIE = document.documentMode;

/******************
   Redirection
******************/

if (isMobile && isAndroid && !isChrome) {
   alert("Although Velocity.js works on all mobile browsers, this 3D demo is for iOS devices or Android devices running Chrome only. Redirecting you to Velocity's documentation.");
   window.location = "index.html";
}

/***************
   Helpers
***************/

/* Randomly generate an integer between two numbers. */
function r (min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Override the default easing type with something a bit more jazzy. */
//$.Velocity.defaults.easing = "easeInOutsine";



var screenWidth = window.screen.availWidth;
var	screenHeight = window.innerHeight ;
var	chromeHeight = screenHeight - (document.documentElement.clientHeight || screenHeight);



var nabarHeight = parseInt($("#mynavbar").css("height"));

//$("svg").css("height", (screenHeight-nabarHeight) + "px").css("width", screenWidth + "px");



//alert("Test");


// $(function(){


// var $logo = {};

// $logo.red = $("#Red");
// $logo.yellow = $("#Yellow");
// $logo.background = $("#Backround rect");
// $logo.whiteBgIcon = $("#WhiteBgIcon");
// $logo.icon = $("#Icon");
// $logo.wings = $("#Wings");


const startWheelRotationIn = 300;


const startZoomIn = 3000;

const showNavigationtext = 3500;

const startWheelRotationOut = 3000; //Duration 2300

const startRemoveMasks = 3500;


var tl_ShowLogo = anime.timeline({
   easing: "easOutExpo",
   duration: 750,
   autoplay: true
});







//WheelRotationIn:
tl_ShowLogo.add({
   targets: "#WingYellow",
   //opacity: 0,
   translateX: [-140, 0],
   translateY: [-140, 0],
   duration: 1800,
   //delay: 500,
   easing: "easeInOutSine"
}, startWheelRotationIn);

tl_ShowLogo.add({
   targets: "#WingRed",
   //opacity: 0,
   translateX: [140, 0],
   translateY: [140, 0],
   duration: 1000,
   //delay: 500,
   easing: "easeInOutSine"
}, startWheelRotationIn+800);


tl_ShowLogo.add({
   targets: "#Wings",
   //opacity: 0,
   transform: ["rotate(-900 500 500)", "rotate(0 500 500)"],
   duration: 2000,
   easing: "easeInOutSine" 
}, startWheelRotationIn);





// Show navigation text
tl_ShowLogo.add({
   targets: ".nav-item a",
   opacity: [0, 1.0],
   //translateX: [-screenWidth, 0],
   translateY: [nabarHeight*3, 0],
   //transform: ["rotate(-900 500 500)", "rotate(0 500 500)"],
   duration: 2000,
   delay: anime.stagger(300),
   easing: "easeInOutCirc" 
}, showNavigationtext);



/*
tl_ShowLogo.add({
   targets: "#WingUR",
   translateX: [0, -141],
   translateY: [0, 141],
   duration: 1800,
   easing: "easeInOutSine"
}, startWheelRotationOut+2300-1800);

tl_ShowLogo.add({
   targets: "#WingDR",
   translateX: [0, -141],
   translateY: [0, -141],
   duration: 2300,
   easing: "easeInOutSine"
}, startWheelRotationOut+2300-2300);

tl_ShowLogo.add({
   targets: "#WingDL",
   translateX: [0, 141],
   translateY: [0, -141],
   duration: 2000,
   easing: "easeInOutSine"
}, startWheelRotationOut+2300-2000);

tl_ShowLogo.add({
   targets: "#WingUL",
   translateX: [0, 141],
   translateY: [0, 141],
   duration: 1500,
   easing: "easeInOutSine"
}, startWheelRotationOut+2300-1500);

tl_ShowLogo.add({
   targets: "#WingsOut",
   transform: ["rotate(-900 500 500)", "rotate(0 500 500)"],
   duration: 2300,
   easing: "easeInOutSine" 
}, startWheelRotationOut);



*/











//RemoveMasks:
//  tl_ShowLogo.add({
//          targets: "#Wings",
//          opacity: 0,
//          duration: 3,
//          easing: "easeInOutSine"
//      }, startRemoveMasks);
//  tl_ShowLogo.add({
//          targets: ["#WhiteBgIcon", "#BigWingMask"],
//          opacity: 0,
//          duration: 3,
//          easing: "easeInOutSine"
//      }, startRemoveMasks+4);



tl_ShowLogo.add({
     targets: ["#Wings", "#Backround"],
     opacity: 0,
     duration: 1000,
     easing: "easeInOutSine"
 }, startRemoveMasks);

tl_ShowLogo.add({
     targets: ["#WhiteBgIcon", "#BigWingMask", "#TextUp", "#TextDown", "#Icon", "#WingsOut"],
     opacity: 0,
     duration: 1000,
     easing: "easeInOutSine"
 }, startRemoveMasks+500);







//Zoom in:
tl_ShowLogo.add({
  targets: "svg",
  viewBox: ["160 160 680 680", "320 392 340 280"],
  duration: 1800,
  easing: "easeInOutSine"
}, startZoomIn);


//Expand:
tl_ShowLogo.add({
  targets: "svg",
  //opacity: [1.0, 0.0],
  viewBox: ["320 392 340 280", "320 392 1100 280"],
  duration: 500,
  easing: "easeInOutSine"
}, startZoomIn+1800);

tl_ShowLogo.add({
  targets: "#Titel",
  duration: 1800,
  translateX: [300, 0],
  easing: "easeInOutSine"
}, startZoomIn+1800);


tl_ShowLogo.add({
  targets: "#SubTitel",
  duration: 1600,
  translateX: [500, 0],
  easing: "easeInOutSine"
}, startZoomIn+1800+200);


//$("svg").css("height", (screenHeight-nabarHeight) + "px").css("width", screenWidth + "px");


//$("#content").css("display", "none");


//tl_ShowLogo.finished.then(function(){
//    //$("#animation").css("display", "none");
//});
//
//
//animationState = 1;
//
//window.addEventListener("wheel", function(){
//    if(1 === animationState){
//        tl_ShowLogo.play();
//        animationState++;
//    }
//    if(2 === animationState && tl_ShowLogo.completed){
//        tl_ShowLogo.play();
//        animationState++;
//    }
//})



