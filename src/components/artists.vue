<template>
  <div class="jamz-wrapper">
    <div class="jamz_sidebar">
      <button class="new-btn">+ New Artist/Album</button>
      <ul class="list-group jamz_artist-list">
        <li tabindex="" class="list-group-item" >Artist Name</li>
      </ul>
    </div>

    <div class="jamz_main">

      <div class="jamz_album" style="{'background-image':'linear-gradient(to top, black, rgba(12, 12, 13, 0)),url(https://i.scdn.co/image/fcb6ff3b92a1412e225c69277744e33105af963f)'}" ng-if="form == false">
        <div class="jamz_album-info">
          <h1 v-if="selectedArtist">}</h1>
          <p v-if="selectedArtist">Albums</p>
        </div>




        <!--<div class="jamz_album-image">
            <img src="http://www.interactivepixel.net/env/jhap2wp/data/default_artwork/music_ph.png" ng-if="selectedArtist" />
        </div>-->
      </div>

      <div class="jamz_album-list" v-if="form == false">
        <ul>
          <li>Album Name</li>
        </ul>
      </div>

      <div class="jamz_form" v-if="form == true">
        <form>
          <div class="form-group">
            <input type="text" class="" placeholder="Artist Name">
          </div>
          <div class="form-group">
            <input type="text" class="" placeholder="Album Name">
          </div>

          <button type="submit" class="btn btn-default">Submit</button>
          <button class="btn">Close</button>
        </form>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
  name: 'Artists',
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
  .jamz-view {
    height: 100vh;
  }

  .jamz-wrapper {
  }

  .jamz-nav {
    background-color: #172236;
    border: none;
    /*margin-bottom: 50px;*/
  }

  .nav-brand h2 {
    color: white;
  }

  .nav-container {
    padding: 0 10%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    text-align: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

    .nav-links a {
      margin: 20px;
      color: white;
      text-decoration: none;
      flex-grow: 1;
    }


  .jamz-wrapper {
    /*background-color: #094C6B;*/
    /*margin-top: 4%;*/
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
  }

  .jamz_sidebar, .jamz_main {
    padding-top: 15px;
    flex-grow: 1;
    min-height: 100%;
    min-width: 200px;
  }

  .jamz_sidebar {
    background-color: #263145;
    flex-basis: 30%;
    display: flex;
    flex-flow: column;
    align-items: center;
    /*border: 2px solid black;*/
  }

    .jamz_sidebar ul {
      text-align: left;
    }

  .new-btn {
    color: white;
    background-color: transparent;
    border: none;
  }

  .jamz_artist-list {
    margin: 10px 0;
  }

  .jamz_main {
    padding-top: 0;
    flex-basis: 60%;
    text-align: center;
  }

  .jamz_album {
    color: white;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    background-size: cover;
    position: relative;
    min-height: 300px;
  }

  .jamz_album-info {
    text-align: left;
    position: absolute;
    bottom: 0;
    padding: 20px;
  }

  .jamz_album-info, .jamz_album-image {
    flex-grow: 1;
    margin: 10px;
  }

    .jamz_album-image img {
      height: 200px;
      width: 200px;
    }

  .jamz_album-list {
    color: white;
    text-align: left;
    min-height: 100%;
  }

    .jamz_album-list li {
      border-top: 1px solid #313E51;
      border-bottom: 1px solid #313E51;
      padding: 5px 20px;
      cursor: pointer;
    }

      .jamz_album-list li:focus {
        background-color: red;
      }

  .jamz-form form {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  /* Override Bootstrap Panels */

  .list-group {
    text-align: center;
    width: 100%;
  }

  .list-group-item {
    width: 100%;
    background-color: transparent;
    border: none;
    border-top: 1px solid #1A273A;
    border-bottom: 1px solid #1A273A;
    color: white;
    border-radius: 0 !important;
    cursor: pointer;
    padding-left: 10%;
  }

    .list-group-item:hover {
      background-color: #313E51;
    }

    .list-group-item:active {
      color: black;
    }

  ul {
    padding: 0;
  }

    ul li {
      list-style-type: none;
    }

  /* Make links white by default */
  .navbar-brand {
    color: white;
  }

  ul li a {
    color: white;
  }

  /* Set padding to keep content from hitting the edges */
  .body-content {
    color: black;
    /*padding-left: 15px;
    padding-right: 15px;*/
  }

  /* Override the default bootstrap behavior where horizontal description lists 
   will truncate terms that are too long to fit in the left column 
*/
  .dl-horizontal dt {
    white-space: normal;
  }

  /* Set width on the form input elements since they're 100% wide by default */
  input,
  select,
  textarea {
    max-width: 280px;
  }
</style>