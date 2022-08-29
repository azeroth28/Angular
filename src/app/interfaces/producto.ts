export interface Producto{
    id:string;
    name:string;
    height:string;
    sprites:{
        front_default:string
    }

}

export interface ResponseProducto{
    id:string;
    name:string;
    results: Producto[]
}