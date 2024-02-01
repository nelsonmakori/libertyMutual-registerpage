const liberty = document.getElementById('frm');
liberty.addEventListener('submit',(data) => {
  data.preventDefault()
  console.log(data)
   
  const frmData = new FormData(data.target)
  console.log(frmData.get('email'))
  console.log(frmData.get('password'))
  console.log(frmData.get('repeatpassword'))
})