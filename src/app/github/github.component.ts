import { Component, OnInit,NgModule } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../userInfo-class/user'
import {Repo} from '../repoClass/repo'
import {GithubRequestService} from '../github-http/github-request.service'

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  user:User;
  repo:[]
  userName:string;
  private username : string;
  constructor(private http:HttpClient,private githubService: GithubRequestService,public gitRepo: GithubRequestService) {

  this.username = "niklauspeter"}

searchUser(){
  this.githubService.updateUsername(this.userName);
  this.githubService.userRequest()
  this.user=this.githubService.user
  //  this.githubService.getRepo().subscribe
  this.gitRepo.repoRequest()
  this.repo=this.gitRepo.newRepo

}
  ngOnInit() {

   }


}
