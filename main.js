const header= document.querySelector('header');
const alert=document.createElement('div');
alert.classList.add('warning_alert');
alert.innerHTML=` 
<div>
<b> WARNING</b>: This product contains <b>NICOTINE</b>. Nicotine is an addictive chemical.
</div> <button class="btn btn-primary btn-close btn--close-warning"></button>`
header.prepend(alert)

document.querySelector('.btn--close-warning').addEventListener('click', function(){
    alert.parentElement.removeChild(alert)
})

const h2=document.querySelector('.changestext')
h2.innerHTML ="Quit Smoking"