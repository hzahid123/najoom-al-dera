import { Component, OnInit, signal } from '@angular/core';
import { blogService } from 'src/app/services/apps/blog/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-blog-details',
  imports: [
    MatCardModule,
    MatChipsModule,
    TablerIconsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
  ],
  templateUrl: './details.component.html',
})
export class AppBlogDetailsComponent implements OnInit {
  blogId!: number;
  blogDetail = signal<any>(null);
  istoggleReply = signal<boolean>(true);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private blogService: blogService
  ) {}

  ngOnInit(): void {
    this.blogId = Number(this.route.snapshot.paramMap.get('id'));
    const post = this.blogService.getBlogById(this.blogId);
    
    if (post) {
      this.blogDetail.set(post);
    } else {
      this.router.navigate(['/apps/blog']); // Redirect if post not found
    }
  }

  toggleReply() {
    this.istoggleReply.set(!this.istoggleReply());
  }
}