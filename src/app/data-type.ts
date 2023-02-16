import { EmailValidator } from "@angular/forms";

export interface SignUp{
    name:string,
    email:EmailValidator,
    password:string,
}

export interface SignIn{
    email:EmailValidator,
    password:string,
}
export interface Product{
    name:string,
    price:DoubleRange,
    category:string,
    color:string,
    description:string,
    image:string
}