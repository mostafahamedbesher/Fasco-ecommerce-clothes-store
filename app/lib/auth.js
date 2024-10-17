import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { createUser, getUser } from "./data-service";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user; //(!!) converts any value to boolean
    },
    async signIn({ user }) {
      try {
        //check if the logging in is exist in the database
        const existingGuest = await getUser(user.email);

        // if not exist, then we add the user to the database users table on first signin
        if (!existingGuest) {
          await createUser({
            fullName: user.name,
            email: user.email,
          });
        }
        return true;
      } catch {
        return false;
      }
    },
    //we only use this method to add the userId to the session so that all user data we need be in one central place
    async session({ session }) {
      const currentUser = await getUser(session.user.email);
      //mutate user object in session
      session.user.userId = currentUser.id;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
