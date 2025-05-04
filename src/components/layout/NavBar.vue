<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item is-size-4 is-family-monospace">NoteBalls</div>
      <a
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

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <RouterLink to="/" active-class="is-active" class="navbar-item is-size-5 is-family-monospace"> Notes </RouterLink>
        <RouterLink to="/stats" active-class="is-active" class="navbar-item is-size-5 is-family-monospace"> Stats </RouterLink>
      </div>
    </div>
  </nav>
</template>
