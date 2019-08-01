<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Netherlands</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="260px">
            <v-card-title class="h4">Ineke Bockting, Ph.D.</v-card-title>
            <br />
            <p>(Linguistics, American Literature, U. of Amsterdam)</p>
            <p>Johann Keplerstraat 57, 1098 HK Amsterdam, Netherlands. Tel. 020-6659197</p>
            <p>Dr. Bockting is currently Master of Conferences at the Universite d'Orleans in France. Her book entitled Character and Personality in the Novels of William Faulkner: A Study in Psycholinguistics has been published by University Press of America, 1995. It incorporates aspects of Horneyan personality theory.</p>
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
  name: "m17",
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
