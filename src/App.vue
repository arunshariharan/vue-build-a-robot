<template>
  <div id="app">
    <header class = 'navbar'>
      <nav>
        <ul>
          <li class="nav-item">
            <img class = 'logo' src = './assets/build-a-bot-logo.png'/>
            Build a Bot
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <RobotBuilder />
    </main>
  </div>
</template>

<script>
// import HomePage from './home/HomePage.vue';
import RobotBuilder from './build/RobotBuilder.vue';

export default {
  name: 'app',
  components: {
    RobotBuilder,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

body {
  background: linear-gradient(to bottom, cadetblue, teal);
  background-attachment: fixed;
}

main {
  background: white;
  padding: 30px;
  margin: 0 auto;
  width: 1024px;
  min-height: 300px;
}

header {
  background-color: slategrey;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 20px;
  font-size: 22px;
  border-right: 3px solid pink;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
