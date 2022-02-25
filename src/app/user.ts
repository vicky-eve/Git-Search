export class User {
    static results: any;
    constructor ( 
        public name:string, 
        public url:string,
         public login:string, public location:string,
          public public_repos:number,
           public followers:number,
            public  following:number, 
            public created_at:Date){
}
}
