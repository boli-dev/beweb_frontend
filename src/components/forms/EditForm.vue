<template>
  <vue-form
    class="ui form tiny"
    :class="{ loading: loading }"
    :state="formstate"
    v-model="formstate"
    @submit.prevent="onSubmit"
  >
    <validate class="field" auto-label :class="fieldClassName(formstate.name)">
      <label> Name </label>
      <sui-input
        value="vhbjlmù"
        placeholder="Name"
        icon="user"
        iconPosition="left"
        name="name"
        required
        v-model="model.name"
      />

      <field-messages name="name">
        <template slot="required" scope="state">
          <label v-if="state.$touched || state.$submitted">
            Name is a required field
          </label>
        </template>
      </field-messages>
    </validate>

    <validate
      class="field"
      auto-label
      :class="fieldClassName(formstate.username)"
    >
      <label> Username </label>
      <sui-input
        placeholder="Username"
        icon="user"
        iconPosition="left"
        name="username"
        required
        v-model="model.username"
      />

      <field-messages name="username">
        <template slot="required" scope="state">
          <label v-if="state.$touched || state.$submitted">
            Username is a required field
          </label>
        </template>
      </field-messages>
    </validate>

    <validate class="field" auto-label :class="fieldClassName(formstate.email)">
      <label> email </label>
      <sui-input
        placeholder="email"
        icon="mail"
        iconPosition="left"
        name="email"
        required
        v-model="model.email"
      />

      <field-messages name="email">
        <template slot="required" scope="state">
          <label v-if="state.$touched || state.$submitted">
            Email is a required field
          </label>
        </template>
      </field-messages>
    </validate>

    <validate
      class="field"
      auto-label
      :class="fieldClassName(formstate.password)"
    >
      <label> Password </label>
      <sui-input
        type="password"
        placeholder="Password"
        icon="key"
        iconPosition="left"
        name="password"
        required
        v-model="model.password"
      />

      <field-messages name="password">
        <template slot="required" scope="state">
          <label v-if="state.$touched || state.$submitted">
            Password is a required field
          </label>
        </template>
      </field-messages>
    </validate>

    <sui-button class="b" type="submit" content="Update" />
  </vue-form>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'EditForm',
    props: ['user'],

    data: () => ({
      formstate: {},
      model: {
        name: '',
        username: '',
        email: '',
        Password: '',
      },
    }),

    watch: {
      user: {
        deep: true,
        handler(val) {
          this.model = val;
        },
      },
    },

    computed: {
      ...mapGetters({
        loading: 'User/GET_LOADING',
      }),
    },

    methods: {
      fieldClassName: function(field) {
        if (!field) {
          return '';
        }
        if ((field.$touched || field.$submitted) && field.$invalid) {
          return 'error';
        }
      },
      onSubmit: async function() {
        if (this.formstate.$valid) {
          await this.$store.dispatch('User/updateUser', {
            id: this.$route.params.id,
            ...this.model,
          });
        }
      },
    },
  };
</script>

<style scoped>
  .form {
    /* padding-top: 12px !important; */
  }
</style>
