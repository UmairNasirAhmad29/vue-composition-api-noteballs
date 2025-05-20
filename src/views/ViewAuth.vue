<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !register }">
          <a @click.prevent="register = false">Login</a>
        </li>
        <li :class="{ 'is-active': register }">
          <a @click.prevent="register = true">Regsiter</a>
        </li>
      </ul>
    </div>
    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">
          {{ formTitle }}
        </div>

        <form @click.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                type="email"
                placeholder="e.g. alexsmith@gmail.com"
              />
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="credentials.password"
                class="input"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">{{ formTitle }}</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useStoreAuth } from "@/stores/storeAuth";

const register = ref(false);

// we have used computed property so that we can change the value based upon a condition and then return it. In our case we are returning the computed property value based upon wheter our ref is true or false
const formTitle = computed(() => {
  return register.value ? "Regsiter" : "Login";
});

// creating a reactive object to store the credentials and binding this reactive object to the fields using v-model
const credentials = reactive({
  email: "",
  password: "",
});

const storeAuth = useStoreAuth()

const onSubmit = () => {
  console.log("in onSubmit");
  // if (!credentials.email || !credentials.password) {
  //   alert("Both are required fields");
  // } else {
    if (!register.value) {
      // login user
      storeAuth.loginUser(credentials)
    } else {
      // register user
      storeAuth.registerUser(credentials)
    }
  // }
};
</script>

<style>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
