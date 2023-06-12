<template>


  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger pb-4" href="#page-top">
                <span class="d-block d-lg-none">Clarence Taylor</span>
                <span class="d-none d-lg-block"><img class="profile-pic" v-bind:src="logo" alt="..." /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#publication">Publications</a></li>
                   <!-- <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li> -->
                </ul>
            </div>
        </nav>

</template>

<script setup>

import { ref } from "vue";

const logo = ref("https://placehold.co/200x200")


</script>

<style scoped>
img.rounded {
  object-fit: cover;
  border-radius: 50%;
  height: 200px;
  width: 200px;
}

.sidebar {
  height: 100vh;
  /* background-color: #f8f9fa;
  position: fixed; */
}

.profile-pic {
  text-align: center;
  border-radius: 100%;
  -moz-border-radius: 100%;
  -webkit-border-radius: 100%;
  width: 190px;
  height: 190px;
  /* border: 10px solid var(--bs-dark); */
  overflow: hidden;
  margin: 0 auto;
  background: #fafafa;
}
</style>