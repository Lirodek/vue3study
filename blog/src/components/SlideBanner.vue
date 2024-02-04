<template>
  <div id="carouselExample" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner banner">
      <div class="carousel-item active">
        <img
          src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/2g/2G4VZH5TIWJF1602720144046.jpg"
          class="d-block w-100"
          alt="Image 1"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://www.sisaweek.com/news/photo/201704/90142_70255_2730.png"
          class="d-block w-100"
          alt="Image 2"
        />
      </div>
      <div class="carousel-item">
        <img src="image3.jpg" class="d-block w-100" alt="Image 3" />
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  name : 'SlideBanner',
}
</script>

<style>
.banner {
  size: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;


}
</style>
