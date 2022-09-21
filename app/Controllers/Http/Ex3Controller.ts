// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Ex3Controller {
    store({request}){
        const dados = request.only(['chopp','pizza','cobertura','qtdPessoas'])
        const chopp = dados.chopp
        const pizza = dados.pizza
        const cobertura = dados.cobertura
        const qtdPessoas = dados.qtdPessoas

        const qtdChopp = chopp * 4.80
        const qtdCobertura = cobertura * 1.5
        const qtdPizza = pizza * 17

        const contaDezPorCento = (qtdChopp + qtdPizza + qtdCobertura) * 1.1

        const quantoCadaUmPg = contaDezPorCento / qtdPessoas

        return {quantoCadaUmPg}


    }
}
