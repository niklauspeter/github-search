import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../userInfo-class/user'
import {GithubRequestService} from '../github-http/github-request.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:User;
  private username : string;
  constructor(private http:HttpClient,private githubService: GithubRequestService) {

  this.username = "niklauspeter"}

  ngOnInit() {
    this.githubService.userRequest()
      this.user=this.githubService.user
   }


}
