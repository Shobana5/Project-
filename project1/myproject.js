function lines(event){
    event.preventDefault();
    var name=document.getElementById('name');
    var email=document.getElementById('email');
    var message=document.getElementById('message');
    var success= document.getElementById('success');
    var danger=document.getElementById('danger');

    if(name.value ===''|| email.value ===''|| message.value===''){
        danger.style.display='block';
        success.style.display='none';

    }
    else{
        danger.style.display='none';
        success.style.display='block';
        setTimeout(() =>{
            name.value ='';
            email.value='';
            message.value='';
        },2000);
    }

    setTimeout(() =>{
        danger.style.display ='none';
        danger.style.display ='none';
    },4000);
}
