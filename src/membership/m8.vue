<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">France</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="400px">
            <v-card-title class="h4">Yves Thoret, M.D., Ph.D.</v-card-title>
            <br />
            <p>53 avenue Anatole France, 78300 Poissy, France. Tel. T21: 30 65 82 37</p>
            <p>Maître de Conférences de Psychopathologie, Directeur adjoint du Centre de Recherches et d'Etudes Freduiennes d l'Universite de Paris X Nanterre.</p>
            <p>"I investigate the theme of theater in Sigmund Freud's works and the post-Freudian theories. I try to insist on the concept of theatricality and to analyze its mechanism. Under the influence of the works of Didier Anzieu, André Green, Norman Holland, and Bernard Paris, I try to analyze some theatrical works from this psychoanalytical point of view. On the other hand, it seems interesting to me to view some analytical concepts in the light of theatrical patterns and metaphors. The concept of theatricality may lead us to analyze "the spectator's response" to a theatrical performance.</p>
            <p>My book entitled La théâtralité, approche psychanalytique was published in Paris in 1993 by Les éditions Dunod."</p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "m8",
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
  padding: 50px;
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
