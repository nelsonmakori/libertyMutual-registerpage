const liberty = document.getElementById('frm');
liberty.addEventListener('submit',(data) => {
  data.preventDefault()
  console.log(data)
   
  const frmData = new FormData(data.target)
  console.log(frmData.get('email'))
  console.log(frmData.get('password'))
  console.log(frmData.get('repeatpassword'))
})

const email = document.querySelector('#email')
const displayEmail = document.querySelector('#displayEmail')
const createAccount = document.querySelector('#createAcount')

email.addEventListener('keyup',()=>{
  displayEmail.innerText = email.value
  //createAccount.style.backgroundColor = 'green'
})
createAccount.addEventListener('click',()=>{
  createAccount.style.backgroundColor = 'green'
  createAccount.style.fontSize = '10px';
})