import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  cart: any[] = [];

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }

  removeFromCart(courseId: number) {
    this.cartService.removeFromCart(courseId);
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }
}
