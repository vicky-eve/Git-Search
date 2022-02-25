export class Repo {
    constructor(public name:string,
         public login:string,
          public description:string,
           public created_at:Date,
            public forks:number,public watchers_count:number,
            public followers:number, 
            public following:number,
             public language:string){
    }
}
