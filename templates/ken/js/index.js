function showBlock(target, a) {
    var target = document.querySelector(target);
    if(target.className == "fadeOut") {
        target.style.display = "";
        target.className = "fadeIn";
        a.childNodes[0].className = "fa fa-arrow-up";
        a.childNodes[0].innerHTML = " Less";
    }
    else {
        target.className = "fadeOut";
        target.style.display = "none";
        a.childNodes[0].className = "fa fa-arrow-down";
        a.childNodes[0].innerHTML = " More";
    }
}

function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}

var windowScrollCount = 0;
window.onload = function() {
    window.onscroll = function() {
        var badge = document.querySelector('#badge'),
            badgeLine = document.querySelector('#badge-line'),
            isPositionFixed = (badge.classList.contains('fix-badge-top-corner')),
            atPosition = getOffset(badgeLine).top - 250,
            scrollPosition = document.querySelector('body').scrollTop;
            console.log(windowScrollCount++);

            // Firefox needs the window position, not the body
            if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
                scrollPosition = document.querySelector('html').scrollTop;                
            }

        if(scrollPosition == 0){
            badge.classList.remove("fix-badge-top-corner");        
        }
        if (scrollPosition > atPosition) {
            badge.classList.add("fix-badge-top-corner");
            badge.classList.add("slideRight");
            badge.classList.remove("slideLeft");
        }
        else if (scrollPosition < atPosition && isPositionFixed){
            badge.classList.remove("fix-badge-top-corner");
            badge.classList.remove("slideRight");
            badge.classList.add("slideLeft");
        }
    }
};

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop == to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

document.querySelector('#badge').addEventListener('click', function() {
    var body = document.body;
    //scroll to top
    // Firefox needs to scroll the window, not the body
    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
        body = document.querySelector('html');                
    }
    scrollTo(body, 0, 600);
});