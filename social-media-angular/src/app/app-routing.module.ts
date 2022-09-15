import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowerFeedPageComponent } from './components/follower-feed-page/follower-feed-page.component';
import { FollowersComponent } from './components/followers/followers.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { PostFeedPageComponent } from './components/post-feed-page/post-feed-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
//  { path: "", pathMatch: "full" },
//  { path: "/login", redirectTo: "/login", component: LoginComponent },
 { path: "/login", component: LoginComponent },
  { path: "/register", component: RegisterComponent },
  { path: "/post-feed", component: PostFeedPageComponent},
  { path: "/profile", component: ProfileComponent },
  { path: "/view/:username", component: ProfileComponent },
  { path: "/forgotpassword", component: ForgotpasswordComponent},
  { path: "/resetpassword", component: ResetpasswordComponent},
  { path: "/follower-feed", component: FollowerFeedPageComponent}
=======
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "post-feed", component: PostFeedPageComponent},
  { path: "profile", component: ProfileComponent },
  { path: "view/:username", component: ProfileComponent },
  { path: "forgotpassword", component: ForgotpasswordComponent},
  { path: "resetpassword", component: ResetpasswordComponent},
  { path: "follower-feed", component: FollowerFeedPageComponent}
>>>>>>> eaffc7ace4eb1cb4c455f73f130cdc98d333f883
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }