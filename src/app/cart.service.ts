import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();
  private apiUrl = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {
    this.loadCart();
  }

  private loadCart() {
    this.http.get<any[]>(this.apiUrl).subscribe(cartItems => {
      this.cart.next(cartItems);
    });
  }

  addToCart(course: any) {
    this.http.post(this.apiUrl, course).subscribe(() => {
      this.loadCart();
    });
  }

  removeFromCart(courseId: number) {
    const url = `${this.apiUrl}/${courseId}`;
    this.http.delete(url).subscribe(() => {
      this.loadCart();
    });
  }

  isInCart(courseId: number) {
    return this.cart.getValue().some(item => item.id === courseId);
  }

  clearCart() {
    const cartItems = this.cart.getValue();
    cartItems.forEach(item => {
      this.removeFromCart(item.id);
    });
  }

  getTotalPrice() {
    return this.cart.getValue().reduce((total, item) => total + item.price, 0);
  }
}
