<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">
            A Horn-eye View of Winter Sonata (2002):
            The Search for Glory
          </v-card-title>

          <v-card-text class="cont">By Anthony K. Shin</v-card-text>

          <v-card-text class="cont">
            <p>[This essay aims at illustrating Horney's concept of the "search for glory" through the depictions of plot and character in the 2002 Korean soap opera Winter Sonata. It adapts tools of literary analysis from Bernard J. Paris, and presents support for the use of Horneyan theory by connection with the works of J. Allan Hobson and his collaborators. - AKS]</p>
          </v-card-text>
          <v-card-text class="cont">
            <p class="cent">[Introduction]</p>
            <p>One of the most powerful concepts in the mature theory of Karen Horney, M.D. (“Horn-eye,” 1885–1952) is the “Search for Glory,” which forms the subject of the first chapter in Neurosis and Human Growth (1950). I investigate how Horney’s concept of the search for glory can be used to identify the implied screenwriter of the 2002 Korean soap opera Winter Sonata. It is important to pose this question because it demonstrates how the narrative perspectives of screenwriters in television and film plots influence what they bring to viewers’ awareness, and the influence of a search for glory on the depiction of plot and character can be understood in terms of Horneyan theory. This investigation is also important because it will help make Horneyan theory accessible to a broader audience, including non-native users of English. To perform this inquiry, I will use Bernard J. Paris’s literary-analytic concept of the “implied author” to infer from which character’s point of view the events of the soap opera are being presented, what kind of search for glory she is on, and how this helps us understand plot manipulations and their relation to the implied screenwriter’s rhetorical stance and to viewer response. In addition, to update Horneyan theory and reinforce it by connection with recent scientific evidence, I will show that its principles are corroborated by the latest findings in dream research and brain science (e.g., Hobson, 1999; Friston & Hobson, 2012, 2014).</p>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import VuetifyAudio from "vuetify-audio";
import Footer from "@/components/Footer";

export default {
  name: "e13",
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

.cent {
  font-size: 15px;
  font-weight: 500;
}
</style>
