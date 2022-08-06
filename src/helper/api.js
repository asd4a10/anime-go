import axios from "axios"

const BASE_URL='https://service.sovetromantica.com/v1'

export class api {
    static async fetchAnimeList(page, size) {
        return await axios.get(`${BASE_URL}/list?offset=${0}&limit=${size}`)
        .catch( e => {
            console.log(e);
        })
    }

    static async fetchAnimeById(id) {
        return await axios.get(`${BASE_URL}/anime/${id}`)
        .catch( e => {
            console.log(e);
        })
    }
}