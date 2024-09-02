import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/courses')
      .subscribe((data: any) => {
        this.courses = data;
      });
  }

  isInCart(courseId: number) {
    return this.cartService.isInCart(courseId);
  }

  toggleCart(course: any) {
    if (this.isInCart(course.id)) {
      this.cartService.removeFromCart(course.id);
    } else {
      this.cartService.addToCart(course);
    }
  }
}
