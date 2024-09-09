export interface IUser {
    id:number
    name:string
    age:number
    salary:number
    isMarried?:boolean
}


export interface IContext {
    users:IUser[]
    removeUser:(id:number) => void
    addUser:(newUser:IUser) => void
    err
    


}