import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { environment } from 'src/environments/environment';
import { ListffComponent } from './listff/listff.component';

const R: Routes = [{path: 'first', component: FirstComponent},
                {path: '', component: FourthComponent},
              {path: 'second', component: SecondComponent},
              {path: 'third', component: ThirdComponent},
              {path: 'fourth', component: FourthComponent},
              {path: 'super', component: SuperComponent},
              {path: 'contact', component: ContactComponent},
              {path: 'posts', component: PostsComponent},
              {path: 'print', component: PrintComponent},
              {path: 'list', component: ListffComponent},
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
    ListffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(R),
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  providers: [ColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
