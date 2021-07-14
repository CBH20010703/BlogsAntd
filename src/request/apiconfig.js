import { get, post} from "./axiosconfig";
export const GetMenuList=() => {
    return get("/api​/Values")
}
export const GetArticle = (id) => {
    return get("/api​/Values/"+id)
}

export const UserLogin = (user) => {
    return post("/api/Login", user);
}
export const GetUserInfo = () => {
    return get("/api/Users");
}
 
export const AddLeave = (leave) => {
    return post("/api/Leave",leave)
}

export const GetArticleLeaves = (leaveid) => {
    return get("/api/Leave/"+leaveid);
}