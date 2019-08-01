<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">South Africa</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Angeline Carruthers, B.A.</v-card-title>
            <br />
            <p>(Psychology and Archaeology, University of Pretoria)</p>
            <p>P.O. Box 51491, Wierda Park, 0149, Republic of South Africa. Tel. 666-8785</p>
            <p>"I went to the University of Pretoria and completed a B.A. degree. I am currently busy with my B.A. (Honours) in Psychology.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Loray Daws</v-card-title>
            <br />
            <p>P. O. Box 1663, Randpark Ridge 2156, RSA.</p>
            <p>Student in psychology and criminology at the University of Pretoria. Upon completion of the B.A., hopes to come to the United States for further training. "Interests include the psychoanalytic theories of E. Fromm, K. Horney, C. Jung, and S. Freud."</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Hans Nieuwoudt</v-card-title>
            <br />
            <p>Parkland 14, Rhinostreet, Hennopspark, Verwoerdburg 0157, Pretoria, RSA</p>
            <p>Student in psychology at the University of Pretoria. Plans to become a clinical psychologist.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Lizel Nunclé</v-card-title>
            <br />
            <p>P.O. Box 13346, Lynnwoodridge 0040, Pretoria, REPUBLIC OF SOUTH AFRICA.</p>
            <p>Student in psychology and criminology. Interests include the "Third Force" theories of Horney, Fromm, etc.</p>
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
  name: "m20",
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
