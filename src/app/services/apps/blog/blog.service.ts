import { Injectable, signal } from '@angular/core';
import { blogPosts } from 'src/app/pages/apps/blogs/blogData';

@Injectable({
  providedIn: 'root',
})
export class blogService {
  private blogPosts = signal<any[]>(blogPosts);
  private selectedPost = signal<any | null>(null);

  constructor() {}

  public getBlog() {
    return this.blogPosts();
  }

  // Update this to find by ID instead of title
  public getBlogById(id: number) {
    return this.blogPosts().find(post => post.id === id);
  }

  public selectBlogPost(id: number) {
    const post = this.getBlogById(id);
    this.selectedPost.set(post || null);
  }

  public getSelectedPost() {
    return this.selectedPost();
  }
}