import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// export class ColorsService {
//   colors:any;
//   constructor(private http:HttpClient) {     
// }
// getData() { 
//   // this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((res:{})=>{
//    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
//   .map(Response=>{
//     const post=Response.json();
//     return post.map((Posts) => new Posts(post));
//   })
   
//    }
// }
export class ColorsService {
  data:any;
  constructor() { 
    
  }
  

getData(){ 
  return this.data ={
    "name":"K Lakshmi Deepak",
    "position":"UI Developer",
    "about":"My name is Lakshmi Deepak. I'm a Front End Developer in Hyderabad. I describe myself as a developer who loves coding, open source, and the web platform. Currently I'm working at a company called TechStar Group, as a Front End Developer (often called as UI Developer).",
    "quality":
    {"quality1":["Hard Work","I want to make my life life better along with and other's life, with my nature of hardworking brain."],
     "quality2":["Time Punctual","Instead of Being Late I Choose to Plan the things and do accordingly , so that I can Manage the time in peaceful environment."],
     "quality3":["Tech Enthusiast","Technology can change lot of things like shopping , health care etc. reading different blogs , magazines boosted my love towards it."],
    },
    
    "skills":
    {"skill1":["html",95],
     "skill2":["css",95],
     "skill3":["js",90],
     "skill4":["bootstrap",85],
     "skill5":["git",70],
     "skill6":["jquery",70],
     "skill7":["php",70],
     "skill8":["mysql",70],
     "skill9":["angular",50]
    },

    "experience":
    {"experience1":["UI Developer","I'm working at a company called TechStar Group, as a Front End Developer (often called as UI Developer)."],
     "experience2":["Video Editor","I worked in an organization called Anjaneya Digitals which has some news channels (SYC News, Bhavitha TV)as Video Editor for a year."],
     "experience3":["Customer Relationship Officer","I worked in Hinduja Global Solutions (HGS) as customer relationship officer for 11 months."],     
    },

    "education":
    { "education1":["Post Graduation","MCA",2014,2017,76,"Completed My Post Graduation in Master of Computer Applications in RVR & JC College of Engineering under Acharya Nagarjuna University by scoring 76% of marks on 2017."],
     "education2":["Graduation","B.Sc",2012,2009,64.5,"Completed My Graduation in Bachelor of Science in Hindu College under Acharya Nagarjuna University by scoring 64.5%% of marks on 2012."],
     "education3":["Intermediate","MPC",2007,2009,76,"Completed My Intermediate in M.P.C in Andhra Muslim college under Board of Intermediate Education of AP by scoring 71.3% of marks on 2009."],
     "education4":["Higher Education","SSC",2006,2007,76,"Completed My Higher Education in Vijaya Lakshmi Public School under AP Board of Secondary Education by scoring 79.6% of marks on 2007."],
    },

    "contacting":
    { "address":"",
      "website":"",
      "mail":"",
      "mobile":"",
      "social1":"",
      "social2":"",
      "timing":"",
    },
    
  };
}
}
