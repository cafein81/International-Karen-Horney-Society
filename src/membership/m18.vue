<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Republic of China</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="330px">
            <v-card-title class="h4">Wenja You, Ph.D.</v-card-title>
            <br />
            <p>(Comparative Literature, Rutgers)</p>
            <p>Department of Foreign Languages and Literature, Chung Cheng University, Min-hsiung, Chia-yi, Taiwan, R.O.C.</p>
            <p>Associate Professor of Foreign Languages and Literature.</p>
            <p>"My masters thesis [U. of Florida] uses Freudian and Horneyan approaches to analyze Saul Bellow's early fiction. My doctoral dissertation focuses on Freud's influence on twentieth-century fiction. In a graduate seminar on Psychological Approaches to Literature, I have used Horney's Neurosis and Human Growth as one of the texts. Recently I published a paper using Horney: "A Horneyan Analysis of Lao Li in Lao She's Divorce," Chinese Culture 36: 3 (September 1995), 89-99.</p>
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
  name: "m18",
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
