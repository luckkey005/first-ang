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
  colors:any;
  constructor() { 
    
  }
  

getData(){ 
  return this.colors =[
    {'name':'white', 'value':'#ffffff'},
    {'name':'Silver', 'value':'#C0C0C0'},
    {'name':'Black', 'value':'#000000'},
    {'name':'Red', 'value':'#FF0000'},
    {'name':'Maroon', 'value':'#800000'},
    {'name':'Yellow', 'value':'#FFFF00'},
    {'name':'Olive', 'value':'#008000'},
    {'name':'Lime', 'value':'#00FFFF'},
    {'name':'Green', 'value':'#00FF00'},
    {'name':'Aqua', 'value':'#008080'},
    {'name':'Teal', 'value':'#008080'},
    {'name':'Blue', 'value':'#0000FF'}    
  ];
}
}
