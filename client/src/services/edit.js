import { api } from "./myFetch";
export function Get(user_id) { return  api('users/' + user_id); }
export function Update(user_id, user) {return api('users/' + user_id, user, 'PATCH');}