import { defineStore } from "pinia";
import { auth } from "@/js/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useStoreNotes } from "@/stores/storeNotes";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    init() {
      const storeNotes = useStoreNotes();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(
            "user found and data being stored in the user state object"
          );
          console.log("user: ", user);

          this.user.uid = user.uid;
          this.user.email = user.email;
          this.router.push("/");
          storeNotes.init();
        } else {
          this.user = {};
          storeNotes.clearNotes();
          this.router.replace("/auth");
          console.log("user: ", user);
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
        })
        .catch((error) => {
          console.log("user login error :: ", error.message);
        });
    },
    logoutUser() {
      signOut(auth)
        .then(() => {})
        .catch((error) => {
          console.log("user logout function error :: ", error.message);
        });
    },
  },
});
