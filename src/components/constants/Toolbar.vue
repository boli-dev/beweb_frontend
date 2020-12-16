<template>
  <sui-menu pointing>
    <div header is="sui-menu-item" content="Dashboard" />
    <sui-menu-menu position="right" v-if="user && isLoggedIn">
      <div header is="sui-menu-item" :content="user.username" />
      <a is="sui-menu-item" content="Logout" @click="logout" />
    </sui-menu-menu>
  </sui-menu>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Toolbar',

    computed: {
      ...mapGetters({
        user: 'GET_USER',
        isLoggedIn: 'GET_IS_LOGGED_IN',
      }),
    },

    methods: {
      ...mapActions({
        logout: 'logout',
      }),
    },
  };
</script>

<style></style>
