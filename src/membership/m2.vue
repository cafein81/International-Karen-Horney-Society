<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Austria</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Andrea Dlaska, M.A.</v-card-title>
            <br />
            <p>(German and English, U. of Innsbruck)</p>
            <p>8 Curzon St., Loughborough LE11 3BQ, England</p>
            <p>Ph.D. Candidate, University of Innsbruck; presently teaching at U. of Loughborough, England. [2001 - dissertation has been completed and published. Now a Ph.D. Currently teaching in The Language Centre, U. of Warwick, Coventry CV4 7AL. E-mail: Icsau@warwick.ac.uk]</p>
            <p>Translated Horney's "Ziele Der Analytischen Therapie" (The Goals of Analytic Therapy), published in the recent commemorative issue of AJP (Vol. 51). As research assistant to Bernard Paris at the University of Florida, has translated unpublished portions of Horney's notebooks and diaries and her previously untranslated essays in German.</p>
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
  name: "m2",
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
  height: 350px;
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
