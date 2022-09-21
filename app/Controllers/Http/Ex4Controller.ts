// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Ex4Controller {

    store({ request }) {
        const dados = request.body()

        const valorHora = dados.valorMinimo * 0.2
        const salarioMes = valorHora * dados.horasTrabalhadas
        const valorPorDependente = dados.numeroDependentes * 32
        const valorHoraExtra = dados.horaExtra * (valorHora * 1.5)
        const salarioBruto = salarioMes + valorPorDependente + valorHoraExtra
        let irrf = 0

        if (salarioBruto >= 2000 && salarioBruto <= 5000) {
            irrf = (salarioBruto * 0.1)
        } else if (salarioBruto > 5000) {
            irrf = (salarioBruto * 0.2)
        }

        const salarioLiquido = salarioBruto - irrf
        let salarioFinal = salarioLiquido <= 3500 ? salarioLiquido + 1000 : salarioLiquido + 500        

        return { salarioFinal}
    }
}
