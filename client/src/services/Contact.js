import { api } from "./myFetch";
export function Add(con) {
    return api('contact', con);
}