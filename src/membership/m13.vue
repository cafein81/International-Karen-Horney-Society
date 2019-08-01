<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Israel</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="450px">
            <v-card-title class="h4">Gavriel Ben-Ephraim, Ph.D.</v-card-title>
            <br />
            <p>(Literature, Hebrew U. of Jerusalem)</p>
            <p>19 Hildesheimer St., Jerusalem 93 115. Tel. 01-666318/617374</p>
            <p>Lecturer in English, Tel Aviv University; formerly a Fellow at the Institute for Advanced Studies in the Humanities, University of Edinburgh, and student of psychoanalytic theory, Israel Psychoanalytic Institute.</p>
            <p>Author of The Moon's Dominion: Narrative Dichotomy and Female Dominance in Lawrence's Earlier Novels and many critical articles, including forthcoming interdisciplinary essays on Freud and Keats, and Freud and Lawrence.</p>
            <p>"Work-in-progress: a full-length study provisionally entitled Ghostly Entanglements: Love, Death, and Fantasy in Romantic Narrative. On such themes as love, death, and the imagination, there is an intricate relationship between the psychoanalytic figure of the instinct--'the drive'--and the literary figure of the character--the 'driven.' Accepting Shoshana Felman's helpful warning against literature's subsidiary position in a slave-master relationship with psychoanalysis, my book traces some dramatic reflections between psychoanalysis (in, above all, Beyond the Pleasure Principle) and fiction (Frankenstein, Wuthering Heights, Jane Eyre, David Copperfield, Lord Jim, and Sons and Lovers)."</p>
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
  name: "m13",
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
  margin-bottom: 100px;
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
