// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Ex5Controller {
    store({ request }) {
        const matricula = request.input('matricula')
        const n1 = request.input('n1')
        const n2 = request.input('n2')
        const n3 = request.input('n3')
        const me = request.input('me')

        let conceito = "Valores não validos"
        let mensagem = "Valores não validos"
        if (n1 > 10 || n2 > 10 || n3 > 10 || me > 10) {
            return { conceito, mensagem }
        } else {

            const ma = (n1 + n2 * 2 + n3 * 3 + me) / 7

            if (ma < 4) {
                conceito = "E"
                mensagem = "REPROVADO"
            } else if (ma >= 4 && ma < 6) {
                conceito = "D"
                mensagem = "REPROVADO"
            } else if (ma >= 6 && ma < 7.5) {
                conceito = "C"
                mensagem = "APROVADO"
            } else if (ma >= 7.5 && ma < 9) {
                conceito = "B"
                mensagem = "APROVADO"
            } else if (ma >= 9 && ma <= 10) {
                conceito = "A"
                mensagem = "APROVADO"
            }
            const resposta = { matricula, n1, n2, n3, me, ma, conceito, mensagem }

            return resposta
        }

    }
}
