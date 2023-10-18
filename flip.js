function runfliper() {
    function flip(element) {
        element.style.visibility = 'visible';
        element.classList.add('flip-rotate');
    }

    var arr = document.querySelectorAll('.flip');

    var i = 0;
    var delay = 0;

    function loop(arr) {
        setTimeout(function(arr) {
            flip(arr[i]);
            console.log(arr[i].id);
            i++;
            delay = 900;
            if (i < arr.length) {
                loop(arr);
            }
        }, delay, arr);
    }

    loop(arr);
}






var target = document.querySelector('#price');

function checkScroll() {
    if (window.scrollY >= target.getBoundingClientRect().top) {
        runfliper();
        console.log('I have been reached');
        document.removeEventListener('scroll', checkScroll);
    }
}
document.addEventListener('scroll', checkScroll)