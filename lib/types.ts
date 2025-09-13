export type Comment = {
    username:string,
    userImage:string,
    text:string,
    likes:number
}
export type Post = {
    id:number,
    username:string,
    userImage:string,
    postImage:string,
    postDescription:string,
    likes:number,
    nbrComments:number,
    shares:number,
    comments:Comment[],

}
export type User = {
    id:number,
    name:string,
    userImage:string
} 

export type Media = {
    id:number,
    url:string,
}