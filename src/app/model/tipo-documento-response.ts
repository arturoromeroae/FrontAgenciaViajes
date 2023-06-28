import { TipoDocumento } from "./tipo-documento"

export class TipoDocumentoResponse {
    isSuccess?:boolean
    result?:TipoDocumento[]
    displayMessage?:string
}
