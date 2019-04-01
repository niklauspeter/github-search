import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../userInfo-class/user'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:User;
  private username : string;
  constructor(private http:HttpClient) {
  this.username = "niklauspeter"}

  ngOnInit() {
    interface ApiResponse{
       login:string;
       public_repos:string
       followers: string
       following: string
       avatar_url:string
   }
   this.http.get<ApiResponse>('https://api.github.com/users/niklauspeter?access_token=' +'5a34bd337bcd326cdc0c71d3df54f2a07b73563e').subscribe(data=>{
       this.user= new User(data.login,data.public_repos, data.followers, data.following, data.avatar_url)
   })
  }

}
