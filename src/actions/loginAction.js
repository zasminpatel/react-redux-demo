import LoginService from "../services/loginService";

export function loginAction(logindata) {
  const res = LoginService.Login(logindata);
  return {
    type: "LOGIN",
    payload: res
  };
}
