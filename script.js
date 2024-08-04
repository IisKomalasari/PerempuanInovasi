// Tambahkan kode JavaScript kalian di file ini
function handleGetFormData(){
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const city = document.getElementById('city').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;
  return{
      name : name,
      email: email,
      city : city,
      zipCode : zipCode,
      status : status
  };
}

function isNumber(string){
  for(let i=0; i<string.length; i++){
      if (isNaN(parseInt(string[i]))){
          return false;
      }
  }
  return true;
}


function checkboxIsChecked(){
  return document.getElementById('status').checked;
}

function validateFormData(formData){
  return formData && 
  formData.name !=="" && 
  formData.email !=="" && 
  formData.city !=="" && 
  isNumber(formData.zipCode) && 
  checkboxIsChecked();
}

function submit(){
  const warningDiv = document.getElementById("warning");
  const formData = handleGetFormData();
  if (!validateFormData(formData)) {
      warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
      warningDiv.textContent = "";
  }


document.getElementById("submit-form").addEventListener("click",(event)=> {
  event.preventDefault();
  submit();
})
}

document.getElementById('more-info').addEventListener('click', function() {
  alert('Informasi selengkapnya akan ditampilkan pada slide selanjutnya');
});

document.getElementById('button-selengkapnya').addEventListener('click', function() {
  var visi = document.getElementById('visi');
  if (visi.style.display === 'none') {
      visi.style.display = 'block';
  } else {
      visi.style.display = 'none';
  }
});

