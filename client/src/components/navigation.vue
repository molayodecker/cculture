<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
      <b-navbar-brand href="#">
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Who are we</b-nav-item>
          <b-nav-item>
            <router-link to="/speaker">Speakers</router-link>
          </b-nav-item>
          <b-nav-item href="#">Volunteers</b-nav-item>
          <b-nav-item href="#">Register</b-nav-item>
          <b-nav-item class="donate" href="#">Donate</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "NavigationPage"
};
</script>

<style scoped>
.bg-info {
  background-color: #000000 !important;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  cursor: pointer;
}

.navbar-dark .navbar-toggler {
  color: #ffffff;
  border-color: #ffffff;
}

.logo {
  background-color: #ffffff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
}

b-navbar-nav .b-navbar-nav {
  float: right;
  text-align: right;
}

.donate {
  border-radius: 8px;
}

@media screen and (min-width: 950px) {
  .donate {
    background-color: #d8000c;
  }
}
</style>
