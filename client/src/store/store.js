import { makeAutoObservable } from "mobx"
import { login, registration,auth } from "../actions/user";

export default class Store{
    user = {}
    isAuth = false
    constructor(){
        makeAutoObservable(this);
    }

    setAuth(bool){
        this.isAuth = bool;
    }
    setUser(user){
        this.user = user;
    }

    async login(email,password){
        try{
           const result = await login(email,password);
           this.setUser(result.user);
           this.setAuth(true);
        }catch(e){
            console.log(e);
        }
    }
    async registration(email,password){
        try{
           const result = await registration(email,password);
           this.setAuth(false);
        }catch(e){
            console.log(e);
        }
    }

    async auth(){
        try {
            const result = await auth();
           this.setUser(result.user);
           this.setAuth(true);
        } catch (e) {
            console.log(e);
        }
    }
}