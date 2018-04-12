import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

@Injectable()

export class ProductService {
    private _localUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._localUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handelError);
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handelError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
