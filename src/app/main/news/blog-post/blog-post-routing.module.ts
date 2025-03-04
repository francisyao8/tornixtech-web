import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post.component';
import { AllBlogPostComponent } from './all-blog-post/all-blog-post.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPostComponent,
    children: [
      { path: '', redirectTo: 'blog-post', pathMatch: 'full' },
      { path: 'blog-post', component: AllBlogPostComponent },
      { path: 'all-blog-post/:news_id', component: AllBlogPostComponent },
      { path: 'blog-post-details/:b_id', component: BlogPostDetailsComponent },

      // { path: 'blog', component: BlogComponent },
      // { path: 'blog-post', component: BlogPostComponent },
      // { path: 'blog-post-details', component: BlogPostDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPostRoutingModule { }
