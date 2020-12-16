<template>
  <sui-grid-row class="centered">
    <sui-grid-column :width="9">
      <sui-card class="raised fluid">
        <sui-card-content>
          <sui-card-header> Update </sui-card-header>
          <EditForm :user="user" />
        </sui-card-content>
      </sui-card>
    </sui-grid-column>
  </sui-grid-row>
</template>

<script>
  import EditForm from '../components/forms/EditForm';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Edit',
    components: {
      EditForm,
    },

    computed: {
      ...mapGetters({
        user: 'User/GET_USER',
        loading: 'User/GET_LOADING',
      }),
    },

    mounted() {
      this.$store.dispatch('User/getUser', this.$route.params.id);
    },
  };
</script>

<style>
  .form {
    padding-top: 12px !important;
  }
</style>
