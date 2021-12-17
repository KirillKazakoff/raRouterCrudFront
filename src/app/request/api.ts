class Api {
    baseUrl: string;

    utils: {
        ping: () => void;
    };

    notes: {
        getNotes: () => any;
        addNote: (data: any) => any;
        deleteNote: (id: string) => any;
    };

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;

        this.notes = {
            getNotes: async () => (await this.get('/notes')).json(),
            addNote: async (data: any) => this.postJson('/notes', data),
            deleteNote: async (id: string) => this.delete(`/notes/${id}`),
        };
        this.utils = {
            ping: () => this.get('/ping'),
        };
    }

    async api(url: string, settings: RequestInit) {
        const response = await fetch(this.baseUrl + url, settings);

        if (!response.ok) {
            throw new Error(`Api error ${response.statusText}`);
        }

        return response;
    }

    async post(url: string, postData: any) {
        return this.api(url, {
            method: 'POST',
            body: postData,
        });
    }

    async delete(url: string) {
        return this.api(url, {
            method: 'DELETE',
        });
    }

    async postJson(url: string, postData: any) {
        return this.api(url, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
            },
        });
    }

    async get(url: string) {
        return this.api(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
            },
        });
    }
}

const api = new Api('http://localhost:9091');
export default api;
