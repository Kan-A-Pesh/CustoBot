<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li v-for="repository in repositories" v-bind:key="repository._id">
        <a :href="repository.html_url" target="_blank">{{repository.name}}</a>
      </li>
    </ul>
    <p v-if="repositories.length === 0">Whoa, such empty!</p>
  </div>
</template>
