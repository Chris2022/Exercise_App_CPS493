import { api } from "./myFetch";
export function Get(user_id) { return  api('users/' + user_id); }