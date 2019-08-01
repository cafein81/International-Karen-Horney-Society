<template>
  <div>
    <v-container grid-list-lg class="about">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md7 class="about-img">
          <v-card color="#ffffff">
            <img src="../assets/images/contact.jpg" height="565px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md5 class="about-text">
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card color="#ffffff">
                <v-card-title class="titl">Contact</v-card-title>
                <v-card-text class="cont">
                  <strong>Anthony K. Shin</strong>
                  <br />Director and Website Manager
                  <br />Professors’ Office Bldg. II #806, Hankuk University of Foreign Studies
                  <br />270 Imun-dong, Dongdaemun-gu, Seoul, SOUTH KOREA
                  <br />Postal Code 130-791, E-mail: cafein81@gmail.com
                  <br />Mobile phone: +82 10 2335 9857
                  <br />Skype virtual number: +1 718 395 3706
                  <br />
                  <strong>N.B.:</strong> As Korean Standard Time is GMT +9, I may not be able to answer your calls immediately if you are calling from a very different time zone.
                  <br />
                  <br />
                  <strong>Bernard Paris</strong>
                  <br />Founder and Senior Advisor
                  <br />1430 NW 94th St., Gainesville, FL 32606
                  <br />E-mail: bjparis@ufl.edu, Phone: (352) 331-6605
                  <br />(no calls before noon)
                  <br />Fax: (352) 331-6605
                  <br />(by request -- call to notify me first)
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
  name: "Contact",
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