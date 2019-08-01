<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Paul L. Wachtel (1989): The Poverty of Affluence: A Psychological Portrait of the American Way of Life. New Society Publishers: Philadelphia, PA.</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>"An honest discussion regarding the 'American Way of Life,' and how our 'Affluent Society,' makes us more and more unhappy. A very interesting book that forces us to look inward."</p>
          <P>(book description provided on Amazon.com)</P>
          <p>In The Poverty of Affluence: A Psychological Portrait of the American Way of Life (1989), Paul Wachtel also argues that "there is something compulsive, irrational, and self-defeating" in the way we pursue an ever increasing wealth. While not saying that the whole population is neurotically aggressive, Wachtel feels that Horney's "concept of the moving-against . . . trend captures something important about the manifest patterns of behavior that most characterize our public life and the workings of our economic system" (78). We promote competition rather than mutual support, and in our relation to nature and the environment, "we strive for conquest and domination." We are afraid of being perceived as "a 'pitiful helpless giant' and will commit unreasonable acts of aggression to ward off that feared image" (75). Caught in a vicious circle, we anxiously rely "on the production and accumulation of goods" for our sense of security (79) and continue to do this despite the fact that it makes us more insecure. Wachtel develops these ideas further in "The Preoccupation with Economic Growth: An Analysis Informed by Horneyan Theory" (1991).</p>
          <p>(commentary provided by Bernard J. Paris, elsewhere on this site, and in Appendix A to Paris's Karen Horney: A Psychoanalyst's Search for Self-Understanding, 1994, p. 228.)</p>
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
