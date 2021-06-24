export default class userDetail{
    name?:string ;
        mobile?:number;
        mail?:string;
        language?:string[];
        city?:string;
        gender?:string
        
        constructor(name?:string ,mobile?:number,mail?:string,language?:string[],city?:string,gender?:string){
            this.name=name;
            this.mobile=mobile;
            this.mail=mail;
            this.language=language;
            this.city=city;
            this.gender=gender;
        }
    
}