<template>
  <vue-form
    class="ui form tiny"
    :class="{ loading: loading }"
    :state="formstate"
    v-model="formstate"
    @submit.prevent="onSubmit"
  >
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

    <sui-button class="b" type="submit" content="Login" />
  </vue-form>
</template>

<script>
  export default {
    name: 'Form',
    data: () => ({
      formstate: {},
      loading: false,
      model: {
        username: '',
        Password: '',
      },
    }),

    methods: {
      fieldClassName: function(field) {
        if (!field) {
          return '';
        }
        if ((field.$touched || field.$submitted) && field.$invalid) {
          return 'error';
        }
      },
      onSubmit: function() {
        if (this.formstate.$valid) {
          this.loading = true;
          setTimeout(async () => {
            await this.$store.dispatch('login', this.model);
            this.loading = false;
          }, 5000);
        }
      },
    },
  };
</script>

<style>
  .form {
    padding-top: 12px !important;
  }
</style>
