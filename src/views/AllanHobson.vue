<template>
  <div>
    <v-container grid-list-lg class="about">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md7 class="about-img">
          <v-card color="#ffffff">
            <img src="../assets/images/lobsterallan.jpg" height="565px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md5 class="about-text">
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card color="#ffffff">
                <v-card-title class="m-titl">J. Allan Hobson</v-card-title>
                <v-card-text class="cont">
                  J. Allan Hobson, M.D. is a noted theorist of the science of dreaming and professor emeritus of Psychiatry
                  at Harvard Medical School. He has contributed the Foreword below for inclusion in future translations of
                  books by Horney which have not yet been made available in other languages, such as The Therapeutic Process
                  (1999) and The Unknown Karen Horney (2000). Dr. Hobson has written nineteen books on dreaming and waking
                  consciousness and on the implications of research on dreaming for mental health. — AKS
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="titl">
              <router-link
                class="rout"
                to="/AllanHobson/h1"
              >Foreword to future Korean editions of The Therapeutic Process (1999) and The Unknown Karen Horney (2000)</router-link>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <v-card-title class="titl">
                  <a
                    href="http://allanhobson.org/allanhobson/index.html?i=1"
                    target="_blank"
                  >Personal Site</a>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <v-card-title class="titl">
                  <a href="http://allanhobson.org/pages/home.html" target="_blank">Dreamstage Museum</a>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <v-card-title class="titl">
                  <a
                    href="https://sleep.med.harvard.edu/people/faculty/212/J+Allan+Hobson+MD"
                    target="_blank"
                  >Faculty Profile (Harvard)</a>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <v-card-title class="titl">
                  <a
                    href="https://www.youtube.com/watch?v=v7SrEVgt3Kk"
                    target="_blank"
                  >Dream Consciousness</a>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <v-card-title class="titl">
                  <a href="https://vimeo.com/56975531" target="_blank">Dreaming as Virtual Reality</a>
                </v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <v-card-title class="titl">
                  <a
                    href="https://en.wikipedia.org/wiki/Allan_Hobson"
                    target="_blank"
                  >Wikipedia Article</a>
                </v-card-title>
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
  name: "AllanHobson",
  components: {
    Footer
  }
};
</script>

<style scoped>
.about-img {
  height: 580px;
  margin-top: 50px;
}

.about-text {
  height: 580px;
  margin-top: 50px;
}

.cont {
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  text-align: justify;
  text-justify: inter-word;
  line-height: 25px;
  padding-top: 10px;
}

.long-card-wrap {
  margin-bottom: 50px;
}
.long-card {
  height: 100px;
}

.m-titl {
  font-family: "Playfair+Display", serif;
  font-size: 25px;
  color: #8a2c2c;
  font-weight: 400;
  padding-bottom: 0px;
}

.titl {
  font-family: "Playfair+Display", serif;
  font-size: 20px;
  color: #8a2c2c;
  font-weight: 400;
  height: 75px;
}

.titl a {
  font-family: "Playfair+Display", serif;
  font-size: 20px;
  color: #8a2c2c;
  font-weight: 400;
  text-decoration: none;
}

.titl a:hover {
  font-family: "Playfair+Display", serif;
  font-size: 20px;
  color: dodgerblue;
  font-weight: 400;
  text-decoration: none;
}

.v-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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