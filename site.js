
function accessLoginProcees(){

    let loc = window.location.origin;
    //window.location = loc+'/dashboard.html'
    window.location = './dashboard.html'
}

function downloadProforma()
{
   // window.location = '/shared/12150784.pdf'
    window.open('./shared/12150784.pdf', '_blank');
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
