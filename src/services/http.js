import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

export class HttpService {
    //Get request HTTP service
    static get(url, headers = {}) {
        // console.log(url, headers);
        return Observable.ajax({
            url,
            method: 'GET',
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }

    //Delete request HTTP service
    static delete(url, headers = {}) {
        // console.log(url, headers);
        return Observable.ajax({
            url,
            method: 'DELETE',
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }

    //Post request HTTP service
    static post(url, body, headers = { 'Content-Type': 'application/json' }) {
        // console.log('http post -> url, body',url, body )
        return Observable.ajax({
            url,
            method: 'POST',
            body,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }

    //Post request HTTP service
    static elasticPost(url, body, headers) {
        return Observable.ajax({
            url,
            method: 'POST',
            body,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }

    static uploadImage(url, body, headers) {
        return Observable.ajax({
            url,
            method: 'POST',
            body,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
}