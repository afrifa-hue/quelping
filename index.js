function search() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.product');
    let word  = document.getElementsByTagName('h3');
    for(var i = 0;i<=word.length;i++){
        let a=item[i].getElementsByTagName('h3')[0];
        let value=a.innerHTML || a.innerText || a.textContent;
        if(value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display="";
        }
        else
        {
           item[i].style.display="none" ;
        }
    }
}
async function registrationSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
        }catch (e) {
            console.log(`SW registration failed`)
        }
    }
}


