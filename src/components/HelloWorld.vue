<template>
  <div class="home_wrapper">
    <div class="home_wrapper-left">
      <div class="home-wrapper-nav">

      </div>
      <div class="home_wrapper-info">
        <a href="#/artists">Artists</a>
        <a href="#/songs">Songs</a>
        <h1>🔥 MIXTAPE 🔥</h1>
        <!--<p>For</p>
            <img src="https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAAgmAAAAJDU2NDQ5YjBmLWY0YTQtNDQ5ZC1hZDYxLTkxMmFmYTMxZmI3NA.png"/>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'HelloWorld',
  data () {
  return {
  msg: 'Welcome to Your Vue.js App',
  appTitle: 'Mixtape',
  artists: ['Aerosmith', 'Bon Jovi', 'Nirvana']
  }
  },
  methods: {
  logName: function (){
  console.log('The name of the app is MixTape')
  }
  }
  }
</script>

<style>
  html {
    min-height: 100%
  }

  body {
    /*background-color: #1A273A;*/
    background-image: linear-gradient(to top right,#263145,#172236);
    height: 100vh;
  }

  * {
    font-family: 'Barlow', sans-serif;
  }

  .home_wrapper {
    background: url(https://wallpaperscraft.com/image/abstraction_passage_light_black_blue_413_1920x1080.jpg) no-repeat center center fixed;
    background-size: cover;
    min-height: 100%;
  }

  .home_wrapper-left {
    background-color: rgba(23, 34, 54, 0.8);
    min-height: 100vh;
    width: 70%;
    -webkit-clip-path: polygon(0 0, 66% 0, 44% 100%, 0% 100%);
    clip-path: polygon(0 0, 66% 0, 44% 100%, 0% 100%);
  }

  .home_wrapper-info {
    text-align: center;
    padding: 5% 50% 10% 10%;
    color: white;
  }

    .home_wrapper-info a {
      margin: 0px 30px;
      color: white;
      text-decoration: none;
      font-size: 20px;
      padding: 5px;
    }

    .home_wrapper-info h1 {
      margin-top: 40%;
    }

    .home_wrapper-info a:hover {
      outline: 2px solid white;
    }

    .home_wrapper-info img {
      height: 150px;
      width: 150px;
    }

  @media screen and (max-width: 425px) {

    .home_wrapper-left {
      background-color: rgba(23, 34, 54, 0.8);
      min-height: 100vh;
      width: 100%;
      opacity: .70;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    .home_wrapper-info {
      padding: 5% 5% 5% 5%;
    }
  }
</style>

<!--<style src="./HelloWorld.css"></style>-->