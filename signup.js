document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector("#login");
    const CreateAccountform = document.querySelector("#CreateAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click" , () => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        CreateAccountform.classList.remove("form--hidden");

    });

    document.querySelector("#linkLogin").addEventListener("click" , () => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        CreateAccountform.classList.add("form--hidden");

    });

});