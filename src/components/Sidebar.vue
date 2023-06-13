<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-0" id="sideNav">
    <button class="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
        class="navbar-toggler-icon"></span></button>


    <div class="collapse navbar-collapse my-auto" id="navbarResponsive">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link js-scroll-trigger px-3" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger px-3" href="#experience">Experience</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger px-3" href="#education">Education</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger px-3" href="#publication">Publications</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger px-3" href="#skill">Skills</a></li>
        <li class="nav-item"><a class="nav-link js-scroll-trigger px-3" href="#interests">Interests</a></li>
        <a class="sidebar-email d-lg-none p-3" v-bind:href="mailToEmail"><i class="fa-solid fa-envelope pr-3"></i>{{ email }}</a>
      </ul>
    </div>
    <a class="sidebar-email p-3  d-none d-lg-block" v-bind:href="mailToEmail"><i class="fa-solid fa-envelope pr-3"></i>{{ email }}</a>

  </nav>

</template>

<script setup>
import {ref} from "vue";

const email = ref("alede.derrico@gmail.com")
const mailToEmail = ref("mailto:alede.derrico@gmail.com")
</script>

<style>
.sidebar-email{
  font-size: 1rem !important;
}
</style>