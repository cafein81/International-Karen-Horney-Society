<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Irving Solomon (2006): Karen Horney and Character Disorder: A Guide for the Modern Practitioner. Springer Publishing Co., Inc.</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>This manual has been written for a wide range of dynamic practitioners involved in treating patients with narcissistically-infused issues. The treatment model and case material presented in Listening with Purpose cover the spectrum of narcissistic vulnerability and may be applied to the relatively intact patient as well as to the relatively impaired patient. Throughout, it refers to issues of narcissistic vulnerability, from a perspective that assumes narcissistic mechanisms are implicated in all levels of personality functioning and in all people. They exist both in therapists and clients differing only in the level of prominence and degree of disturbance in the personality.</p>
          <p>Cutting across several schools of thought, this treatment manual places shame and its derivatives at the very center of narcissistic vulnerabilities, vulnerabilities which create character splits and dissociative phenomena in their wake.</p>
          <p>One can wonder if therapists have avoided looking at shame because of its contagious qualities. Human experience has demonstrated that shame is a ubiquitous emotion, yet when individuals encounter shame it places them in a seemingly paradoxical position which looks much like a dissociated limbo state with no way out. We experience it and yet don't experience it, we see it and don't see it, we feel it and don't feel it.</p>
          <p>Therapists and mental health professionals cannot adequately treat unexamined shame from within its core unless he or she finds a compatible language for the theory that informs the interventions. In particular, the theory cannot replicate pre-existing splits embedded within a treatment paradigm and cannot be weighted with theoretical underpinnings that are distancing, objectifying, or removed.</p>
          <p>The authors have proposed instead an innovative paradigm-shifting model that is very explicit in recommending an experience-near, moment-to-moment immersion in the conflicted and often disoriented life of patients. Unlike existing volumes in the field, Listening with Purpose: Entry Points into Shame and Narcissistic Vulnerability is by design replete with copious down-to-earth examples to help guide one's systemic shift in treatment focus, treatment emphasis, and treatment posture. The shift involves healing on many levels and opens up for re-examination and re-assessment heretofore difficult-to-treat cases of trauma, dissociation, character disturbances, and addictive disorders.</p>
          <p>(book description provided on Amazon.com)</p>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "m3",
  components: {
    Footer
  }
};
</script>

<style scoped>
.titl {
  font-family: "Playfair+Display", serif;
  font-size: 25px;
  color: #8a2c2c;
  font-weight: 400;
  padding-bottom: 0px;
  padding-left: 0px;
}

.h4 {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 0px;
  padding-left: 0px;
}
.cont {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 25px;
}

.gif {
  height: 500px;
  width: 100%;
  text-align: center;
}
img {
  object-fit: cover;
}

.cent {
  font-size: 15px;
  font-weight: 500;
}

.long-card-wrap {
  margin-top: 10px;
  margin-bottom: 50px;
}
.long-card {
  height: 250px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 25px;
  padding-left: 50px;
  padding-right: 50px;
}
.v-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
