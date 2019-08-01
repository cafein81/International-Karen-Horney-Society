<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Harold Kelman (1971), Helping People: Karen Horney's Psychoanalytic Approach.</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>Although this book is long out of date, and the phrasing reflects the time at which it appeared in print (1971), the first two chapters on "History" and "Theory" contain valuable knowledge about and add perspective to our view of Horney in relation to others in her circle. Furthermore, Kelman's book abounds in references to Horney, as befits a work that endeavored to take up the task in which Horney showed great interest but which she left unfinished:</p>
          <p>"In one of the lectures in the course on 'Psychoanalytic Therapy' (1952) Horney said: 'When we know what does what, how, then I could write the book on technique that I have been trying to write for years.' Horney never did write her book on technique, a lack which this book attempts to fill. Other interests precluded her from doing so. However, she showed her deep concern with technique issues through her continuing efforts in attempting to bring clarity to the many knotty questions it raised."</p>
          <p>(Kelman, op. cit., p. 42)</p>
          <p>In my opinion, the late Andrew Tershakovec's book, from 2007, has provided sufficient knowledge of "what does what, how" that was lacking in Horney and Kelman's time, when the models of how the brain-mind could work, which Tershakovec found in computer science, had not yet become available. In addition, the more recent work of Friston and Hobson has the potential to shed valuable light on why information processing actually does seem to take place by two different modes in the brain-mind, and perhaps even on how the tasks come to be separated and lateralized between the two hemispheres of the brain. - AKS</p>
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
  margin-bottom: 90px;
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
