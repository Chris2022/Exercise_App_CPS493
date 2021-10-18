import { GetByHandle } from "./users";

const list = [
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "Lorem Ipsom",
        time: Date(),
        user_handle: "@johnsmith",
        isPublic: true,
    },
    { 
        src: "https://bulma.io/images/placeholders/1280x960.png",
        alt: "Placeholder image",
        caption: "We want Moshiach Now",
        time: Date(),
        user_handle: "@vp",
        isPublic: true,
    },
    { 
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjon4vl9_2NjORI-dmGugrvQGPXT85MX9ZA&usqp=CAU",
        alt: "Beach time !",
        caption: "At the Beach!!",
        time: Date(),
        user_handle: "@ctejada710",
        isPublic: true,
    },
    { 
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQq7VQ1oVcDA_O7SAiX3UNBNXCLs2WF6i_Q&usqp=CAU",
        alt: "Graduation",
        caption: "Onto the Next Chapter!",
        time: Date(),
        user_handle: "@ctejada710",
        isPublic: true,
    },
    { 
        src: "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2015/11/19/christmas-in-nye-ss-update/rockefeller-center-christmas-tree-new-york-city.jpg.rend.hgtvcom.966.725.suffix/1491592861661.jpeg",
        alt: "Christmas!!",
        caption: "Christmas in NYC!!",
        time: Date(),
        user_handle: "@ctejada710",
        isPublic: true,
    },
];

const listWithOwner = ()=> list.map(x => ({ 
    ...x, 
    user: GetByHandle(x.user_handle) 
}) );

export function GetAll() {
    return listWithOwner();
}
//gets all the posts from one user
export function GetWall(handle) {
    return listWithOwner().filter(post=> post.user_handle == handle);
}
/*get activity from everyone you follow
filer the post and only want to filer the posts to the user that you are looking at

*/
export function GetFeed(handle) { return listWithOwner()
    //filer  post is every post and it checks if one the user following is approved by the poster of
    //that item 
    .filter(post=> GetByHandle(handle).following.some(f=> f.handle == post.user_handle && f.isApproved) );     }


export function Get(post_id) { return list[post_id]; }
export function Add(post) {
    if(!post.user_handle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
     list.push(post);
     return { ...post };
}
export function Update(post_id, post) {
    const oldObj = list[post_id];
    const newObj = { ...oldObj, ...post }
    list[post_id] = newObj ;
    return newObj;
}
export function Delete(post_id) {
    const post = list[post_id];
    list.splice(post_id, 1);
    return post;
}