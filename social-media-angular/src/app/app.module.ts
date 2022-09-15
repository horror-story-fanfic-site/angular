import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { PostFeedPageComponent } from './components/post-feed-page/post-feed-page.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserInitialsPipe } from './pipes/user-initials.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FollowersComponent } from './components/followers/followers.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { FollowerFeedPageComponent } from './components/follower-feed-page/follower-feed-page.component';
import { EmojisComponent } from './components/emojis/emojis.component';
import { AuthService } from './services/auth.service';
import { EmojiService } from './services/emoji.service';
import { FollowersService } from './services/followers.service';
import { LocalService } from './services/local.service';
import { PostService } from './services/post.service';
import { ProfileService } from './services/profile.service';
import { ResetpasswordService } from './services/resetpassword.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PostFeedPageComponent,
    PostComponent,
    CommentComponent,
    UserCardComponent,
    NavbarComponent,
    UserInitialsPipe,
    FollowersComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ProfileComponent,
    SearchbarComponent,
    ProfileComponent,
    SidebarComponent,
    FollowersComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    FollowerFeedPageComponent,
    EmojisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }