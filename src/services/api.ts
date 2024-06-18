import Pedido from "./pedidos/pedido"
export class Api {
    pedido = new Pedido()
    constructor() {

    }
    private static API_URL: string = 'http://192.168.1.19:5000'

    static async getAllProductsByVendor(): Promise<any> {
        const products: any[] = []
        await fetch(`${this.API_URL}/produtos/findAll`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                data.forEach((produto: any) => products.push(produto))
                console.log("produto", data)
            })
            .catch((error) => console.error(error))
        return products
    }

    static async deleteById(id_produto: number): Promise<any> {
        await fetch(`${this.API_URL}/produtos/delete`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ ids: [id_produto] })
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("produto", data);
                return data.message;
            })
            .catch((error) => console.error(error));
    }

}

