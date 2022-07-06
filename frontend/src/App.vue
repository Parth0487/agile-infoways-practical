<template>
  
  <div class="">
    <router-view />
  </div>
  <!-- <Footer /> -->
</template>

<script>


export default {
  name: "App",

  created() {
    if (localStorage.getItem("auth")) {
      this.$store.commit("userLogin", true);
    }
  },

  computed: {
    isUserLoggedIn() {
      if (this.$store.state.isUserLoggedIn) {
        return true;
      } else {
        return false;
      }
    },
  },

  data() {
    return {};
  },
};
</script>

<style>

html, body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
