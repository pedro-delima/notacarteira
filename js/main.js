
// quantidade de acoes
const AcaoItausa = 284
const AcaoAmbev = 200
const AcaoUnipar = 40
const AcaoBancoABC = 46
const AcaoGerdau = 192
const AcaoSanepar = 37
const AcaoAuren = 107
const AcaoTaesa = 71

//nota de risco
const notaItausa = 10
const notaAmbev = 9
const notaUnipar = 7
const notaBancoABC = 8
const notaGerdau = 6
const notaSanepar = 9
const notaAuren = 5
const notaTaesa = 8

const form = window.document.querySelector('form')

form.addEventListener('submit', (e) => {

    const h2 = window.document.querySelector('h2')

    const itausa = Number(form.itausa.value)
    const ambev = Number(form.ambev.value)
    const unipar = Number(form.unipar.value)
    const bancoABC = Number(form.bancoABC.value)
    const gerdau = Number(form.gerdau.value)
    const sanepar = Number(form.sanepar.value)
    const auren = Number(form.auren.value)
    const taesa = Number(form.taesa.value)

    //calculos da nota media

    const calItausa = itausa * AcaoItausa / 100 * notaItausa
    
    const calAmbev = ambev * AcaoAmbev / 100 * notaAmbev

    const calUnipar = unipar * AcaoUnipar / 100 * notaUnipar

    const calBancoABC = bancoABC * AcaoBancoABC / 100 * notaBancoABC

    const calGerdau = gerdau * AcaoGerdau / 100 * notaGerdau

    const calSanepar = sanepar * AcaoSanepar / 100 * notaSanepar

    const calAuren = auren * AcaoAuren / 100 * notaAuren

    const calTaesa = taesa * AcaoTaesa / 100 * notaTaesa

    const soma = calItausa + calAmbev + calUnipar + calBancoABC + calGerdau + calSanepar + calAuren + calTaesa

    const divisao = (itausa * AcaoItausa / 100) + (ambev * AcaoAmbev / 100) + (unipar * AcaoUnipar / 100) + (bancoABC * AcaoBancoABC / 100) + (gerdau * AcaoGerdau / 100) + (sanepar * AcaoSanepar / 100) + (auren * AcaoAuren / 100) + (taesa * AcaoTaesa / 100)

    const total = soma / divisao
    
    h2.innerText = total.toFixed(2)

    e.preventDefault()
})
