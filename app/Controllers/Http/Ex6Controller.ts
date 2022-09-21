// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Ex6Controller {
    store({ request }) {
        const sexo = request.input('sexo')
        const altura = request.input('altura')

        const pesoIdealHomem = (72.7 * altura) - 58
        const pesoIdealMulher = (62.1 * altura) - 44.7

        const resposta = sexo == 'masculino' ? pesoIdealHomem : sexo == 'feminino' ? pesoIdealMulher : "Escolha entre o sexo masculino e feminino."

        return {resposta}
    }
}
