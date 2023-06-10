<template >
    <!-- Experience-->
    <section class="resume-section" id="publication">
        <div class="resume-section-content">
            <h2 class="mb-5">Publication</h2>

            <!-- <div v-for="item in experiences">
                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">{{ item.job }}</h3>
                        <div class="subheading mb-3">{{ item.company }}</div>
                        <p>{{ item.description }}</p>
                    </div>
                    <div class="flex-shrink-0"><span class="text-primary">{{ item.period }}</span></div>
                </div>

            </div> -->

        </div>
    </section>
    <hr class="m-0" />
</template>
<script setup>
import { ref } from 'vue';

const experiences = ref([])

experiences.value.push({
    job: "Software developer",
    company: "Maggioli SPA - L'Aquila, Italy",
    description: "Development of Angular and Java applications",
    period: "01/09/2021 - CURRENT"
})

experiences.value.push({
    job: "Lecturer",
    company: "BiTE s.r.l. - L'Aquila, Italy",
    description: "Corporate training in Academy for Web Development: Web Front End in Angular JS, JSP and JavaServlet Web Back-End.\nDesign of mobile applications on the Android platform",
    period: "2021"
})

experiences.value.push({
    job: "Web Developer",
    company: "BiTE s.r.l. - L'Aquila, Italy",
    description: "Web design and development for the Abruzzo ICT hub",
    period: "2021 - CURRENT"
})

experiences.value.push({
    job: "Research scholarship",
    company: "University of L'Aquila - L'Aquila, Italy",
    description: "Research scholarship in 'Strumenti EDA (Electronic Design Automation) for Networked Embedded Systems'.\nDevelopment of mobile applications for Android platform, Java and Kotlin languages.\nWeb development in PHP and Smarty.",
    period: "2018 – 2021"
})


</script>
<style></style>