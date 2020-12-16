<template>
  <sui-grid>
    <sui-grid-row class="centered">
      <sui-grid-column :width="9">
        <sui-message class="negative " v-if="error">
          <sui-message-header>Error</sui-message-header>
          <p>
            {{ error }}
          </p>
        </sui-message>

        <sui-card class="raised fluid">
          <sui-card-content>
            <sui-card-header>Login</sui-card-header>
            <LoginForm />
          </sui-card-content>
        </sui-card>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
</template>

<script>
  import LoginForm from '../components/forms/LoginForm';
  import { mapGetters } from 'vuex';

  export default {
    name: 'Login',
    components: {
      LoginForm,
    },

    computed: {
      ...mapGetters({
        error: 'GET_ERROR',
      }),
    },
  };
</script>

<style>
  .ui.celled.grid > .column:not(.row),
  .ui.celled.grid > .row > .column {
    padding: 0 !important;
  }
</style>
