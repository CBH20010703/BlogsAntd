import { get, post } from "./axiosconfig";
export const GetMenuList=() => {
    return get("/api​/Values")
}