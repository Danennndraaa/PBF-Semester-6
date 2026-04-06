import Link from "next/link";
import styles from './login.module.scss';
import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const TampilanLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push, query } = useRouter();

  const callbackUrl: any = query.callbackUrl || "/";
  const [error, setError] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      // console.log("signIn response:", res);
      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError(res?.error || "Login failed");
      }
    } catch (error) {
      setIsLoading(false);
      setError("wrong email or password");
    }
  };

  return (
    <> 
    <div className={styles.login}>
      {/* Tampilkan pesan error di UI. */}
          {error && <p className={styles.login__error}>{error}</p>}
      <h1 className={styles.login__title}>Halaman login</h1>
        <div className={styles.login__form}>
          <form onSubmit={handleSubmit}>
          <div className={styles.login__form__item}>
            <label
              htmlFor="email"
              className={styles.login__form__item__label}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className={styles.login__form__item__input}
            />
          </div>

          <div className={styles.login__form__item}>
            <label
              htmlFor="password"
              className={styles.login__form__item__label}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={styles.login__form__item__input}
            />
          </div>
          <button type="submit" className={styles.login__form__item__button} disabled={isLoading}>
            {isLoading ? "Loading..." : "login"}
          </button>{" "}
          <br /> <br />
          <button
            onClick={() => signIn("google", { callbackUrl, redirect: false })}
            className={styles.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "sign in with google"}
          </button>{" "}
          <br /> <br />   
          <button
            type="button"
            onClick={() => signIn("github", { callbackUrl, redirect: false })}
            className={styles.login__form__item__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "sign in with github"}
          </button>
        </form>
        <br />
        <p className={styles.login__form__item_text}>
          tidak punya {"'"} akun? <Link href="/auth/register">Ke Halaman Register</Link>
        </p>
      </div>
    </div>
    </>  
  );
};

export default TampilanLogin;