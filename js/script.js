function na(){
    nam = document.getElementById('name').value;
    email = document.getElementById('email').value;
    
    if(nam === '' || email === ''){
        alert("Enter Vaild Name and Email");
        return false
    }
}

function ma(){
    n=document.getElementById('n').value;
    e=document.getElementById('e').value;
    m=document.getElementById('m').value;

    if(n==='' || e==='' || m===''){
        alert('Enter Vaild Name and Email and Your Massege')
        return false
    }
}
