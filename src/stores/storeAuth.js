import { defineStore } from "pinia";
import { auth } from "@/js/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    init() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('user found and data being stored in the user state object');
          console.log('user: ',user);
          
          this.user.uid = user.uid
          this.user.email = user.email
          this.router.push('/')  
        } else {
          this.user = {}
          this.router.replace('/auth')
          console.log('user: ',user);
        }
      });
    },
    registerUser(credentials) {
      console.log("registerUSer store function");
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user registration :: ", user);
        })
        .catch((error) => {
          console.log("user registration error :: ", error.message);
        });
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user logged in :: ", user);
        })
        .catch((error) => {
          console.log("user login error :: ", error.message);
        });
    },
    logoutUser() {
      signOut(auth)
        .then(() => {
          console.log("user logged out");
        })
        .catch((error) => {
          console.log("user logout function error :: ", error.message);
        });
    },
  },
});
