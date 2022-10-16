// select all the btns
const btns = document.querySelectorAll('.btn');
// select the html where text will get filled
const counter = document.getElementById('counterView');

// add click event
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        if (e.currentTarget.classList.contains('increase') == true) {
            counter.innerText++
        } else if (e.currentTarget.classList.contains('decrease')) {
            counter.innerText--
        } else {
            counter.innerText = 0;
        }

        if(counter.innerText > 0){
            counter.classList.add("text-success");
        }else{
            counter.classList.add("text-danger");
        }
    });
}); 