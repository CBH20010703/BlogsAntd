import { get} from "./axiosconfig";
export const GetMenuList=() => {
    return get("/api​/Values")
}
export const GetArticle = (id) => {
    return get("/api​/Values/"+id)
}