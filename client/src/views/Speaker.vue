<template>
  <div style="display: flex; flex-direction: row;">
    <div class="speaker-profile">
      <img src="../assets/speaker/daniel-speaker.jpg" />
      <h1>Daniel Fagbuyi</h1>
      <button>Get to know Daniel</button>
    </div>
    <div class="speaker-profile">
      <img src="../assets/speaker/daniel-speaker.jpg" />
      <h1>Josiah Katumu</h1>
      <button>Get to know Josiah</button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.speaker-profile {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 650px;
  margin: auto;
  text-align: center;
}
.speaker-description-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(29, 106, 154, 0.72);
  color: #fff;
  visibility: visible;
  opacity: 1;
  background: linear-gradient(
    to right,
    rgba(65, 0, 255, 0.4),
    rgba(255, 0, 232, 0.3)
  );
  /* transition effect. not necessary */
  transition: opacity 0.2s, visibility 0.2s;
}

img {
  width: 100%;
}

/* .speaker-profile:hover .speaker-description-overlay {
  visibility: visible;
  opacity: 1;
} */

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}
</style>
