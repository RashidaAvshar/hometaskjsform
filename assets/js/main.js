// document.querySelector("#btn").addEventListener("click", () => {
//   let firstname = document.querySelector("#firstname").value;
//   let lastname = document.querySelector("#lastname").value;
//   let mail = document.querySelector("#mail").value;
//   let password = document.querySelector("#password").value;
//   let confirm = document.querySelector("#confirm").value;
//   let errorMessage = document.querySelector("#error-message");
//   if (password !== confirm) {
//     errorMessage.style.color = "red";
//     errorMessage.innerHTML = "uygun deil";
//   } else {
//     errorMessage.style.color = "green";
//     errorMessage.innerHTML = "uygundur";
//     let data = {
//       firstname,
//       lastname,
//       mail,
//       password,
//       confirm,
//     };
//     console.log(data);
//     document.querySelector("#firstname").value = "";
//     document.querySelector("#lastname").value = "";
//     document.querySelector("#mail").value = "";
//     document.querySelector("#password").value = "";
//     document.querySelector("#confirm").value = "";
//   }
// });


document.querySelector("#btn").addEventListener("click", () => {
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let mail = document.querySelector("#mail").value;
    let password = document.querySelector("#password").value;
    let confirm = document.querySelector("#confirm").value;
    let errorMessage = document.querySelector("#error-message");
    if (password.length<=8) {        
      errorMessage.style.color = "red";
      errorMessage.innerHTML = "minimum 8 simvol";
    } else if(password!==confirm){
        errorMessage.style.color = "red";
      errorMessage.innerHTML = "uygun deil";
    }
    else{
      errorMessage.style.color = "green";
      errorMessage.innerHTML = "uygundur";
      let data = {
        firstname,
        lastname,
        mail,
        password,
        confirm,
      };
      console.log(data);
      document.querySelector("#firstname").value = "";
      document.querySelector("#lastname").value = "";
      document.querySelector("#mail").value = "";
      document.querySelector("#password").value = "";
      document.querySelector("#confirm").value = "";
    }
  });

  password.addEventListener("keyup", ()=>{
    let password=document.querySelector("#password");
    checkError(password.value.length, password);
  });


  function checkError(error, checkInput){
    console.log(error);
    if(error>=8){
        checkInput.style.border="2px solid green";
    }else{
        checkInput.style.border="2px solid red";
    }
    if(error==0){
        checkInput.style.border="none";
    }
  }


