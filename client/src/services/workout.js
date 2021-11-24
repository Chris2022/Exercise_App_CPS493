import { api } from "./myFetch";
//Just get all of the reviews for now.........
export function GetAll() {
    return api('reports');
}
export function Add(work) {
    return api('reports', work);
}
export function GetFeed(handle) { 
    return api('/reports/' + handle);   
}
export function GetByHandle(handle) { return  api('reports/byhandle/' + handle); } 