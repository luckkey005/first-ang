import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { SuperComponent } from './super/super.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts.component';
import { PrintComponent } from './print/print.component';
import { ColorsService } from './colors.service';

const R:Routes=[{path:'first',component:FirstComponent},
                {path:'',component:FourthComponent},
              {path:'second',component:SecondComponent},
              {path:'third',component:ThirdComponent},
              {path:'fourth',component:FourthComponent},
              {path:'super',component:SuperComponent},
              {path:'contact',component:ContactComponent},
              {path:'posts',component:PostsComponent},
              {path:'print',component:PrintComponent},
            ];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    SuperComponent,
    ContactComponent,
    PostsComponent,
    PrintComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(R),
    HttpClientModule,
    FormsModule,
  ],
  providers: [ColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }