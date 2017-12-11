function ShowSubMenu () {
    var elem = document.getElementById ('top-submenu');
    elem.className == 'submenu-display' ? elem.className = 'submenu-hidden' : elem.className = 'submenu=display';

}

document.getElementById('prev').onclick =  sliderLeft;
document.getElementById('next').onclick =  sliderRight;
autoSlider ();
//smallautoSlider ();
var left1 = 0;
var left2 = 0;
var left3 = 0;
var timer;
var id;
var line;
var xleft;
var dx;
var maxx;



function sliderRight() {
    var imgline = document.getElementById('imgline');
    left1 = left1 - 962;
    if (left1 < -1924) {
        left1 = 0;
        clearTimeout(timer);
    }
    imgline.style.left = left1 + 'px';
    autoSlider ();
}

function sliderLeft() {
    var imgline = document.getElementById('imgline');
    left1 = left1 + 962;
    if (left1 > -1) {
        left1 = -1924;
        clearTimeout(timer);
    }
    imgline.style.left = left1 + 'px';
    autoSlider ();
}

function autoSlider () {
    timer = setTimeout(function () {

        imgline1 = document.getElementById('imgline');
        imgline2 = document.getElementById('sl-imgline');
        imgline3 = document.getElementById('sr-imgline');

        left1 = left1 - 962;
        left2 = left2 - 319;
        left3 = left3 - 319;

        if (left1 < -1924) {
            left1 = 0;
            clearTimeout(timer);
        }
        imgline1.style.left = left1 + 'px';

        if (left2 < -1595) {
            left2 = 0;
            clearTimeout(timer);
        }
        imgline2.style.left = left2 + 'px';

        if (left3 < -957) {
            left3 = 0;
            clearTimeout(timer);
        }
        imgline3.style.left = left3 + 'px';




        autoSlider ();

    }, 5000);
}



var elems = document.querySelectorAll('li');

elems.forEach(function(elem) {
    elem.addEventListener("click", insert, true);

});

function insert() {
    this.className == 'submenu-display' ? this.className = 'submenu-hidden' : this.className = 'submenu-display';
}


var drops = document.querySelectorAll('div .plus');
drops.forEach(function (t) {
    t.addEventListener("click", plusminus, true);
});

function plusminus () {
    this.innerHTML === '+' ? this.innerHTML = '-' : this.innerHTML = '+';
    }

