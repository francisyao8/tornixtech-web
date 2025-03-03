import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostDetailsComponent } from './blog-post/blog-post-details/blog-post-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { ActivitiesComponent } from './activities/activities.component';
import { NewsComponent } from './news.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ResourcesAndDocumentationComponent } from './resources-and-documentation/resources-and-documentation.component';
import { FrequentlyAskedQuestionsComponent } from './frequently-asked-questions/frequently-asked-questions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JoinUsComponent } from './join-us/join-us.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
   
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    // { path: 'blog', component: BlogComponent },
    { path: 'blog-post', component: BlogPostComponent },
    { path: 'blog-post-details', component: BlogPostDetailsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'activities', component: ActivitiesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'partnerships', component: PartnershipsComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'resources-and-documentation', component: ResourcesAndDocumentationComponent },
    { path: 'frequently-asked-questions', component: FrequentlyAskedQuestionsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'join-us', component: JoinUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
