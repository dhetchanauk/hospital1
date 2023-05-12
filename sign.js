let cred = JSON.parse(localStorage.getItem('cred')) || {};
/* use as reference
let obj = {
    'akka' : ['hi','hello']
}
let name= 'akka';
console.log(obj[`${name}`][1]);
*/
console.log(cred);
function check(){
    let name= document.querySelector('.js-name').value;
    let pass= document.querySelector('.js-pass').value;
    let email = document.querySelector('.js-email').value;
    //console.log(typeof name,name)
    if(cred.hasOwnProperty(name)){
        if(pass === cred[`${name}`][0] && cred[`${name}`][1] === email){
            
            alert('Welcome back!');
            window.open('main.html');
        }else{
            alert('Wrong name or password! Try again');
        }
    }
    else{
        alert('You are not signed up! Please sign up first');
    }
    
}
function signup(){
    let name= document.querySelector('.js-name').value;
    let pass= document.querySelector('.js-pass').value;
    let email = document.querySelector('.js-email').value;
    cred[`${name}`] = [pass, email];
    localStorage.setItem('cred', JSON.stringify(cred));
    
    alert('You are signed up!');
    window.open="signin.html";

}