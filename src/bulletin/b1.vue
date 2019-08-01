<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">From the 1994 IKHS Bulletin</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <p class="cont">
              <strong>Alejandro Caceres, Ph.D.</strong>, has written a dissertation (Indiana University) employing Horney and Maslow entitled Dramatized Consciousness in the Novels of Juan Valera: An Approach from the "Third Force" Psychology Perspective.
            </p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <p class="cont">
                  <strong>Church-Dzul, M.A.</strong>, has written a Master's thesis (University of Florida) employing Horney: "The Interplay of Neurosis and Power Relations in Pedro Paramo. See Membership Directory for more information.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <p class="cont">
                  <strong>Hope Durham, Ph.D. candidate</strong>, University of Ottawa, has written a dissertation entitled Patriarchy and Self-Hate: Mary Daly Assessed and Evaluated in the Context of Karen Horney's Psychoanalytic Theory. For more information, see Membership Directory.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <p class="cont">
                  <strong>Diego Garofalo, Ph.D.</strong>, is the author of a text-book on K. Horney's theory: La psicoanalisi interpersonale. Introduzione all'opera di Karen Horney (C.L.E.U.P., Padova 1979), and of a forthcoming volume on Neofreudians (Kardiner, Sullivan, Thompson, Fromm, Horney): I Neofreudiani e il disagio della civilita contemporanea. Introduzione alla psicoanalisi della cultura e della societa.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <p class="cont">
                  <strong>Johanna A. Ghei, Ph.D.</strong> has completed a dissertation at the University of Wisconsin entitled An Analysis of the Emergence and Development of the Concept of the Real Self in the Writings of Karen Horney.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <p class="cont">
                  <strong>Nathan Horwitz, C.S.W.</strong>, has published "A Horneyan Analytic Perspective on Couple Therapy: A Case Study" in The American Journal of Psychoanalysis, Vol. 54, No. 3 (September, 1994), 203-218.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <p class="cont">
                  <strong>James R. Huffman, Ph.D.</strong>, has published "A Horneyan Approach to American Literature" in Dionysus in Literature: Essays on Literary Madness, ed. Branimir Rieger, Popular Press, 1994. He is working on In Sickness and in Health: A Psychological Approach to U.S. History and Culture, a book in which he argues that the personality disorders Horney identifies have deeply influenced the formation and history of American society.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <p class="cont">
                  <strong>Harry Keyishian, Ph.D.</strong>, has published The Shapes of Revenge: Victimization, Vengeance, and Vindictiveness (Humanities Press, 1994). Although this book focuses on Renaissance concepts of revenge and their embodiment in literature, it was partially inspired by Professor Keyishian's knowledge of Karen Horney's ideas about vindictiveness, which are borne out in Renaissance psychology.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <p class="cont">
                  <strong>Sharna Olfman, Ph.D.</strong>, has published "Gender, Patriarchy and Women's Mental Health: Psychoanalytic Perspectives," in the Journal of the American Academy of Psychoanalysis, Vol. 2., No. 2 (Summer, 1984). The essay discusses Horney, Dinnerstein, and Chodorow.
                </p>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12>
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card class="long-card">
                <p class="cont">
                  <strong>Robert Tucker, Ph.D.</strong> The second volume of Professor Tucker's biography of Stalin--Stalin in Power: The Revolution from Above, 1928-1941--originally published by Norton in 1990, is being issued this year in a Russian translation. He is currently at work on the third volume of the trilogy: Stalin, Russia, and the World: The War and Postwar Years, 1941-1953. Professor Tucker employs Horney's theories in his analysis of Stalin's personality.
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
  margin-top: 25px;
  margin-bottom: 50px;
}
.long-card {
  height: 150px;
}
.v-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
