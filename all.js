
$(document).ready(function () {

  $(window).scroll(function () {
    var value = $(this).scrollTop();  // changing to 8721
    var totalHeight = $(document.body).height()  // 8721
    var windowHeight = $(window).height() // 969

    console.log(value, totalHeight, windowHeight)

    $(".background").css("top", `${value / 2}px`)
    $(".moon").css("left", `${-value / 2}px`)
    $(".mountain").css("top", `${-value * 0.15}px`)
    $(".road").css("top", `${value * 0.15}px`)
    $(".title").css("top", `${value}px`)

    //  nav animate
    if(value >= windowHeight){
      $('nav').addClass('lock')
    }else{
      $('nav').removeClass('lock')
    }

    if(value > 0 && value < windowHeight * 1.5){
      switchClass('.mercury')
    }else if(value > windowHeight * 1.5 && value < windowHeight * 2.5){
      switchClass('.venus')
    }else if(value > windowHeight * 2.5 && value < windowHeight * 3.5){
      switchClass('.earth')
    }else if(value > windowHeight * 3.5 && value < windowHeight * 4.5){
      switchClass('.mars')
    }else if(value > windowHeight * 4.5 && value < windowHeight * 5.5){
      switchClass('.jupiter')
    }else if(value > windowHeight * 5.5 && value < windowHeight * 6.5){
      switchClass('.saturn')
    }else if(value > windowHeight * 6.5 && value < windowHeight * 7.5){
      switchClass('.uranus')
    }else if(value > windowHeight * 7.5 && value < windowHeight * 8.5){
      switchClass('.neptune')

    }
  });


  // control navbar animate 
$('.circle').click(function(){
  $(this).toggleClass('active');
  $(this).siblings().removeClass('active');
})
  $('nav').on('click','a', function (e) {
      e.preventDefault();
      const anchor = $(this).attr('href');
      const linkScroll = $(anchor).offset().top;
      $('html,body').stop().animate({ 
          scrollTop: linkScroll -0
      },700)
  });
});

function switchClass(planet){
  $(planet).addClass('active')
  $(planet).siblings().removeClass('active')
  return
}

 

var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();
var tl8 = new TimelineMax();


var controller1 = new ScrollMagic.Controller();
scrollMagic(tl1, '.Mercury')
var scene1 = new ScrollMagic.Scene({
  triggerElement: '.MercurySection',
  offset: 100
})
  .setTween(tl1)
  .addTo(controller1);

var controller2 = new ScrollMagic.Controller();
scrollMagic(tl2, '.Venus')
var scene2 = new ScrollMagic.Scene({
  triggerElement: '.VenusSection',
  offset: 100
})
  .setTween(tl2)
  .addTo(controller2);

var controller3 = new ScrollMagic.Controller();
scrollMagic(tl3, '.Earth')
var scene3 = new ScrollMagic.Scene({
  triggerElement: '.EarthSection',
  offset: 100
})
  .setTween(tl3)
  .addTo(controller3);

var controller4 = new ScrollMagic.Controller();
scrollMagic(tl4, '.Mars')
var scene4 = new ScrollMagic.Scene({
  triggerElement: '.MarsSection',
  offset: 100
})
  .setTween(tl4)
  .addTo(controller4);

var controller5 = new ScrollMagic.Controller();
  scrollMagic(tl5, '.Jupiter')
var scene5 = new ScrollMagic.Scene({
  triggerElement: '.JupiterSection',
  offset: 100
})
  .setTween(tl5)
  .addTo(controller5);

var controller6 = new ScrollMagic.Controller();
scrollMagic(tl6, '.Saturn')
var scene6 = new ScrollMagic.Scene({
  triggerElement: '.SaturnSection',
  offset: 100
})
  .setTween(tl6)
  .addTo(controller6);

var controller7 = new ScrollMagic.Controller();
  scrollMagic(tl7, '.Uranus')
var scene7 = new ScrollMagic.Scene({
  triggerElement: '.UranusSection',
  offset: 100
})
  .setTween(tl7)
  .addTo(controller7);

var controller8 = new ScrollMagic.Controller();
scrollMagic(tl8, '.Neptune')
var scene8 = new ScrollMagic.Scene({
  triggerElement: '.NeptuneSection',
  offset: 100
})
  .setTween(tl8)
  .addTo(controller8);


function scrollMagic(tl,planet){
  //  scroll
  tl.from(planet, 2, {scale:15, opacity: 0.1})
  tl.to(planet, 1, {scale:1, opacity: 1})
  tl.from(planet + 'Article', 1, {x:200, opacity: 0}, "=-1")
  tl.to(planet + 'Article', 1, {x:0, opacity: 1})
  tl.from(planet + 'Background', 1, {x:-200, opacity: 0}, "=-2")
  tl.to(planet + 'Background', 1, {x:0, opacity: 1})
}



//   function number(value) {   
//     var num = $("#number");   
//     num.animate({count: value}, {   
//       duration: 3000, //持续时间  
//       step: function() {   
//         num.text(Math.round(this.count));   
//       }   
//     });   
//   };  
//   number(100); 