<template>
  <div>
    <sui-button
      class="b"
      floated="right"
      icon="right chevron"
      label-position="right"
      content="Add"
      @click="goAdd"
    />

    <h2 is="sui-header" dividing>
      Users
      <sui-header-subheader>
        Manage your users data
      </sui-header-subheader>
    </h2>

    <sui-segment stacked :class="{ loading: loading, disabled: loading }">
      <div v-if="users.length <= 0" class="ui info message ">
        <i class="close icon"></i>
        <div class="header">
          Info
        </div>
        No users data for now think to add one
      </div>
      <UserTable v-else :users="users" />
    </sui-segment>
  </div>
</template>

<script>
  import UserTable from '../components/tables/UsersTable';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Dashboard',
    components: {
      UserTable,
    },

    mounted() {
      this.loadUsers();
    },

    computed: {
      ...mapGetters({
        users: 'User/GET_USERS',
        loading: 'User/GET_LOADING',
      }),
    },

    methods: {
      ...mapActions({
        loadUsers: 'User/loadUsers',
      }),

      goAdd() {
        this.$router.push({
          name: 'Add_User',
        });
      },
    },
  };
</script>

<style>
  .ui.celled.grid > .column:not(.row),
  .ui.celled.grid > .row > .column {
    padding: 0 !important;
  }

  .ui.segment {
    padding: 0 !important;
  }

  .b {
    margin-top: 12px !important;
    background-color: #ffd600 !important;
  }
</style>
