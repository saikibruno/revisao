// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Ex7Controller {
    store({request}){
        const valor1 = request.input('valor1')
        const valor2 = request.input('valor2')
        const valor3 = request.input('valor3')

        const resposta = valor1 > valor2 && valor1 > valor3 ? valor1 : valor2 > valor1 && valor2 > valor3 ? valor2 : valor3 > valor1 && valor3 > valor2 ? valor3 : "numeros"
        const resposta2 = resposta == valor1 ? valor2 > valor3 ? valor2 : valor3 :resposta ==valor2 ? valor1 > valor3 ?valor1:valor3:resposta ==valor3 ?valor1>valor2?valor1:valor2:" iguais."

        const respostaFinal = resposta + resposta2

        return {resposta,resposta2,respostaFinal}
    }




}
