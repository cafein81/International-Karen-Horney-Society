<template>
  <div>
    <v-container grid-list-lg class="about">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md7 class="about-img">
          <v-card color="#ffffff">
            <img src="../assets/images/mary.jpg" height="565px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md5 class="about-text">
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card color="#ffffff">
                <v-card-title class="titl">News</v-card-title>
                <v-card-text class="cont">
                  2018 has dealt us a tremendous loss: the passing of Dr. Horney’s daughter Marianne Horney
                  Eckardt (1913–2018), at the end of this past August. As Giselle Galdi writes in a tribute
                  to Dr. Eckardt, she read voraciously, reviewed a wide range of psychoanalytic books and was
                  a very active, generous contributor to the American Journal of Psychoanalysis which her
                  mother founded. The International Karen Horney Society joins Dr. Galdi and her colleagues
                  in offering our condolences to Dr. Eckardt’s family.
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "News",
  components: {
    Footer
  }
};
</script>

<style scoped>
.about {
  margin-bottom: 250px;
}
img {
  object-fit: cover;
}

.about-img {
  height: 580px;
  margin-top: 50px;
}

.about-text {
  height: 580px;
  margin-top: 50px;
}

.v-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.titl {
  font-family: "Playfair+Display", serif;
  font-size: 25px;
  color: #8a2c2c;
  font-weight: 400;
  padding-bottom: 0px;
}

.h4 {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 0px;
}
.cont {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 25px;
  padding-top: 10px;
}
</style>