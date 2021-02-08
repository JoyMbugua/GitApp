export class User {

    constructor(
        public login: string,
        public name: string,
        public html_url: string,
        public avatar_url: string,
        public public_repos: string, 
        public public_gists: string, 
        public followers: number, 
        public following: number,
        public email: string,
        public location: string,
        public blog: string,
        public created_at: string
        ){}

}
