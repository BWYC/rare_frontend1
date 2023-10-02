import {
  ThirdwebAuthProvider,
  authSession,
} from "@thirdweb-dev/auth/next-auth";
import NextAuth from "next-auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();


const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export default NextAuth({
  providers: [
    // Add the thirdweb auth provider to the providers configuration
    ThirdwebAuthProvider({
      domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
    }),
    // other providers...
  ],
  callbacks: {
    // Add the authSession callback to the callbacks configuration
    session: authSession,
  },
});