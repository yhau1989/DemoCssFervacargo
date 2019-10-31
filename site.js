
function accessLoginProcees(){

    let loc = window.location.origin;
    //window.location = loc+'/dashboard.html'
    window.location = '/dashboard.html'
}



const expand = (x) => {
    x.classList.toggle('is-active')
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('div.bd-category').forEach( x =>
        x.addEventListener('click', function(){
            x.classList.toggle('is-active')
        }, false)
    );
});
