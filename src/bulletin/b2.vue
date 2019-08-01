<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">From the 1997 IKHS Bulletin</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Horney in The New Yorker</v-card-title>
            <br />
            <p>In the June 3, 1996 issue of The New Yorker, James Wolcott cites Horney in a piece entitled "Letterman Unbound":</p>
            <p>. . . Letterman has flared up over technical flubs and miscues that have dragged out the taping of his show, and has indulged in acts of self-loathing bordering on masochism, the most blatant example being the time he pummeled a life-size dummy of himself on the air, giving it repeated shots to the head. His neurosis has achieved classical dimensions. I happened to be reading Dr. Karen Horney's "The Neurotic Personality of Our Time" recently, and (except for the pages that reminded me of me) almost every chapter cried out, Dave, Dave, Dave. The grandiosity with which Letterman habitually touts himself as "the most powerful man in American broadcasting" in his opening remarks and then bashes his own image reflected an inflated yet blighted sense of self, in which he is both overlord and loser, potent yet pathetic. (p. 82).</p>
            <p>There is more.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <v-card-title class="h4">Horney Society in Brazil</v-card-title>
                <br />
                <p>In September, 1995, Alexandre Aiquel Vas Costa and Mariane Rohenkhol founded the Sociedade Karen Horney De Conceitos Psicanalíticos (Karen Horney Society of Psychoanalytical Concepts) in Porto Alegre, Brazil. The object of the Society is to make the scientific community aware of the work of Karen Horney. Neurosis and Human Growth and New Ways in Psychoanalysis were published in Brazil in excellent Portuguese translations, but they have been out of print for more than ten years. There were people who knew Horney's work well in the past, but she is being forgotten now, and the Sociedade is trying to keep her influence alive.</p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <v-card-title class="h4">Chapter on Horney</v-card-title>
                <br />
                <p>There is a substantial chapter on Horney in Points of Influence: A Guide to Using Personality Theory At Work by Morely Segal (Jossey-Bass, 1996). "With brief introductions to the key personality theorists who have had the most profound influence on the study of motivation and human behavior, Morely Segal shows how each theory can help managers gain a better understanding of human behavior, take action to influence behavior, increase their own personal self-awareness, and expand their managerial skills."</p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <v-card-title class="h4">Institute of Contemporary Psychoanalysis Meeting on Horney</v-card-title>
                <br />
                <p>On January 11, 1997, the ICP held a meeting on "An Independent Mind: The Legacy of Karen Horney." Jeffrey Rubin, M.D., spoke on "History--and Possible Lessons--from the American Institute of Psychoanalysis"; Jack Danielian, Ph.D., spoke on "Major Features of Horney Theory: An Update"; Jane Lewis, C.S.W., spoke on "A Contemporary Application of Horney's Concept of Externalized Living in Treating Patients with Eating Disorders"; and Giselle Galdi, Ph.D., spoke on "Horney Applied: Alienation from the Self and the Quality of the Analyst's Responsiveness in Trauma Treatment."</p>
                <p>
                  <strong>Kristin Lauer, Ph.D.</strong>, is working on a monograph, Gallery of the Damned: Edith Wharton and the Inner Life of Women. She would like to correspond with anyone working on Horney and literary criticism and would be glad to exchange manuscripts and editorial suggestions.
                </p>
                <p>
                  <strong>Bernard Paris, Ph.D.</strong> Karen Horney: A Psychoanalyst's Search for Self-Understanding (1994) was issued in paperback by the Yale University Press and published in a German translation by Kore Verlag in the fall of 1996. It is currently being translated into Chinese. Paris has contributed a lengthy chapter on Horney to the fourth edition of Personality and Personal Growth, edited by James Fadiman, Ph.D., and James Frager, Ph.D.
                </p>
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
  name: "b1",
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
  height: 350px;
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
