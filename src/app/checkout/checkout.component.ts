import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      // Simulate successful checkout
      localStorage.removeItem('cart');
      this.router.navigate(['/order-complete']);
    }
  }
}
