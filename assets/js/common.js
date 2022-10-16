function alertmsg(status, msg) {
    if (status == true) {
        const toastPlacementExample = document.querySelector('.alertmsg');
        toastPlacementExample.classList.add("bg-success");
        const  textplace = document.querySelector('div.toastmsg');
        textplace.innerText = msg;
        toastPlacement = new bootstrap.Toast(toastPlacementExample);
        return toastPlacement.show();
    } else {
        const toastPlacementExample = document.querySelector('.alertmsg')
        const  textplace = document.querySelector('.toastmsg');
        toastPlacementExample.classList.add("bg-danger");
        textplace.innerText = msg;
        toastPlacement = new bootstrap.Toast(toastPlacementExample);
        return toastPlacement.show();
    }
}