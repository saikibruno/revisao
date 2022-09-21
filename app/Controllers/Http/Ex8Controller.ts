// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Ex8Controller {
    store({ request }) {
        const salario = request.input('salario')
        const codicoCargo = request.input('codicoCargo')

        const aumentoSalario = codicoCargo == 101 ? salario * 1.05 : codicoCargo == 102 ? salario * 1.075 : codicoCargo == 103 ? salario * 1.1 : salario * 1.15

        const diferenca = aumentoSalario - salario

        return {salario,aumentoSalario,diferenca}
    }
}
