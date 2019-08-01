<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Karen Horney as a Humanistic Therapist</v-card-title>
          <v-card-text class="cont">By Jacquie Simon Gunn</v-card-text>
          <v-card-text class="h4">Jacquie Simon Gunn situates Karen Horney as a Humanistic therapist</v-card-text>
          <br />
          <br />
          <div>
            <youtube video-id="y-1cbEbOJ4E" />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "a13",
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
