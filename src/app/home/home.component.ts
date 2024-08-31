import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  courses: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/courses')
      .subscribe((data: any) => {
        this.courses = data;
      });
  }

  viewCourse(courseId: number) {
    this.router.navigate(['/course-details', courseId]);
  }
}
