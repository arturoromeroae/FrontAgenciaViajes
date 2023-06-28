import { Cliente } from "./cliente"

export class ClienteResponse {
    isSuccess?:boolean
    result?:Cliente[]
    displayMessage?:string
}
