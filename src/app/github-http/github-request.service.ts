import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {User} from '../userInfo-class/user'

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user:User;

  constructor(private http:HttpClient) {
     this.user=new User("","","","","");
  }
  userRequest(){

    interface ApiResponse{
      login:string;
      public_repos:string
      followers: string
      following: string
      avatar_url:string

    }
    let promise =new Promise((resolve,reject)=>{
        this.http.get<ApiResponse>('https://api.github.com/users/niklauspeter?access_token='+ environment.apiKey).toPromise().then(response=>{

            this.user.name=response.login
            this.user.repositories=response.public_repos
            this.user.followers=response.followers
            this.user.following=response.following

            this.user.image=response.avatar_url

            resolve()
          },
          error=>{
                this.user.name="Never, never, never give up."
                this.user.repositories="winston churchill"
                this.user.followers="blank"
                this.user.following="blank"
                this.user.image="blank"
                reject(error)
            }
        )
    })
        return promise
      }

}
