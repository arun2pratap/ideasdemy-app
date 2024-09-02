import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  cart: any[] = [];

  constructor(private fb: FormBuilder, private router: Router, private cartService: CartService) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      this.cartService.clearCart();
      this.router.navigate(['/order-complete']);
    }
  }
}
