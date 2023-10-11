const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const Velocidade Permitida= form.invelocidadePermitida.value
    const Velocidade do condutor= form.invelocidadedocondutor.value

