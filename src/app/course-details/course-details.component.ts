import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const courseId = this.route.snapshot.params['id'];
    this.http.get(`http://localhost:3000/courses/${courseId}`)
      .subscribe((data: any) => {
        this.course = data;
      });
  }

  addToCart(course: any) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(course);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
