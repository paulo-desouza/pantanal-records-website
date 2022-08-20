function copyEmail() {
   
    var copyText = document.getElementById("myEmail");

    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
    navigator.clipboard.writeText(copyText.value);
  
   
    alert("Email Copiado! " + copyText.value);
  } 