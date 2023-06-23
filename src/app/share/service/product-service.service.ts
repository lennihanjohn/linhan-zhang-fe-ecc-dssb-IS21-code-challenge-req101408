import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product.model';
import {BehaviorSubject, Observable} from 'rxjs';

const baseUrl = 'http://localhost:8080/api/product';

@Injectable({providedIn: 'root'})export class ProductService { 
    
    // create product data service
    private _products = new BehaviorSubject<Product[]>([]);
    private products = this._products.asObservable();

    product !: Product;
    // create store
    private _dataStore : {
        products: Product[]
    }
    constructor(private http : HttpClient) {
        // initialize store
        this._dataStore = {
            products: []
        };
    }

    get getList$() {
        return this._products.asObservable();
    }

    /** CRUD METHODS */

    // ADD, POST METHOD
    create(product : Product) {
        return this.http.post(baseUrl, product);
    }

    // DELETE, DELETE METHOD
    delete(product : Product) {
        return this.http.delete(`${baseUrl}/${
            product.productId
        }`);
    }
    // UPDATE, PUT METHOD
    update(product : Product) {
        return this.http.put(`${baseUrl}/${
            product.productId
        }`, product);
    }
    // GET LIST. GET METHOD
    getList() {
        this.http.get<Product[]>(baseUrl).subscribe(data => {
            this._dataStore.products = data;
            this._products.next(Object.assign({}, this._dataStore).products);
        }, error => console.log('Could not load products.'));

        return this.http.get<Product[]>(baseUrl);
    }

    // GET SINGLE RECORD. GET METHOD
    getById(id : number): Observable < any > {
        return this.http.get(`${baseUrl}/${id}`);
    }
}
