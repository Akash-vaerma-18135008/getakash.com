
$(document).scroll(function() {
var y = $(this).scrollTop();
console.log(y);
if (y > 192) {
    $('.about--heading').addClass("moveToOriginal");
} 
if (y > 325) {
    $('.about--first-row div').addClass("rotateToOriginal");
} 
if (y > 650) {
    $('.about--second-row .image-container').addClass("moveToOriginal");
    $('.about--second-row .skill-container').addClass("moveToOriginal");
} 
if (y > 1286) {
    $('.projects--main-heading-animtd').addClass("moveToOriginal");
} 
if (y > 1637) {
    $('.projects--container').addClass("opacity_1");
} 
if (y > 2283) {
    $('.certifications-heading').addClass("moveToOriginal");
} 
if (y > 2465) {
    $('.card-img-top').addClass("opacity_1");
} 
if (y > 2866) {
    $('.contact h1').addClass("moveToOriginal");
} 
if (y > 3071) {
    $('.contact-form-input').addClass("showToOriginal");
} 
});