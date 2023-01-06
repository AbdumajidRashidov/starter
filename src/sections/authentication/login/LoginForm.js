import { useState } from "react";
import authProvider from "../AuthProvider";
import { Stack, TextField, IconButton, InputAdornment } from "@mui/material";
import { LoadingButton } from "@mui/lab";

// component
import Iconify from "../../../components/Iconify";
import { useLogin, useNotify } from "react-admin";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const [auth, setAuth] = useState();
  const [isOtp, setIsOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [login, setUsername] = useState();
  const [password, setPassword] = useState("");
  const notify = useNotify();
  const loginConfirm = useLogin();
  const [code, setCode] = useState();

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    authProvider
      .loginPassword({ login, password })
      .then((auth) => {
        setAuth(auth);
        if (auth.status === "unauthenticated") {
          notify("Invalid email or password!");
          setIsOtp(false);
        } else if (auth.status === "error") {
          notify("Something went wrong!");
          setIsOtp(false);
        } else if (auth.status === "authenticated") {
          loginConfirm(auth);
        } else if (auth.status === "otp") {
          setIsOtp(true);
        } else {
          console.log("ishlamayapti");
        }
      })
      .catch((error) => {
        notify("Invalid email or password ");
        console.log(error);
      });
  };

  const handleSubmitOtp = (e) => {
    const requestId = auth.requestId;
    console.log(requestId);
    e.preventDefault();
    authProvider
      .loginOtp({ requestId, code })
      .then((res) => {
        setIsLoading(true);
        loginConfirm(res);
      })
      .catch(() => {
        setIsLoading(false);
        notify("Invalid number");
      });
  };

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <form autoComplete="off" noValidate>
      {!isOtp ? (
        <>
          <Stack spacing={3}>
            <TextField
              fullWidth
              required
              id="username-error-helper-text"
              autoComplete="username"
              type="text"
              label="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <TextField
              fullWidth
              required
              id="password-error-helper-text"
              autoComplete="current-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} edge="end">
                      <Iconify
                        icon={
                          showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                        }
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <br />
          <LoadingButton
            fullWidth
            size="large"
            type="button"
            variant="contained"
            loading={isLoading}
            onClick={handleSubmitPassword}
          >
            Send password
          </LoadingButton>
        </>
      ) : (
        <>
          <TextField
            fullWidth
            required={true}
            autoComplete="one-time-code"
            id="otp-error-helper-text"
            type={"text"}
            label="Message SMS"
            onChange={(e) => {
              setCode(e.target.value);
            }}
            // error={Boolean(touched.password && errors.password)}
            // helperText={touched.password && errors.password}
          />
          <br />
          <br />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            onClick={handleSubmitOtp}
            loading={isLoading}
          >
            Войти
          </LoadingButton>
        </>
      )}
    </form>
  );
}
