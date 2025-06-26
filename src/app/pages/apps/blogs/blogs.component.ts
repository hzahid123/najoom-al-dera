import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blogService } from 'src/app/services/apps/blog/blog.service';
import { MatCardModule } from '@angular/material/card';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-blogs',
    standalone: true,  // Don't forget this if you're using standalone components
    imports: [MatCardModule, TablerIconsModule, MatChipsModule, MatButtonModule],
    templateUrl: './blogs.component.html'
}) 
export class AppBlogsComponent implements OnInit {
  posts = this.blogService.getBlog();

  constructor(public router: Router, public blogService: blogService) {}

  selectBlog(id: number) {  // Changed parameter to number
    this.blogService.selectBlogPost(id);  // Now matches service method
    this.router.navigate(['apps/blog/detail', id]);  // Pass ID instead of title
  }

  ngOnInit(): void {
    console.log('Blog posts loaded:', this.posts);
  }
}