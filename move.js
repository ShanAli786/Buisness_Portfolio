function runMover() {
    var arr = document.querySelectorAll('.progress-bar');

    function move(element) {
        var value = element.innerHTML;
        var width = 10;
        var mover = setInterval(function() {
            element.style.width = width + "%";
            element.innerHTML = width + "%";
            if (width == value)
                clearInterval(mover);
            width++;
        }, 25);
    }

    for (i = 0; i < arr.length; i++) {
        move(arr[i]);
    }
}
var target = document.querySelector('#skill');

function checkScroll() {
    if (window.scrollY >= target.getBoundingClientRect().top) {
        runMover();
        console.log('I have been reached');
        document.removeEventListener('scroll', checkScroll);
    }
}
document.addEventListener('scroll', checkScroll)