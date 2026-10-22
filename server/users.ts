"user server";
import { auth } from "@/lib/auth";

export const SignIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "mampionontsoadiano@gmail.com",
      password: "password123",
    },
  });
};

export const SignUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "mampionontsoadiano@gmail.com",
      password: "password123",
      name: "Diano",
    },
  });
};
