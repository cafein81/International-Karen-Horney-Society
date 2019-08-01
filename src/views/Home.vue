<template>
<div>
  <div class="hero">
    <carousel-3d
      class="banners"
      :perspective="0"
      :space="700"
      :display="3"
      :width="600"
      :height="350"
      :animationSpeed="2500"
      :border="0"
    >
      <slide class="slide" :index="0">
        <img src="../assets/images/4-2.jpg" rel="Karen-image1" />
      </slide>
      <slide class="slide" :index="1">
        <img src="../assets/images/5-2.jpg" rel="Karen-image2" />
      </slide>
      <slide class="slide" :index="2">
        <img src="../assets/images/8-2.jpg" rel="Karen-image3" />
      </slide>
    </carousel-3d>
  </div>
    <v-container grid-list-lg class="home-2">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md7 class="home-flex">
          <v-card color="#ffffff">
            <v-card-title class="titl">
              <router-link class="rout" to="/p1">Overemphasis on Love</router-link>
            </v-card-title>

            <v-card-text>By Karen Horney</v-card-text>
            <img src="../assets/images/worry.jpg" width="100%" height="558px" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md5>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card color="#ffffff">
                <v-card-title class="titl">
                  <router-link class="rout" to="/p2">Sadistic Characteristics of Love Life</router-link>
                </v-card-title>
                <v-card-text>By Karen Horney</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex d-flex xs12>
                  <v-card color="#ffffff">
                    <v-card-title class="titl">
                      <router-link class="rout" to="/p3">The Role of Sex in the Life of Man</router-link>
                    </v-card-title>
                    <v-card-text>By Harold Kelman</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex d-flex xs12>
                  <v-card color="#ffffff">
                    <v-card-title class="titl">
                      <router-link class="rout" to="/p4">Masculinity and Femininity</router-link>
                    </v-card-title>
                    <v-card-text>By Harold Kelman</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex d-flex>
              <v-layout row wrap>
                <v-flex d-flex xs12>
                  <v-card color="#ffffff">
                    <v-card-title class="titl">
                      <router-link class="rout" to="/p5">Personality Development: The Only Child</router-link>
                    </v-card-title>
                    <v-card-text>By Bella Steinberg Van Bark</v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs9>
          <v-card class="long-card">
            <v-card-title class="titl">
              <router-link class="rout" to="/p6">A Brief Account of Karen Horney</router-link>
            </v-card-title>
            <v-card-text>By Bernard J. Paris</v-card-text>
          </v-card>
        </v-flex>
        <v-flex d-flex xs3>
          <v-card class="long-card">
            <img src="../assets/images/young.jpeg" alt="ennegram" height="250px" width="100%" />
          </v-card>
        </v-flex>

        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs9>
              <v-card class="long-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/p7">Why Study Horney?</router-link>
                </v-card-title>
                <v-card-text>By Bernard J. Paris</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs3>
              <v-card class="long-card">
                <img src="../assets/images/hands.jpg" alt="ennegram" height="250px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs9>
              <v-card class="long-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/p8">Karen Horney: A Bibliography of Her Writings</router-link>
                </v-card-title>
                <v-card-text>By Bernard J. Paris</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs3>
              <v-card class="long-card">
                <img src="../assets/images/writings.jpg" alt="ennegram" height="250px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs9>
              <v-card class="long-card">
                <v-card-title class="titl">
                  <router-link
                    class="rout"
                    to="/Resources/translation"
                  >Translations of Horney’s Books</router-link>
                </v-card-title>
                <v-card-text>By Anthony K. Shin</v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex xs3>
              <v-card class="long-card">
                <img
                  src="../assets/images/translate.jpg"
                  alt="ennegram"
                  height="250px"
                  width="100%"
                />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="small-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs4>
          <v-card class="small-card">
            <v-card-title class="titl">
              <router-link class="rout" to="/p9">Karen Horney Meets the Enneagram</router-link>
            </v-card-title>
            <v-card-text>By Jerome Wagner, Ph.D.</v-card-text>
            <img src="../assets/images/personality.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/p10">Female Relationality and the Idealized Self</router-link>
                </v-card-title>
                <v-card-text>By Marcia Westkott</v-card-text>
                <img src="../assets/images/silouete.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/p11">Memoir of a Stalin Biographer</router-link>
                </v-card-title>
                <v-card-text>By Robert C. Tucker</v-card-text>
                <img src="../assets/images/stalin.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- jdjkdkcdkmdk -->
    <Footer />
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {
    Carousel3d,
    Slide,
    Footer
  }
};
</script>

<style scoped>
.hero {
  width: 100%;
  height: 450px;
  background: #fafafa;
}

.banners {
  margin-top: 50px;
  margin-bottom: 50px;
}

.slide {
  border-radius: 10px;
}

.slide img {
  width: 600px;
  height: 350px;
}

.border {
  background: #cccccc;
}

.text {
  background: #ffffff;
}

.text h1 {
  font-family: "Playfair+Display", serif;
  font-size: 30px;
  color: #8a2c2c;
  font-weight: 400;
}

.text h4 {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #333333;
  font-weight: 500;
}

.text p {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #333333;
  font-weight: 400;
  text-align: justify;
  text-justify: inter-word;
}

.home-2 {
  height: 700px;
  margin-top: 75px;
  margin-bottom: 75px;
  background: #fafafa;
}

.home-flex {
  height: 700px;
}

.titl {
  font-family: "Playfair+Display", serif;
  font-size: 25px;
  color: #8a2c2c;
  font-weight: 400;
  height: 75px;
}

.v-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.long-card-wrap {
  margin-bottom: 50px;
}
.long-card {
  height: 250px;
}

.small-card-wrap {
  margin-bottom: 75px;
}

.small-card {
  height: 500px;
}

.bottm p {
  color: #8a2c2c;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-align: center;
}

img {
  object-fit: cover;
}

.rout {
  text-decoration: none;
  color: #8a2c2c;
}
.rout:hover {
  color: dodgerblue;
}
</style>
