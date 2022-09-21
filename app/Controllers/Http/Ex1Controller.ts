// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Ex1Controller {

    store({ request }) {
        const dados = request.only('salario')

        const salarioFinal = dados.salario <= 2000 ? dados.salario * 1.5 : dados.salario * 1.3

        return { salarioFinal }

    }
}
