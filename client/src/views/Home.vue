<template>
  <div>
    <app-splash></app-splash>
  </div>
</template>

<script>
// @ is an alias to /src
import Splash from "@/components/Splash.vue";

export default {
  name: "home",
  components: {
    "app-splash": Splash
  }
};
</script>
<style scoped>
html,
body {
  margin: 0px;
  padding: 0px;
}
</style>
