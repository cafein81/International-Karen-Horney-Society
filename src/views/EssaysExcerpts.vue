<template>
  <div>
    <v-container grid-list-lg class="about">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md7 class="about-img">
          <v-card color="#ffffff">
            <img src="../assets/images/lazarus.jpg" height="565px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md5 class="about-text">
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card color="#ffffff">
                <v-card-title class="titl">
                  <router-link class="rout" to="/EssaysExcerpts/e1">Lazarus, What’s Next?</router-link>
                </v-card-title>
                <v-card-text class="cont">
                  Renate's guardian angel, Lazarus, obviously has a great sense of humor-he filled her life with wrenching
                  changes and hilarious adventures. Her mother, Dr. Karen Horney, taught Renate to rely on her own wits,
                  and this she has done with a vengeance. Courtesy of Hitler, Renate spent thirty-four colorful years in Mexico,
                  the love of her life. There she raised her three children, and there her fateful first marriage to a German
                  movie director eroded into divorce. Undeterred , the twice-widowed Renate still seeks out adventure and challenge. Lazarus What's Next?
                </v-card-text>
                <div class="extra">
                  <v-btn depressed>
                    <router-link class="rout" to="/EssaysExcerpts/e1">Read More</router-link>
                  </v-btn>
                </div>
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
              <router-link class="rout" to="/EssaysExcerpts/e2">Mimetic or Semiotic?</router-link>
            </v-card-title>
            <v-card-text>By Abdul Baseer</v-card-text>
            <img src="../assets/images/semio.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/EssaysExcerpts/e3">Horney’s Tridimensional Theory</router-link>
                </v-card-title>
                <v-card-text>By FL Coolidge et al</v-card-text>
                <img src="../assets/images/tri.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/EssaysExcerpts/e4">Resurrecting Horneyan Thinking</router-link>
                </v-card-title>
                <v-card-text>By Thomas Farrell</v-card-text>
                <img src="../assets/images/rise.jpg" alt="ennegram" height="400px" width="100%" />
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
              <router-link class="rout" to="/EssaysExcerpts/e5">Horney & Humanistic Psychoanalysis</router-link>
            </v-card-title>
            <v-card-text>Bernard Paris</v-card-text>
            <img src="../assets/images/human.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/EssaysExcerpts/e6">Why Study Horney?</router-link>
                </v-card-title>
                <v-card-text>Bernard Paris</v-card-text>
                <img src="../assets/images/hands.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/EssaysExcerpts/e7">Horney’s Vision of the Self</router-link>
                </v-card-title>
                <v-card-text>Bernard Paris</v-card-text>
                <img src="../assets/images/self.jpg" alt="ennegram" height="400px" width="100%" />
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
              <router-link class="rout" to="/EssaysExcerpts/e8">Interdisciplinary Applications</router-link>
            </v-card-title>
            <v-card-text>Bernard Paris</v-card-text>
            <img src="../assets/images/multi.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/EssaysExcerpts/e9">Stalin Biographer’s Memoir</router-link>
                </v-card-title>
                <v-card-text>By Robert Tucker</v-card-text>
                <img src="../assets/images/stalin.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link
                    class="rout"
                    to="/EssaysExcerpts/e10"
                  >Female Relationality and the Idealized Self</router-link>
                </v-card-title>
                <v-card-text>By Marcia Westkott</v-card-text>
                <img src="../assets/images/silouete.jpg" alt="ennegram" height="400px" width="100%" />
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
              <router-link class="rout" to="/EssaysExcerpts/e11">Karen Horney & the Enneagram</router-link>
            </v-card-title>
            <v-card-text>By Jerome Wagner</v-card-text>
            <img src="../assets/images/personality.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/EssaysExcerpts/e12">Horney & Active Inference</router-link>
                </v-card-title>
                <v-card-text>Anthony K. Shin</v-card-text>
                <img src="../assets/images/2.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/EssaysExcerpts/e13">Horney & Korean Soap Opera</router-link>
                </v-card-title>
                <v-card-text>Anthony K. Shin</v-card-text>
                <img src="../assets/images/drama.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="small-card-wrap-last">
      <v-layout row wrap>
        <v-flex d-flex xs4>
          <v-card class="small-card">
            <v-card-title class="titl">
              <router-link class="rout" to="/EssaysExcerpts/e14">Horney & Korean Film</router-link>
            </v-card-title>
            <v-card-text>Anthony K. Shin</v-card-text>
            <img src="../assets/images/film.jpg" alt="ennegram" height="400px" width="100%" />
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
  name: "EssaysExcerpts",
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

.extra {
  padding-left: 8px;
}

.v-btn {
  text-transform: inherit;
}
.small-card-wrap {
  margin-bottom: 75px;
  height: 500px;
}

.small-card-wrap-last {
  margin-bottom: 150px;
  height: 500px;
}

.video-card-wrap {
  margin-top: 100px;
  margin-bottom: 50px;
}

.small-card {
  max-height: 500px;
}

.v-small-card {
  max-height: 500px;
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
  height: 75px;
}
.v-titl {
  font-family: "Playfair+Display", serif;
  font-size: 25px;
  color: #8a2c2c;
  font-weight: 400;
  height: 75px;
  text-align: center;
  padding-top: 50px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
img {
  object-fit: cover;
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

.rout {
  text-decoration: none;
  color: #8a2c2c;
}
.rout:hover {
  color: dodgerblue;
}
</style>