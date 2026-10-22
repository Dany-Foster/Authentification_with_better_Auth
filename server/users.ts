"use server";
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
      password: "Password@123",
      name: "Dane",
    },
  });
};

// export async function testDatabaseConnection() {
//   try {
//     const result = await sql`SELECT NOW() AS current_time`;

//     console.log("Connexion Neon réussie :", result);

//     return result;
//   } catch (error) {
//     console.error("Échec de connexion Neon :", error);

//     if (error instanceof Error) {
//       console.error("Cause détaillée :", error.cause);
//     }

//     throw error;
//   }
// }
