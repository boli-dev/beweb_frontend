<template>
  <sui-grid-row class="centered">
    <sui-grid-column>
      <sui-card class="raised fluid">
        <sui-card-content>
          <sui-card-header> Add User </sui-card-header>
          <AddForm />
        </sui-card-content>
      </sui-card>
    </sui-grid-column>
  </sui-grid-row>
</template>

<script>
  import AddForm from '../components/forms/AddForm';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Add',
    components: {
      AddForm,
    },

    computed: {
      ...mapGetters({
        loading: 'User/GET_LOADING',
      }),
    },
  };
</script>

<style>
  .form {
    padding-top: 12px !important;
  }
</style>
