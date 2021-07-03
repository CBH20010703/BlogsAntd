import { get} from "./axiosconfig";
export const GetMenuList=() => {
    return get("/api​/Values")
}