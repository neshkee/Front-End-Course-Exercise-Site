var text = '10';
var num = 10;
var boolVar = true;
var arr = [10, 2, 3, num, boolVar];
var $obj = {
    name: 'Nemanja',
    surname: 'Neske',
    lastName: 'Nesic',
    age: 20
}

// var $bannerTitle = $('.banner-title'); 
// $bannerTitle.css({
//     "color": "red",
//     "background-color": "black"
// });
var $text = $('.text-section-title');
var textColor = $text.css("color");

// var $header = $(".header");
// $header.height(400);


// $bannerTitle.animate({
//     'font-size': 200
// }, 2000);


// $('a')
// $('.klasa')
// $('#id')
// $('') jquery objekat


console.log(textColor);

// 1. Uzeti boju od nav-btn i dodati je footer-titleu

var $navBtn = $('.nav-btn');
var navBtnColor = $navBtn.css("background-color");
var $footerTitle = $('.footer-title');
$footerTitle.css("color", navBtnColor);

// 2.Uzeti fontsize od banner naslova i proslediti header-u u vidu visine 

var $bannerTitle = $('.banner-title');
var $header = $('.header');
var bannerSize = $bannerTitle.css('font-size');
$header.innerHeight(bannerSize);

// 2.cas

//.hide()
//.show()
//.toggle()
//.slideUp()
//.slideDown()
//.slideToggle()
//.fadeIn()
//.fadeOut()
//.fadeToggle()
//.parent() penje se jedan hajrotikal level gore
//.find($title) hajrotikal level dole - prosledjuje se parametar
//.closest() - isto kao find samo na gore
//.prev()
//.next()
//.addClass()
//.removeClass()


// var $banner = $('.banner');
// $banner.fadeOut(1500);

// var $footerTitle = $('.footer-title');
// $footerTitle.closest('.footer').prev().find('.banner').find('.banner-title').addClass('test');

// 2 zad - od header doci do footer i zatim se spusti do copyright i dodati klasu test 2
// css("border", "10px solid red");


// var $header = $('.header');
// $header.next().next().find('.copyright').addClass('test2');

// 3. zadatak
//  od nav-btn doci do nav-list i sakriti ga metodom .hide()  

// var $navBtn = $('.nav-btn');
// $navBtn.prev().find('.nav-list').hide();

// ##################### 3. cas ################################//

// 3.cas

//events

//.ready()
//load - u on-u se pise
//resize - takodje se koristi u on-u
//scroll
//click / .click()
//mousemove
//mouseover / mouseout - i cild i parent radi
//mouseenter / mouseleave  - radi samo za parenta 

// $(window).on('load', function(){
//     console.log('test');
// })

// function test(){
//     console.log('test'); 
// };

// function test22(){
//     alert('sadasd');
// }


// $('.nav-btn').on('click', function(){
//     alert('lol');
// });

// $('.banner').on('mausemove', function(e){
//     var x = e.pageX;
//     var y = e.pageY;
//     console.log('Moving');
// });
