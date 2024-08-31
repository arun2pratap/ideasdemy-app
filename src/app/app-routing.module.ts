import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: 'cart-summary', component: CartSummaryComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-complete', component: OrderCompleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
