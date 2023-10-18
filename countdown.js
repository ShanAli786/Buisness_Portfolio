// var c = document.getElementById('count')
// var counter = new CountUp('count', 0, 1234, 0, 2.5);
// counter.start();
var arr = document.querySelectorAll('.count');
// console.log(arr);

function countDown(element) {
    var value = element.innerHTML;
    var i = 0;
    var counter = setInterval(function() {
        element.innerHTML = (i);
        increment = Number.parseInt(value.toString()[0]);
        if (i == value)
            clearInterval(counter);

        i += increment;
    }, 15);
}

for (i = 0; i < arr.length; i++) {
    countDown(arr[i]);
}