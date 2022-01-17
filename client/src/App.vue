<template>
  <nav class="navbar">
    <div class="navbar-brand flex center">
      <h1 class="font-bold">CustoBot</h1>
    </div>
    <div id="navbar-toggle" class="center closed">
      <ion-icon name="menu"></ion-icon>
      <ion-icon name="close"></ion-icon>
    </div>
    <div id="navbar-buttons" class="navbar-buttons flex">
      <routerLink class="navbar-button" to="/">
        <h1 class="font-light">Home</h1>
      </routerLink>
      <routerLink class="navbar-button" to="/about">
        <h1 class="font-light">About</h1>
      </routerLink>
      <routerLink class="navbar-button" to="/dashboard">
        <h1 class="font-light">Dashboard</h1>
      </routerLink>
    </div>
  </nav>
  <router-view />
</template>
