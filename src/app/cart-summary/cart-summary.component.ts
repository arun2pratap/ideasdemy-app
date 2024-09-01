import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cart: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

  removeFromCart(courseId: number) {
    this.cart = this.cart.filter(item => item.id !== courseId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
