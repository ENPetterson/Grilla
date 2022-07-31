export class API {

    static clientes = [];

    static getClienteById(id) {
        let clientesEncontrados = API.clientes.find(c => c.id == id)
        return clientesEncontrados
    }

    static async getClientes() {
        let response = await fetch("/dummy/clientes.json");
        return await response.json();
    }

    static async cacheClientes() {
        API.clientes = await this.getClientes();
    }
}

API.cacheClientes();