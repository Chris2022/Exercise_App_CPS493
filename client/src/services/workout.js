import { api } from "./myFetch";
//Just get all of the reviews for now.........
export function GetAll() {
    return api('workout');
}
export function Add(work) {
    return api('workout', work);
}