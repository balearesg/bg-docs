export /*bundle*/ 
function JCall(): void {

    this.checkToken = (headers: any): any => {
        if (typeof window === 'undefined') return headers;
        let session: string = window.localStorage.getItem('session');
        if (!session) return headers;
        interface session {
            accessToken: string;
        }
        const sessionObject: session = JSON.parse(session);
        headers.append('Authorization', `Bearer ${sessionObject.accessToken}`);
        return headers;
    };

    this.request = async (url: string, method: string = 'get', params: object = {}, headersSpecs: object = {}): Promise<any> => {
        try {

            const keys: string[] = Object.keys(headersSpecs);
            let headers: Headers = new Headers();
            keys.forEach((key: string): void => headers.append(key, headersSpecs[key]));
            // headers = await this.checkToken(headers);

            const specs: RequestInit = { method, headers, mode: 'cors' };
            const emptyParams: boolean = Object.entries(params).length === 0 && params.constructor === Object;
            if (method === 'post' && !emptyParams) specs.body = JSON.stringify(params);
            else if (!emptyParams && method === 'get') {
                const parameters: string[] = Object.keys(params);
                if (parameters.length) {
                    url += "?";
                    parameters.forEach((key: string): void => {
                        if ([NaN, undefined, ''].includes(params[key])) return;
                        url += `&${key}=${params[key]}`
                    });
                }
            }

            const response: Response = await fetch(url, specs);

            return response.json();

        }
        catch (e) {
            console.error("error jcall", e);
        }

    };
    interface headers {
        'Content-Type': string;
    }
    this.get = (url: string, params: object, headers: object) => this.request(url, 'get', params, headers);
    this.post = (url: string, params: object, headers: headers = {
        'Content-Type': 'application/json'
    }) => this.request(url, 'post', params, headers);

}
