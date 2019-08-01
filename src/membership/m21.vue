<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Sweden</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="650px">
            <v-card-title class="h4">Jan Stensson, Fil. Lic.</v-card-title>
            <br />
            <p>(University of Stockholm)</p>
            <p>Orrstigen 35, S-14444 Rönninge, Sweden. Tel. 08-53055641 Fax: +46-8-6434551</p>
            <p>Certified child and youth psychotherapist, Ericastiftelsen, Stockholm; psychoanalyst, training and supervising analyst, Swedish Society of Holistic Psychotherapy and Psychoanalysis; private practice. Editor-in-chief, International Forum of Psychoanalysis.</p>
            <p>"My first professional encounter with Horney theory was during my training to be come a child- and youth-psychotherapist at Ericastiftelsen, Stockholm 1960-62. In 1963, I and some colleagues formed a study group for "Holistic Psychotherapy." Our first meeting was a seminar in Oslo, where Harold Kelman was invited as lecturer and seminar leader. Harold Kelman was at that time Dean of the American Institute for Psychoanalysis and Editor of the American Journal of Psychoanalysis. Dr. Kelman came to our group and society each year from 1964 until his death in 1976 and had a very deep influence on theory and clinical practice in our society. He acquainted us, of course, with the thinking of Karen Horney. Since the end of our connections with cultural psychoanalysts (Horneyan, Sullivanian, and Frommian), our society has turned its interest more toward Object Relations Theory, with many contacts to the Independent group of the British Psychoanalytic Society.</p>
            <p>In our society I have had a number of functions, including President of the Society and Dean of the Institute. I have taken part in a number of the fora and conferences of the International Federation of Psychoanalytic Societies. I have presented papers at such conferences in Madrid (1984), Zürich (1985), New York (1987), Stockholm (1991), and Munich (1992). I have published "How do you get out of a balloon?" in the American Journal of Psychoanalysis (Vol. 48, No. 2, 1988); Editorial and "Male and Female Themes in the Psychoanalytic Process: On the Notion of Bisexuality" in International Forum of Psychoanalysis (Vol 1, No. 1, 1992); "Explicit and Hidden Objectives of the Process of Training Psychoanalysts (panel discussion), to be published in International Forum of Psychoanalysis (Vol.2, No. 1, 1993).</p>
            <p>In Swedish, I have published, among other things, forwards to translations of Neurosis and Human Growth and Final Lectures."</p>
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
  name: "m21",
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
