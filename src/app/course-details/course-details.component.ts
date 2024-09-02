import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.params['id'];
    this.http.get(`http://localhost:3000/courses/${courseId}`)
      .subscribe((data: any) => {
        this.course = data;
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
