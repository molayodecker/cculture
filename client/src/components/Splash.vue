<template>
  <div>
    <app-navigation></app-navigation>
    <div class="jumbotron">
      <div class="container">
        <!-- <div>
          <img class="logo" src="../assets/logo.png" alt="logo" />
        </div>-->
        <div class="wsite-spacer"></div>
        <div style="text-align:center;">
          <div style="height: 10px; overflow: hidden;"></div>
          <!-- <a href="#" target="_blank">
            <span class="wsite-button-inner">Register Now</span>
          </a> -->
          <div style="height: 10px; overflow: hidden;"></div>
          <div class="paragraph">15TH AUGUST 2020</div>
          <div style="height: 10px; overflow: hidden;"></div>
        </div>
      </div>
    </div>
    <div style="width:1oo%; height:100%">
      <vimeo-player
        ref="player"
        :video-id="399628701"
        @ready="onReady"
        :player-height="height"
        :player-width="width"
        :options="{ responsive: true }"
      ></vimeo-player>
    </div>
    <div id="speakers" class="speakers-bg">
      <h2 class="center-title">
        <span class="color_11">
          <span style="letter-spacing:0.15em; ">SPEAKERS</span>
        </span>
      </h2>
      <div class="wsite-speakers">
        <md-avatar class="md-large">
          <img src="../assets/speaker/daniel-speaker.png" alt="daniel" />
          <p class="img__description">Daniel Fagbuyi</p>
        </md-avatar>
        <md-avatar class="md-large">
          <img src="../assets/speaker/katumu-speaker.jpg" alt="katumu" />
          <p class="img__description">Josiah Katumu</p>
        </md-avatar>
      </div>
    </div>
    <!-- <div id="register" class="ticket-container" style="text-align:center;">
      <div>
        <h2 class="wsite-content-title">
          <font color="#ffffff" size="7">REGISTER NOW!</font>
        </h2>
      </div>
      <div class="register-button">GET TICKET</div>
    </div> -->
    <div id="agenda">
      <div class="agenda">
        <h2 class="center-title" style="margin: 0">
          <span>AGENDA</span>
        </h2>
      </div>
      <div class="grid-container">
        <div class="grid-item grid-item-title">
          <i class="material-icons">access_time</i>
          <br />Time
        </div>
        <div class="grid-item grid-item-title">
          <i class="material-icons">brightness_5</i>
          <br />Morning
        </div>
        <div class="grid-item grid-item-title">
          <i class="material-icons">brightness_7</i>
          <br />Afternoon
        </div>
        <div class="grid-item grid-item-title">
          <i class="material-icons">brightness_6</i>
          <br />Evening
        </div>
        <div class="grid-item grid-white">9:00</div>
        <div class="grid-item grid-full">Doors Open</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-white">9:45</div>
        <div class="grid-item grid-full">Breakfast</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-white">10 - 10:20</div>
        <div class="grid-item grid-full">Worship session</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-white">10:30 - 11:30</div>
        <div class="grid-item grid-full">Session 1</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-white">11:45 - 12: 30</div>
        <div class="grid-item grid-full">Break Out</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-white">12:45 to 1:30</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-full">Lunch</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-white">1:45 - 2:30</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-full">Break Out</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-white">2:45 - 3:45</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-full">Session 2</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-white">3:45</div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-empty"></div>
        <div class="grid-item grid-close">Close</div>
      </div>
    </div>
    <div id="topic">
      <div class="topic-header">
        <h2 class="center-title" style="margin: 0px">
          <font>TOPICS</font>
        </h2>
      </div>
      <div class="sponsor-description">
        <div>
          <div>
            <h4>Shame</h4>
          </div>
          <div>
            <h4>Delayed Marriage</h4>
          </div>
        </div>
        <div>
          <div>
            <h4>Parental Disagreement</h4>
          </div>
          <div>
            <h4>Delayed Conception</h4>
          </div>
        </div>
      </div>
    </div>
    <div id="location" style="width: 100%; height:100%;">
      <div class="sponsors-header">
        <h2 class="center-title" style="margin: 0">
          <font>LOCATION</font>
        </h2>
      </div>
      <div>
        <img src="../assets/location.png" />
        <div
          class="location-content-wrap"
          style="background-color: #59C1A7; color: #FFFFFF; margin-left: 40px;"
        >
          <h4 class="address-title">Address</h4>
          <div class="address-body">
            10001 MD-108, Columbia, MD 21044
          </div>
          <div>
            <a
              href="https://goo.gl/maps/72ahEW1Fi9HhXvjz6"
              target="_blank"
              style="color:#ffffff; text-decoration: underline;"
              >Explore the Avenue</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="sponsor-description">
      <div style="width:50%; padding: 20px;">
        <h3 class="sponsor-header">Become a Sponsor</h3>
        <div style="font-size:18.4px">
          Tell us a little bit about yourself and we will get in touch!
        </div>
        <div>
          <a
            href="mailto:info@truthandculture.com"
            target="_blank"
            style="color:#000000; text-decoration: underline;"
            >Find out More</a
          >
        </div>
      </div>
      <div class="sponsor-img">
        <a href="https://www.cityofhopechurch.net/">
          <img
            src="../assets/sponsors/coh.png"
            alt="City of Hope Presbyterian Church"
        /></a>
        <a href="https://www.columbiapres.org/">
          <img
            src="../assets/sponsors/cpc.png"
            alt="Columbia Presbyterian Church"
          />
        </a>
        <a href="http://rts.edu/washington/">
          <img
            src="../assets/sponsors/rts.png"
            alt="Reformed Theological Seminary"
          />
        </a>
        <a href="https://grace.community/">
          <img
            src="../assets/sponsors/gracelogo.svg"
            alt="Grace Community Church"
          />
        </a>
      </div>
    </div>
    <div class="past-event-all">
      <div class="past-event-container">
        <div class="past-event-block">
          <h2>Interested in past recordings?</h2>
        </div>
        <div class="past-event">
          <p>
            Access keynotes, sessions and more from previous years at the Christ
            and Culture Conference.
          </p>
        </div>
        <div class="past-event">
          <span class="past-events-content-wrapper">View All</span>
        </div>
      </div>
      <div class="past-event-photo">
        <img src="../assets/past-event.jpg" />
      </div>
    </div>
    <div class="subscribe-container">
      <div>
        <div class="subscribe-1">
          <h2>SUBSCRIBE</h2>
        </div>
        <div class="subscribe-2">STAY IN THE LOOP</div>
        <div class="subscribe-3">
          <form>
            <md-field>
              <label>Enter email here</label>
              <md-input></md-input>
              <md-button class="md-raised md-primary">Subscribe Now</md-button>
            </md-field>
          </form>
        </div>
      </div>
    </div>
    <!-- social media -->
    <div class="social-media">
      <i class="fa fa-instagram fa-lg" aria-hidden="true"></i>
      <i class="fa fa-facebook fa-lg" aria-hidden="true"></i>
      <i class="fa fa-twitter" aria-hidden="true"></i>
      <i class="fa fa-linkedin" aria-hidden="true"></i>
      <i class="fa fa-youtube" aria-hidden="true"></i>
    </div>
    <div>
      <div class="footer">
        COPYRIGHT © 2020 TRUTH AND CULTURE - ALL RIGHTS RESERVED.
      </div>
    </div>
  </div>
</template>
<script>
import NavigationPage from "./navigation.vue";
export default {
  data: function() {
    return {
      windowScrolled: false,
      videoID: "141851770",
      height: 320,
      width: 640,
      options: {},
      playerReady: false
    };
  },
  components: {
    "app-navigation": NavigationPage
  },
  methods: {
    onWindowScroll() {
      if (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop > 50
      ) {
        console.log("hello", document.body.scrollTop);
        this.windowScrolled = true;
      } else if (
        (this.windowScrolled && window.pageYOffset) ||
        document.documentElement.scrollTop ||
        document.body.scrollTop < 90
      ) {
        console.log("hi", document.body.scrollTop);
        this.windowScrolled = false;
      }
    },
    onReady() {
      this.playerReady = true;
    },
    play() {
      this.$refs.player.play();
    },
    pause() {
      this.$refs.player.pause();
    }
  },
  mounted: function() {
    this.onWindowScroll();
  }
};
</script>
<style scoped>
html,
body {
  margin: 0px;
  padding: 0px;
  background-color: #cccccc;
}

.jumbotron {
  display: block;
  background-image: url("../assets/splash.svg");
  background-size: auto;
  width: 100%;
  height: auto;
  background-size: 100%;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 62.33%;
  margin-bottom: 0px;
}

.wsite-button-inner {
  display: inline-block;
  height: auto;
  padding: 14px 30px;
  background: transparent;
  background-image: none !important;
  color: #000000;
  background-color: #ffffff;
  letter-spacing: 0.03em;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  font: 25px Roboto !important;
}

.sponsor-description {
  display: flex;
  flex-direction: row !important;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  clear: both;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: #ffcf00;
  font-family: "Acre-Semibold";
}

.sponsor-img {
  display: flex;
  width: 50%;
  flex-wrap: wrap;
}

.sponsor-img img {
  margin: 10px;
  background: #fff;
  height: 100px;
  width: 140px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
}

.past-events-content-wrapper {
  font-family: "Acre-Semibold" !important;
  padding: 8px 20px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  background-color: #333333;
  color: #ffffff;
}

.container {
  padding: 80px 40px;
}

.wsite-spacer {
  height: 430px;
}

.paragraph {
  color: #000000;
  font-family: "Roboto Bold", sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: 0.15em;
  text-shadow: #ffffff;
  background-color: #ffffff;
  margin: 15px auto;
  width: 40%;
}

.speakers-bg {
  background-image: url("../assets/speaker/speakers.png");
  background-size: 100%;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0px;
  padding: 0px;
}

.wsite-speakers {
  display: flex;
  flex-wrap: wrap !important;
  flex-direction: row;
  padding-bottom: 40px;
  padding-top: 40px;
}

.md-avatar.md-large {
  min-width: 320px !important;
  min-height: 320px !important;
  border-radius: 200px !important;
  filter: gray; /* IE5+ */
  -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
  -webkit-transition: all 0.5s ease-in-out;
}

.md-avatar.md-large:hover {
  filter: none;
  -webkit-filter: grayscale(0);
  -webkit-transform: scale(1.1);
}

.location-content-wrap {
  display: flex;
  flex-wrap: wrap;
  padding: 60px 50px;
  position: absolute;
  bottom: 1200px;
  width: 320px;
  font-family: "Acre-Semibold";
}

.color_11 {
  text-align: left;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-size: 42px;
}
.color_12 {
  color: #000000;
  font-family: "Montserrat", sans-serif;
  font-size: 42px;
}
.color_13 {
  text-align: center !important;
  color: #000000;
  font-family: "Montserrat", sans-serif;
  font-size: 42px;
}

.center-title {
  text-align: center !important;
}

h2 {
  margin-block-start: 0px;
  padding: 20px 0px;
}
.ticket {
  /* margin: -327px -45px 0px -20px; */
  content: url("../assets/ticket.svg");
  object-fit: cover;
}
.ticket-container {
  height: auto;
  background-color: #ed2b80;
  background-image: none;
  padding: 40px 0px;
}

.register-button {
  display: flex;
  flex-wrap: wrap;
  color: rgba(0, 0, 0, 0.5);
  font-family: "Roboto Bold", sans-serif;
  font-size: 30px;
  cursor: pointer;
  margin: auto;
  width: 20%;
  border-style: solid;
  border-width: 1px;
  padding: 5px;
  -webkit-transition: all 0.5s ease-in-out;
}

.register-button:hover {
  color: #ffffff;
  filter: none;
  border-width: 1px;
  -webkit-transform: scale(1.1);
}

.sponsor-contained {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.sponsor-avatar-medium {
  min-width: 100px !important;
  min-height: 100px !important;
  border-radius: 200px !important;
  /* margin-right: 125px; */
}

.sponsor-row {
  width: 100px !important;
}

.agenda {
  color: #ffffff;
  background-color: #25286d;
  background-image: none;
  padding: none !important;
  margin: 0;
}

.past-event {
  margin: 0 auto;
  width: 50%;
}

.subscribe-1 {
  padding: 20px 0px;
  margin: 0 auto;
  width: 50%;
  color: #000000;
  font-size: 30px;
}
.subscribe-2 {
  margin: 0 auto;
  width: 50%;
  color: #008c76ff;
  font-family: "Cinzel", sans-serif;
  font-size: 4vw;
}

.subscribe-3 {
  margin: 0 auto;
  width: 50%;
  color: #ffffff !important;
  font-family: "Lato", sans-serif;
  font-size: 57px;
  padding-bottom: 40px;
}

.subscribe-container {
  background-color: #faa094ff;
}

.subscribe-3 > label {
  color: #ffffff !important;
}

.md-field.md-theme-default label {
  color: #000000;
}
.sponsors-header {
  color: #ffffff;
  background-color: #25286d;
}

.topic-header {
  color: #ffffff;
  background-color: rgba(34, 212, 96, 0.7);
  padding: none;
  margin: none;
}

.sponsor-container {
  margin: 0 auto !important;
  text-align: center;
}

.sponsor-container > img {
  width: 120px;
}

.sponsor-title {
  letter-spacing: 0.15em;
  font-family: "Cinzel", sans-serif;
}

.social-media {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  background-color: #36c3f2;
  font-size: 25px;
  color: #ffffff;
  padding: 18px;
}

.grid-item-title {
  background-color: #f2bc21;
}

.grid-container {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: auto auto auto auto;
  font-family: "Roboto", sans-serif;
  font-size: 26px;
  color: #333;
}

.grid-item {
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.material-icons {
  font-size: 45px;
}

.grid-full {
  color: #ffffff;
  background-color: #3fc0c2;
}
.grid-empty {
  color: #ffffff;
  background-color: #254356;
}
.grid-close {
  color: #ffffff;
  background-color: #f0554d;
}

.grid-white {
  background-color: #cccaca;
}

.img__description {
  position: absolute;
  top: 191px;
  bottom: -15px;
  left: 0;
  right: 0;
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  visibility: hidden;
  opacity: 0;
  text-align: center;
  transition: opacity 0.2s, visibility 0.2s;
}

.md-avatar.md-large:hover .img__description {
  visibility: visible;
  opacity: 1;
}

.logo {
  position: absolute;
  top: 2.6%;
  left: 4%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
}

.address-title {
  margin-bottom: 10px;
}

.past-event-container {
  width: 50%;
  padding: 30px;
}

.past-event-block {
  margin: 0 auto;
  width: 50%;
}

.address-body {
  margin-bottom: 10px;
}

.subscribe-img {
  display: block;
}

.md-field {
  margin: 0;
}

.sponsor-header {
  font-size: 39.9px !important;
}

.footer {
  text-align: center;
  background-color: #eee;
}

.past-event-all {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.past-event-photo {
  width: 50%;
  float: right;
}

@media screen and (min-width: 400px) {
  .register-button {
    font-size: 20px;
  }

  .location-content-wrap {
    width: 200px;
    bottom: 1353px;
    font-size: 10px;
  }

  .address-title {
    font-size: 10px;
  }

  .grid-container {
    grid-gap: 0.5px;
    font-size: 10px;
  }

  .grid-item {
    font-size: 15px;
  }

  .grid-item-title {
    padding: 10px !important;
  }
}

@media screen and (max-width: 600px) {
  .jumbotron {
    background-image: url("../assets/bg.png");
  }

  .register-button {
    font-size: 15px;
  }

  .grid-container {
    font-size: 15px;
  }

  .grid-item {
    font-size: 15px;
    padding: 10px !important;
  }

  .grid-item-title {
    padding: 10px !important;
  }

  .grid-full {
    padding: 10px !important;
  }

  .grid-empty {
    padding: 10px !important;
  }

  .address-title {
    font-size: 7px;
  }

  .location-content-wrap {
    width: 100px;
    height: 80px;
    padding: 16px;
    bottom: 1520px;
    font-size: 7px;
  }

  .past-event-container {
    width: 100%;
  }

  .past-event {
    font-size: 10px;
    flex-wrap: wrap;
  }

  .past-event-block h2 {
    font-size: 35px;
  }

  .past-event p {
    width: 100%;
    font-size: 15px;
  }
  .past-event-block {
    width: 100%;
  }

  .past-events-content-wrapper {
    font-family: "Acre-Semibold" !important;
    padding: 2px 10px;
  }

  .sponsor-header {
    font-size: 20px !important;
    font-weight: bold;
  }

  .paragraph {
    width: 70%;
  }

  .past-event-all {
    flex-direction: column;
  }

  .past-event-photo {
    width: 100%;
    float: right;
  }
}

@font-face {
  font-family: "Acre-Semibold";
  src: url("../assets/fonts/acre-semi.otf");
}
</style>
