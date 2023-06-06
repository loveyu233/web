import request from "@/api/request.ts";

enum UserApi {
    LOGIN = "/user/login"
}

export const Login = (userForm: UserLogin) => request.post<any, UserLoginResponse>(UserApi.LOGIN, userForm);
