<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">India</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="420px">
            <v-card-title class="h4">Usha Bande, Ph.D.</v-card-title>
            <br />
            <p>(Indo-English Literature, Himachal Pradesh U.)</p>
            <p>Wexlow, Lower Kaithu, Shimla -171003, H.P., India. Tel. 6173</p>
            <p>Teaches literature at the Government College for Women, Shimla (affiliated with Himachal Pradesh U.)</p>
            <p>"I became aware of the applicability of Horney to literature when I first came across a special issue of The Literary Review, edited by Dr. B. J. Paris. At a time when I was reading the novels of Anita Desai (an Indo-English novelist) and was trying to find a suitable approach, Horney's theory attracted me immediately. Using Horney, I wrote a dissertation on Anita Desai that was subsequently published in India as a book; and I then spent two terms at the University of Florida doing post-doctoral work with Dr. Paris. I am proud to say that I am the first person to take up the Horneyan approach in India, and I wish to continue my efforts to introduce Horney to Indian scholars. I am currently working on a book to be entitled The Psychological Novels of William Golding, and I hope in future to work on Indo-English Literature and Horney. I shall be reading a paper entitled "Anita Desai's Where Shall We Go This Summer? and Margaret Atwood's Surfacing--a Horneyan Approach," at a forthcoming seminar of the Indian Society for Commonwealth Studies."</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="320px">
            <v-card-title class="h4">Mrs. Rama Gupta, M.A., M. Phil.</v-card-title>
            <br />
            <p>Government College for Girls, Shimla 171001 (H.P)</p>
            <p>Senior Lecturer, Government College for Girls (affiliated with H.P. University).</p>
            <p>"I am working on Margaret Atwood and interpreting her works in the light of Horney's tenets. I find Horney's theories to be very relevant, not only in interpreting literature but in understanding our daily motives.</p>
            <p>I was introduced to Horney by Dr. Usha Bande, who has provided me with her personal books. I feel, however, that Horney should be available in India so that Indian scholars could easily get her books. Many times, Indian scholars don't go into this approach because of paucity of material."</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="320px">
            <v-card-title class="h4">Himani Saxena, M.A., M.Phil. (Literature)</v-card-title>
            <br />
            <P>Firwood, Upper Kaithu, Shimla 171003 (H.P.), India</P>
            <p>Presently working as a teacher at D.A.V. Public School and studying for the Ph.D. at H.P. University, Shimla.</p>
            <p>"I did my M.Phil. in 1989 on the topic 'Two Ways of Coping with Absurdity,' a study of Eugene Ionesco and Samuel Beckett. I was looking for something new and effective for my Ph.D. when I met Dr. Usha Bande, who told me about Third Force Psychology and the theories of Karen Horney. After reading Our Inner Conflicts and Neurosis and Human Growth, I decided to apply Horney's theory in my Ph.D. work."</p>
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
  name: "m11",
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
