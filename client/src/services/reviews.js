import { api } from "./myFetch";
//Just get all of the reviews for now.........
export function GetAll() {
    return api('reviews');
}
export function Add(rev) {
    return api('reviews', rev);
}