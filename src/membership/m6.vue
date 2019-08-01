<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">China</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Zhang Chengmo</v-card-title>
            <br />
            <p>Room 203, House 2, Lane 401, Ti Yu Hui Road (E), Shanghai 200083</p>
            <p>Professor of English, Shanghai International Studies University. Translator of Neurosis and Human Growth into Chinese.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Pan Guoqing, M.A.</v-card-title>
            <br />
            <p>(Shanghai International Studies University), M.A. (English, U. of Florida)</p>
            <p>1130E 9th St., Unit E, Bldg. 39, Albany, CA 94710</p>
            <p>Faculty member, Shanghai International Studies University. Currently in M.B.A. program, University of California, Berkeley. Translator of several of Norman Holland's books into Chinese. Assisting with arrangements for Chinese translation and publication of Horney.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Xia Qing-gen</v-card-title>
            <br />
            <p>Editor, Shanghai Literature and Art Publishing House, 74 Shaoxin Road, Shanghai 200020. E-mail: cslcm@public1.sta.net.cn</p>
            <p>This is the publishing house that has developed a "Karen Horney Series," that includes Chinese translations of many of her books and of several books by Bernard Paris, who is "external editor" of the series. Xia Qing-gen has agreed to be on the Steering Committee of the IKHS, representing China. [added in 2001]</p>
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
  name: "m6",
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
