import { Media, Post } from "./types"
import { User } from "./types"
export const stories:string[] = [
    'https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww',
    'https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg'
];
export const posts:Post[] = [
    {
        id:1,
        username:"yassine benkacem",
        userImage:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww",
        postImage:"https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg",
        postDescription:"if you think that you will be alive in your entire life, you are wrong... and you need think again about yourself and your situation as well",
        likes:230,
        nbrComments:45,
        shares:10,
        comments:[
            {
                username:"john doe",
                userImage:"https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg",
                text:"nice post bro",
                likes:20
            },
             {
                username:"john doe",
                userImage:"https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg",
                text:"nice post bro",
                likes:20
            },
             {
                username:"john doe",
                userImage:"https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg",
                text:"nice post bro, i think this post shows you internal personality",
                likes:20
            },
        ]
    },
     {
        id:2,
        username:"yassine benkacem",
        userImage:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww",
        postImage:"https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg",
        postDescription:"if you think that you will be alive in your entire life, you are wrong... and you need think again about yourself and your situation as well",
        likes:230,
        nbrComments:45,
        shares:10,
        comments:[
            {
                username:"john doe",
                userImage:"https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg",
                text:"nice post bro",
                likes:20
            },
        ]
    },
     {
        id:3,
        username:"yassine benkacem",
        userImage:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww",
        postImage:"https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg",
        postDescription:"if you think that you will be alive in your entire life, you are wrong... and you need think again about yourself and your situation as well",
        likes:230,
        nbrComments:45,
        shares:10,
        comments:[
            {
                username:"john doe",
                userImage:"https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg",
                text:"nice post bro",
                likes:20
            },
        ]
    }
];

export const friendsRequests: User[] = [
    {
        id:1,
        name:"john doe",
        userImage:"https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg"
    },
    {
        id:2,
        name:"ahmed kiram",
        userImage:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww",
    },
    {
        id:3,
        name:"saraman mohamed",
        userImage:"https://png.pngtree.com/thumb_back/fh260/background/20240928/pngtree-beautiful-nature-landscape-with-mountains-image_16260967.jpg"
    },
    {
        id:4,
        name:"yassine benkacem",
        userImage:"https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg"
    }
];

export const userMedia: Media[] = [
    {
        id:1,
        url:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww",
    },
    {
        id:2,
        url:"https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg",
    },
    {
        id:3,
        url:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww",
    },
    {
        id:4,
        url:"https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1hZ2VzJTIwZ3JhdHVpdGVzfGVufDB8fDB8fHww",
    },
    {
        id:5,
        url:"https://static.vecteezy.com/ti/photos-gratuite/t2/36324708-ai-genere-image-de-une-tigre-en-marchant-dans-le-foret-photo.jpg",
    }
]