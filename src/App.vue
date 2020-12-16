<template>
  <sui-container text>
    <Toolbar />
    <router-view />
  </sui-container>
</template>

<script>
  import Toolbar from './components/constants/Toolbar';

  export default {
    name: 'App',
    components: {
      Toolbar,
    },
  };
</script>

<style>
  .ui.table thead th {
    background-color: #ffd600 !important;
  }
  .ui.table tr td {
    background-color: #fafafa !important;
  }
</style>
