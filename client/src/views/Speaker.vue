<template>
  <div>
    <div class="speaker-profile">
      <img src="../assets/speaker/daniel-speaker.jpg" />
      <p class="speaker-description-overlay"></p>
      <h3
        style="position: absolute; top:50%; color:#ffffff; width:100%; text-align:center; padding:50px; background-color:#000000"
      >
        Daniel Fagbuyi
      </h3>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.speaker-profile {
  display: flex;
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
  height: 100%;
}

/* .speaker-profile:hover .speaker-description-overlay {
  visibility: visible;
  opacity: 1;
} */
</style>
