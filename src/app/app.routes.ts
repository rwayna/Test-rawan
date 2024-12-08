import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },      
    { path: 'postList', component: PostListComponent }, 
    { path: 'postItem/:id', component: PostItemComponent }, 
    
];
