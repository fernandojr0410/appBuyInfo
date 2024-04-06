export class Api {
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
            // console.log("Products:", data)
            data.forEach((produto: any) => products.push(produto))
        })
        .catch((error) => console.error(error))
        // console.log(products.length)
        return products
    }
}