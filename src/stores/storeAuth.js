import { defineStore } from "pinia";
import { auth } from "@/js/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {};
  },
  actions: {
    registerUser(credentials) {
      console.log("registerUSer store function");
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('user registration :: ', user);
          
        })
        .catch((error) => {
          console.log('user registration error :: ', error.message);
        });
    },
  },
});
