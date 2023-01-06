import config from "../../config.json";
const authProvider = {
  login: (auth) => {
    localStorage.setItem("auth", JSON.stringify(auth));
    localStorage.setItem("authData", JSON.stringify(auth.authData));
    return auth.status === "authenticated"
      ? Promise.resolve()
      : Promise.reject({ redirectTo: "/login" });
  },
  loginOtp: ({ requestId, code }) => {
    const request = new Request(`${config.API_URL}/auth/otp`, {
      method: "POST",
      body: JSON.stringify({ requestId, code }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        } else {
          console.log(response.status);
        }
        return response.json();
      })
      .then((auth) => {
        console.log(auth);
        localStorage.setItem("auth", JSON.stringify(auth));
        // localStorage.setItem("authData", JSON.stringify(auth.authData));
        return auth;
      })
      .catch(() => {
        throw new Error("Network error");
      });
  },
  loginPassword: ({ login, password }) => {
    const request = new Request(`${config.API_URL}/auth/signin`, {
      method: "POST",
      body: JSON.stringify({ login, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem("auth", JSON.stringify(auth));
        localStorage.setItem("authData", JSON.stringify(auth.authData));
        return auth;
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Network error");
      });
  },
  checkAuth: () => {
    const authdata = localStorage.getItem("authData");
    return authdata
      ? Promise.resolve()
      : Promise.reject({ redirectTo: "/login" });
  },
  logout: () => {
    localStorage.removeItem("authData");
    return Promise.resolve("/login");
  },
  getPermissions: () => {
    // Required for the authentication to work
    return Promise.resolve();
  },
  // ...
};

export default authProvider;
