// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Ex2Controller {

    store({request}){
        const dados = request.only(['n1','n2','n3'])
        const n1 = dados.n1
        const n2 = dados.n2
        const n3 = dados.n3
        
        if (dados.n1 >= dados.n2 && dados.n1 >= dados.n3) {
            return n1
        }else if (dados.n2 >= dados.n1 && dados.n2 >= dados.n3) {
            return n2
        } else{
            return n3
        }


    }
}
