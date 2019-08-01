<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Jacqueline Simon Gunn with Carlo DeCarlo (2014), Bare: Psychotherapy Stripped</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>"'The jock,' 'a whore,' 'a closet case,' 'a paranoid schizophrenic,' and 'a killer.' In life, in entertainment, in myth, we feel drawn to archetypal personalities--to their drama, to their denial and inner conflicts, to their personal journeys, and to what makes them tick. These five are just some of the people who make up BARE: Psychotherapy Stripped, which explores the true-life chronicles of long-term psychotherapy patients while sharing with the reader what goes through the mind of the therapist during the session. Using a first-person, non-traditional novelized format, this case-study book strips away the classical barrier between the psychologist and the patient so the reader can live through the patients' traumas, their ups and downs, and experience how it feels to sit in the therapist's chair. While empathizing with the patients' lives, readers might just glean insight into themselves and their life in general. BARE peels back the veil of therapy with moving, shocking and sometimes humorous results."</p>
          <p>(book description provided on Amazon.com and on Google Play)</p>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "m3",
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
  padding-left: 0px;
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
  margin-bottom: 160px;
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
