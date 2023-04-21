const form = document.querySelector(".fields")
const container = document.querySelector("#email-container")
const emailInput = form.elements.email
const messageError = document.createElement("small")

form.addEventListener("submit",(event)=>{
    
    const emailRegex = (/[A-Z]/)
    if (emailRegex.test(emailInput.value)) {
        event.preventDefault();        
        messageError.innerHTML = "Please use lowercase only"
        container.appendChild(messageError)
    }

})