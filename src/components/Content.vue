<script setup>
import AboutSection from "@/components/AboutSection.vue";
import ContentSection from "@/components/ContentSection.vue";
import { ref } from "vue";

const name = ref('Alessandro')
const surname = ref("D'Errico")
const address = ref("Via delle Nocelle 4B - L'Aquila - 67100 - AQ - Italy")
const birthday = ref("02/02/1993")
const phone = ref(3356434967)
const email = ref("alede.derrico@gmail.com")
const linkedin = ref("https://it.linkedin.com/")
const instagram = ref("")
const github = ref("")
const facebook = ref("")
const twitter = ref("")
const description = ref("Hello! I'm Alessandro, a passionate developer that love mobile and web development. With a strong background in Computer Science, I possess a good understanding of the most common technologies and frameworks used in the industry. I take great pride in crafting innovative and user-friendly solutions that seamlessly blend functionality with aesthetics. Whether it's creating intuitive mobile apps or building responsive web applications, I am dedicated to delivering high-quality results that exceed client expectations.")

</script>

<template>

  <!-- Page Content-->
  <div class="container-fluid p-0">
    <!-- About-->
    <AboutSection
    :name="name"
    :surname="surname"
    :address="address"
    :birthday="birthday"
    :phone="phone"
    :email="email"
    :facebook="facebook"
    :linkedin="linkedin"
    :github="github"
    :instagram="instagram"
    :twitter="twitter"
    :description="description"
    ></AboutSection>


    <!--    SECTION EXPERIENCE-->
    <ContentSection :section-title="String('Experience')" :section-id="String('experience')">

      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">Senior Web Developer</h3>
          <div class="subheading mb-3">Intelitec Solutions</div>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going
            forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined
            cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">March 2013 - Present</span></div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">Web Developer</h3>
          <div class="subheading mb-3">Intelitec Solutions</div>
          <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
            digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information
            highway will close the loop on focusing solely on the bottom line.</p>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">December 2011 - March 2013</span></div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">Junior Web Designer</h3>
          <div class="subheading mb-3">Shout! Media Productions</div>
          <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key
            performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a
            deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">July 2010 - December 2011</span></div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between">
        <div class="flex-grow-1">
          <h3 class="mb-0">Web Design Intern</h3>
          <div class="subheading mb-3">Shout! Media Productions</div>
          <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C
            users after installed base benefits. Dramatically visualize customer directed convergence without
            revolutionary ROI.</p>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">September 2008 - June 2010</span></div>
      </div>

    </ContentSection>


    <!--SECTION EDUCATION-->
    <ContentSection :section-title="String('Education')" :section-id="String('education')">
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">University of Colorado Boulder</h3>
          <div class="subheading mb-3">Bachelor of Science</div>
          <div>Computer Science - Web Development Track</div>
          <p>GPA: 3.23</p>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">August 2006 - May 2010</span></div>
      </div>
      <div class="d-flex flex-column flex-md-row justify-content-between">
        <div class="flex-grow-1">
          <h3 class="mb-0">James Buchanan High School</h3>
          <div class="subheading mb-3">Technology Magnet Program</div>
          <p>GPA: 3.56</p>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">August 2002 - May 2006</span></div>
      </div>
    </ContentSection>

    <!--SECTION SKILLS-->
    <ContentSection :section-title="String('Skills')" :section-id="String('skills')">

      <div class="subheading mb-3">Programming Languages & Tools</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
        <li class="list-inline-item"><i class="fab fa-angular"></i></li>
        <li class="list-inline-item"><i class="fab fa-react"></i></li>
        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
        <li class="list-inline-item"><i class="fab fa-less"></i></li>
        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
        <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
        <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
      </ul>
      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Mobile-First, Responsive Design
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Cross Browser Testing & Debugging
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Cross Functional Teams
        </li>
        <li>
          <span class="fa-li"><i class="fas fa-check"></i></span>
          Agile Development & Scrum
        </li>
      </ul>

    </ContentSection>

    <!--SECTION INTERESTS-->
    <ContentSection :section-title="String('Interests')" :section-id="String('interests')">
      <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and
        novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and
        kayaking.</p>
      <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I
        am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in
        the front-end web development world.</p>
    </ContentSection>


  </div>

</template>



<style scoped>

</style>