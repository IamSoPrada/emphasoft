export default class UsersService {

    baseURL = 'https://emphasoft-test-assignment.herokuapp.com/'

    getResource = async (url) => {

        const AUTH_TOKEN = localStorage.getItem('token')

        const conf = {
            headers: {
                "Authorization": `Token ${AUTH_TOKEN}`,
            }
        }
        const res = await fetch(`${this.baseURL}${url}`, conf);
        if (!res.ok) {
            throw new Error(`Could not fetch this url, received ${res.status}`)
        }
        return await res.json()
    }

    getUsers = async () => {
        const data = await this.getResource('api/v1/users/')
        return data
    }

//need create crud func-s
}

