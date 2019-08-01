<template>
  <div>
    <v-container grid-list-lg class="about">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md7 class="about-img">
          <v-card color="#ffffff">
            <img src="../assets/images/day.jpg" height="565px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md5 class="about-text">
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card color="#ffffff">
                <v-card-title class="titl">
                  <router-link
                    class="rout"
                    to="/AudioVideo/a1"
                  >Introduction to Psychoanalysis and Everyday Living</router-link>
                </v-card-title>
                <br />
                <v-card-text class="cont">
                  The eleven audio recordings linked here were made by six different people: Harold Kelman, Norman Kelman,
                  Bella Steinberg Van Bark, Hugh Mullen, Karen Horney, and Alexander Reid Martin. The order in which the
                  lectures appear below is inferred from Dr. Harold Kelman’s introduction to the series (#6), and from his
                  opening comments to “Masculinity and Femininity” and “The Role of Sex in the Life of Man” (#7 and #8):
                </v-card-text>
                <div class="extra">
                  <v-btn depressed>
                    <router-link class="rout" to="/AudioVideo/a1">Read More</router-link>
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
              <router-link class="rout" to="/AudioVideo/a2">Neurosis of Childhood</router-link>
            </v-card-title>
            <v-card-text>By Norman J. Kelman</v-card-text>
            <img src="../assets/images/chi.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/AudioVideo/a3">Guidance of Child Development</router-link>
                </v-card-title>
                <v-card-text>By Harold Kelman</v-card-text>
                <img src="../assets/images/kids.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/AudioVideo/a4">Problems of Adolescence</router-link>
                </v-card-title>
                <v-card-text>By Norman J. Kelman</v-card-text>
                <img src="../assets/images/teen.jpg" alt="ennegram" height="400px" width="100%" />
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
              <router-link class="rout" to="/AudioVideo/a5">Oldest and Youngest Child</router-link>
            </v-card-title>
            <v-card-text>Alexander R. Martin</v-card-text>
            <img src="../assets/images/olyo.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link
                    class="rout"
                    to="/AudioVideo/a6"
                  >Personality Development: The Only Child</router-link>
                </v-card-title>
                <v-card-text>By Bella Steinberg Van Bark</v-card-text>
                <img src="../assets/images/only.jpg" alt="ennegram" height="400px" width="100%" />
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
                    to="/AudioVideo/a7"
                  >Introduction to Psychoanalysis and Everyday Living</router-link>
                </v-card-title>
                <v-card-text>By Harold Kelman</v-card-text>
                <img src="../assets/images/day.jpg" alt="ennegram" height="400px" width="100%" />
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
              <router-link class="rout" to="/AudioVideo/a8">Masculinity and Femininity</router-link>
            </v-card-title>
            <v-card-text>By Harold Kelman</v-card-text>
            <img src="../assets/images/masfen.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/AudioVideo/a9">The Role of Sex in the Life of Man</router-link>
                </v-card-title>
                <v-card-text>By Harold Kelman</v-card-text>
                <img src="../assets/images/sex.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/AudioVideo/a10">Neurotic Pessimism</router-link>
                </v-card-title>
                <v-card-text>By Harold Kelman</v-card-text>
                <img src="../assets/images/pess.jpg" alt="ennegram" height="400px" width="100%" />
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
              <router-link class="rout" to="/AudioVideo/a11">Sadistic Characteristics of Love Life</router-link>
            </v-card-title>
            <v-card-text>By Karen Horney (read by Hugh Mullen)</v-card-text>
            <img src="../assets/images/love.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/AudioVideo/a12">Overemphasis on Love</router-link>
                </v-card-title>
                <v-card-text>By Karen Horney</v-card-text>
                <img src="../assets/images/worry.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container grid-list-lg class="video-card-wrap">
      <v-divider></v-divider>
      <div class="v-titl">Videos</div>
      <v-layout row wrap>
        <v-flex d-flex xs4>
          <v-card class="v-small-card">
            <v-card-title class="titl">
              <router-link class="rout" to="/AudioVideo/a13">Karen Horney as a Humanistic therapist</router-link>
            </v-card-title>
            <v-card-text>J Simon Gunn</v-card-text>
            <img src="../assets/images/human.jpg" alt="ennegram" height="400px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="v-small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/AudioVideo/a14">
                    Robert C. Tucker Interview,
                    <br />Part 1
                  </router-link>
                </v-card-title>
                <v-card-text>Robert C. Tucker</v-card-text>
                <img src="../assets/images/tucker.jpg" alt="ennegram" height="400px" width="100%" />
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs4>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="v-small-card">
                <v-card-title class="titl">
                  <router-link class="rout" to="/AudioVideo/a15">
                    Robert C. Tucker Interview,
                    <br />Part 2
                  </router-link>
                </v-card-title>
                <v-card-text>Robert C. Tucker</v-card-text>
                <img src="../assets/images/tucker.jpg" alt="ennegram" height="400px" width="100%" />
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
  name: "Video-Audio",
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
  margin-bottom: 30px;
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
  font-weight: 700;
  height: 75px;
  text-align: center;
  padding-top: 50px;
  text-transform: inherit;
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