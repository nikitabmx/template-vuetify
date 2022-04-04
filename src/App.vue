<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          col4
          to="/"
        >
          Home
        </v-btn>
        <v-btn
          col4
          to="/about"
        >
          About
        </v-btn>
		</v-toolbar-items>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
