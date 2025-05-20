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
            {{formTitle}}
        </div>
        <div class="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Cras mattis consectetur purus sit amet fermentum.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const register = ref(false);

// we have used computed property so that we can change the value based upon a condition and then return it. In our case we are returning the computed property value based upon wheter our ref is true or false
const formTitle = computed(() => {
    return register.value ? 'Regsiter' : 'Login'
})

</script>

<style>
.auth-form{
    max-width: 400px;
    margin: 0 auto;
}
</style>