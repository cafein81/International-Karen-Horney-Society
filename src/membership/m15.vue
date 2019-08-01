<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Japan</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="350px">
            <v-card-title class="h4">Akihisa Kondo, M.D.</v-card-title>
            <br />
            <p>(Tokyo Jikeikai School of Medicine)</p>
            <p>Yakumo 2-21-8, Meguro-ku, Tokyo</p>
            <p>Member, Japanese Psychiatric and Neurological Association, Japanese Psychoanalytic Association. Editorial member of "Psychotherapy," a quarterly magazine of psychotherapy published in Tokyo. Private practice of psychotherapy and psychiatry.</p>
            <p>Dr. Kondo studied at the American Institute for Psychoanalysis toward the end of Karen Horney's life and hosted her visit to Japan in 1951. See his article, "Recollections of Dr. Horney," American Journal of Psychoanalysis, September, 1991 (Vol. 51).</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Fusako Nakamachi, C.S.W.</v-card-title>
            <br />
            <p>1-22-3 Nishi-Waseda, Apt. 1706, Sinjuku-ku, Tokyo 169</p>
            <p>Graduate in psychodynamic psychotherapy, the American Institute of Psychoanalysis. Member, Association of Japanese Clinical Psychology. Author of several articles in Japanese.</p>
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
  name: "m15",
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
  margin-bottom: 100px;
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
