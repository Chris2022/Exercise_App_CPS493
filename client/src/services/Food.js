import { api } from "./myFetch";
//Just get all of the reviews for now.........
export function GetAll() {
    return api('food');
}
export function Add(foo) {
    return api('food', foo);
}

export function GetByHandle(handle) { return  api('foods/byhandle/' + handle); } 