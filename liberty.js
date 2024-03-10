const liberty = document.getElementById('frm');
liberty.addEventListener('submit',(data) => {
  data.preventDefault()
  console.log(data)
   
  const frmData = new FormData(data.target)
  console.log(frmData.get('email'))
  console.log(frmData.get('password'))
  console.log(frmData.get('repeatpassword'))

  const login = document.getElementById('login')
 let password = document.getElementById('password')
 let passwordRepeate = document.getElementById('passwordRepeate')
let displayMessage = document.getElementById('displayMessage')
 let pin;

  pin = passwordRepeate.value
 pin = password.value;
  pin = Number(pin);
  
  if(pin === 12345678){
      displayMessage.textContent = `successfull logged in`
    } else{
      displayMessage.style.color ='red'
      displayMessage.textContent ='wrong password !!'
    }
    
  
  
  
  //else{
   // displayMessage.textContent = `wrong pin`
  //}

})

const email = document.querySelector('#email')
const displayEmail = document.querySelector('#displayEmail')
const createAccount = document.querySelector('#createAcount')

email.addEventListener('keyup',()=>{
  displayEmail.innerText = email.value
  createAccount.style.backgroundColor = 'green'
})

createAccount.addEventListener('click',()=>{
  createAccount.style.backgroundColor = 'green'
  createAccount.style.fontSize = '10px';
})

 
  

   

 
  


