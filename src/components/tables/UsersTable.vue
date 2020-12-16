<template>
  <sui-table single-line celled striped fixed size="small">
    <sui-table-header>
      <sui-table-row>
        <sui-table-header-cell :width="1">Id</sui-table-header-cell>
        <sui-table-header-cell :width="4">Name</sui-table-header-cell>
        <sui-table-header-cell :width="3" text-align="center"
          >Username</sui-table-header-cell
        >
        <sui-table-header-cell text-align="center" :width="4"
          >Email</sui-table-header-cell
        >
        <sui-table-header-cell :width="2" text-align="center"
          >Actions</sui-table-header-cell
        >
      </sui-table-row>
    </sui-table-header>
    <sui-table-body>
      <sui-table-row v-for="user in users" :key="user.id">
        <sui-table-cell>
          <b> #{{ user.id }} </b>
        </sui-table-cell>
        <sui-table-cell>
          <h4 is="sui-header" image>
            <sui-image
              src="https://semantic-ui-vue.github.io/static/images/avatar/small/mark.png"
              shape="rounded"
              size="mini"
            />
            <sui-header-content>
              {{ user.name }}
              <sui-header-subheader>User</sui-header-subheader>
            </sui-header-content>
          </h4>
        </sui-table-cell>
        <sui-table-cell class="positive" text-align="center">
          <b>{{ user.username }}</b>
        </sui-table-cell>
        <sui-table-cell text-align="center" class="negative">
          <b>{{ user.email }}</b>
        </sui-table-cell>
        <sui-table-cell text-align="center">
          <sui-button-group icons size="small">
            <sui-button @click="deleteUsers(user.id)" class="r" icon="trash" />
            <sui-button @click="edit(user.id)" class="g" icon="edit" />
          </sui-button-group>
        </sui-table-cell>
      </sui-table-row>
    </sui-table-body>
  </sui-table>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'UserTable',
    props: ['users'],

    methods: {
      ...mapActions({
        loadUser: 'User/loadUsers',
      }),

      async deleteUsers(id) {
        await this.$store.dispatch('User/deleteUsers', id);
        this.loadUser();
      },

      edit(id) {
        this.$router.push({
          name: 'Edit_User',
          params: {
            id,
          },
        });
      },
    },
  };
</script>

<style>
  .red {
    color: red !important;
  }
</style>
