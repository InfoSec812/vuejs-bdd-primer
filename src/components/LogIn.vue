<template>
  <div class="column">>
    <q-input v-model="username" />
    <q-input v-model="password" type="password" />
    <q-btn @click="login" label="Log In" />
  </div>
</template>
<script>
export default {
  name: 'Login',
  data: () => {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      // Handle login
    }
  }
}
</script>
<style scoped>

</style>
