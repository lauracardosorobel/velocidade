const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const permitida= number (form.inVelocidadePermitida.value)
    const condutor= number (form.inVelocidadedocondutor.value)
    let leve= permitida + (permitida * 0.2)

    if(condutor <= permitida){
        resp.innerText= 'Situação: Sem Multa'

    } else if(condutor <= leve) {
        resp.innerText= 'Situação: Multa leve'

    } else {
        resp.innerText= 'Situação: Multo grave'
    
    }
})
