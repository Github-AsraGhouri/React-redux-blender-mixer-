import { ajax } from 'rxjs/ajax';

export class HttpService {
    //Get request HTTP service
    static get(url, headers = {}) {
        // console.log(url, headers);
        return ajax({
            url,
            method: 'GET',
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
}