import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { UserService } from '../user.service';

interface Course {
  userId: string;
  courseId: string;
  capability: string;
  targetDateCompletion: string;
  trainingStatus: string | null;
  score: string | null;
  userName: string;
  courseName: string;
}

@Component({
  selector: 'app-view-assigned-courses',
  templateUrl: './view-assigned-courses.component.html',
  styleUrls: ['./view-assigned-courses.component.css']
})
export class ViewAssignedCoursesComponent implements OnInit {
  columns: string[] = ['Sl. no', 'Course ID', 'Course Name', 'Capability', 'Planned date of completion'];
  rows: any[] = [];
  errorMessage: string = '';

  constructor(private courseService: CourseService, private userService: UserService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    const userId = this.userService.userid;
    this.courseService.getCourses(userId).subscribe(
      (data: Course[]) => {
        if (data && data.length > 0) {
          this.rows = data.map((course: Course, index: number) => [
            index + 1,
            course.courseId,
            course.courseName,
            course.capability,
            new Date(course.targetDateCompletion).toLocaleDateString()
          ]);
        } else {
          this.errorMessage = 'No courses found.';
        }
      },
      (error) => {
        this.errorMessage = 'Failed to load courses. Please try again later.';
      }
    );
  }
}
