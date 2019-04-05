import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../userInfo-class/user'
import {Repo} from '../repoClass/repo'


@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user:User;
  repo:Repo;
  apiKey:any[];
  newRepo:any;
  private userName:string;

  constructor(private http:HttpClient) {
     this.user=new User("","","","","","","","","");
     //this.repo=new Repo("","","","");
  }
  userRequest(){

    interface ApiResponse{
      login:string;
      public_repos:string
      followers: string
      following: string
      avatar_url:string
      repos_url:string
      bio:string
      hireable:string
      company:string


    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/'+ this.userName +'?access_token='+ '5a34bd337bcd326cdc0c71d3df54f2a07b73563e').toPromise().then(response=>{

            this.user.name=response.login
            this.user.repositories=response.public_repos
            this.user.followers=response.followers
            this.user.following=response.following
            this.user.image=response.avatar_url
            this.user.repos_url=response.repos_url
            this.user.bio=response.bio
            this.user.hireable=response.hireable
            this.user.company=response.company


            resolve()
          },
          error=>{
                this.user.name="user not found"

                reject(error)
            }
        )
    })
        return promise
      }
      repoRequest(){

        interface ApiResponse{
          name:string;
          html_url:string;
          description: string;
          created_at: Date;
        }
        let promise =new Promise((resolve,reject)=>{
            this.http.get<ApiResponse>('https://api.github.com/users/'+ this.userName+ '/repos?access_token='+ '5a34bd337bcd326cdc0c71d3df54f2a07b73563e').toPromise().then(response=>{
                this.newRepo=response
              //  this.repo.name=response.name
              //  this.repo.html_url=response.html_url
              //  this.repo.description=response.description
              //  this.repo.created_at=response.created_at

                resolve()
              },
              error=>{
                this.newRepo="Repo not found"
                //  this.repo.name= " Repo Not found"
                    reject(error)
                }
            )
        })
            return promise
  }

  updateUsername(userName:string){
    this.userName=userName
  }
}
