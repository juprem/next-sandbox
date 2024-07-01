import axios from 'axios';

export function basicFetch() {
    const username = 'user';
    const password = 'password';
    const credentials = Buffer.from(`${username}:${password}`).toString('base64');
    const authHeader = `Basic ${credentials}`;

    async function getRequest(path: string): Promise<unknown> {
        const res = axios
            .get(`http://localhost:8080/api${path}`, {
                method: 'get',
                headers: {
                    Authorization: authHeader,
                },
            })
            .then((response) => response.data);
        return await res;
    }

    return { getRequest };
}
