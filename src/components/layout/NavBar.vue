<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-dekstop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace has-text-white">NoteBalls</div>
        <a
          @click.prevent="showMobileMenu = !showMobileMenu"
          :class="{ 'is-active': showMobileMenu }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileMenu }"
      >
        <div class="navbar-end">
          <RouterLink
            @click="showMobileMenu=false"
            to="/"
            active-class="is-active"
            class="navbar-item is-size-5 is-family-monospace has-text-white"
          >
            Notes
          </RouterLink>
          <RouterLink
            @click="showMobileMenu=false"
            to="/stats"
            active-class="is-active"
            class="navbar-item is-size-5 is-family-monospace has-text-white"
          >
            Stats
          </RouterLink>
          <button class="button is-small is-info mt-3 ml-3">
            Logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>

<script setup>
import { ref } from "vue";

const showMobileMenu = ref(false);
</script>
