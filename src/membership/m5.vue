<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Canada</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="420px">
            <v-card-title class="h4">Paula Hope Durham, M.A.</v-card-title>
            <br />
            <p>(Religious Studies)</p>
            <p>124 Swift St., R.R. 1, Dunrobin, Ontario KOA 1TO</p>
            <p>Ph.D. candidate, women and religion, University of Ottawa. Dissertation topic: Patriarchy and Self-Hate: Mary Daly Assessed and Evaluated in the Context of Karen Horney's Psychoanalytic Theory. [2001 - dissertation completed; now a Ph.D.]</p>
            <p>"Mary Daly has written extensively on the pathology of patriarchy found in religion and permeating society. She believes that misogyny is what fuels patriarchy and advocates that women live their lives on the boundaries of patriarchal society, expending their energies 'Outercoursing' to the 'Background' biophilic, gynocentric world. To evaluate Daly's pathological diagnosis and resolution to it, I turn to Karen Horney. There is much in Horney that affirms Daly's description: the patriarchal male as aggressive-vindictive; the patriarchal female as compliant and morbidly dependent. Interestingly enough, Daly's liberated woman resembles Horney's detached-resigned neurotic type, suggesting more pathology where liberation is thought to lie. The resolution might be found in Horney's belief that self-hate--a refusal to be who one actually is--is at the root of pathology, patriarchal or otherwise. This insight would have implications for Daly's psychological assessment of patriarchy and her resolution to it."</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Marco Ermacora</v-card-title>
            <br />
            <p>2427 Lockhart, Montreal, Quebec H3P 1X6. Tel. 514-735-0744</p>
            <p>"I am generally interested in the works of the major 'neo-Freudians,' that is Karen Horney, Erich Fromm, and Wilhelm Reich. In addition, the works of Alexander Lowen and Rollo May are very important to me. Among my more specific interests is the relationship between neo-Freudian thought and politics and the arts. What is a non-neurotic way to go about doing politics? And what are the different dynamics of the neurotic styles of doing politics?"</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="320px">
            <v-card-title class="h4">Phyllis Grosskurth, Ph.D</v-card-title>
            <br />
            <p>(English, University of London).</p>
            <p>147 Spruce St., Toronto M5A 2J6. Tel. 416-924-3529</p>
            <p>Professor in the Humanities and Psychoanalytic Thought Program at the University of Toronto. Author of numerous biographies, including Havelock Ellis, Melanie Klein: Her World and Her Work, and Margaret Mead: A Life of Controversy. Her most recent book is The Secret Ring: Freud's Inner Circle and the Politics of Psychoanalysis. Currently working on a biography of Lord Byron.</p>
            <p>[2001 - has published a biography of Byron and an autobiographical memoir]</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Annette Johnson</v-card-title>
            <br />
            <p>38 Chesterton Lane, Guelph, Ontario N1E 6S8.</p>
            <p>Currently working on a Ph.D. in the French Department of the University of Toronto. Dissertation topic: "Karen Horney: A Socio-Psychological Approach to Troubadour and Trobairitz Lyric."</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Floyd Rudmin</v-card-title>
            <br />
            <p>Faculty of Law, Queen's University, Kingston, Ontario K7L 3N6</p>
            <p>"I study the psychology of property and have reason to believe that Horney's ideas on this topic are not far amiss. I would be pleased to interact with any Horney scholars who have in interest in her work on possessiveness." Author of "Gender Differences in the Semantics of Ownership: A Quantitative Phenomenological Survey Study," Journal of Economic Psychology, 15 (1994), 487-510--an essay that makes use of Horney theory.</p>
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
  name: "m5",
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
