class APIREQUEST {

    constructor() {}

    async getAll(limit: number = 12, offset: number = 0) {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        return fetch(url)
    }

    async getPokemon(name: string) {
        const url = `https://pokeapi.co/api/v2/pokemon/${name}`
        return fetch(url)
    }
}

export default APIREQUEST