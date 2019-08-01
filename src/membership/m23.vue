<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">United Kingdom</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="400px">
            <v-card-title class="h4">Gillian Darcy, M. Phil.</v-card-title>
            <br />
            <p>(Birmingham University), Ph.D. (London School of Economics)</p>
            <p>32 Ripon Way, Borehamwood, Herts. WD 6 2HS, U.K. Tel. 081-362-5534</p>
            <p>Lecturer, Research in History, Psychology, Middlesex University. Presently finishing an M.Sc. in Health Psychology and training as a psychotherapist. Member, B.A.C. (trained counselor).</p>
            <p>"Currently doing research on the psychological needs of women who have had multiple miscarriages--at the Royal London Hospital. Interested in Horney's work in relation to motherhood in connection with this research. I should be pleased to hear from others in this and the field of the effect of prenatal deaths on the image of the "Mother and the Child Within."</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="400px">
            <v-card-title class="h4">Celia Hunt, D.Phil.</v-card-title>
            <br />
            <p>University of Sussex [updated 2001].</p>
            <p>16 Cleve Terrace, Lewes, East Sussex, U.K. BN7 1JJ. Tel. 01273-475-383. E-mail: Celia.Hunt@btinternet.com</p>
            <p>Instructor, University of Sussex. Wrote a Master's dissertation entitled "The Inner Conflicts of Franz Kafka," which is a Horneyan analysis.</p>
            <p>"Horney's writings have been very important to me in my own therapy and in my development as a writer. Horney's theory underlies my work on the relationship between fiction writing, autobiography and psychotherapy.</p>
            <p>The course I am teaching for the University of Sussex on Autobiography and Fiction combines creative writing with the study of literature and is based on the assumption that starting to write fiction out of autobiographical material can bring one into closer touch with one's 'real self' and can therefore have a therapeutic effect." See Bulletin Board for an account of Dr. Hunt's use of Horney in her teaching and published writings.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="400px">
            <v-card-title class="h4">John Southgate, M.A., D.M.S.</v-card-title>
            <br />
            <p>Institute for Self-Analysis, 12 Nassington Rd., London NW3 2UD.</p>
            <p>Tel. 071-794-4306</p>
            <p>Steering Committee, International Karen Horney Society. The Institute for Self-Analysis (founded in 1987) was previously the Association of Karen Horney Psychoanalytic Counsellors. It offers a training program and clinical services inspired primarily by the work of Alice Miller, Karen Horney, and John Bowlby. John Southgate has published many essays in the Institute's Journal, and he is the author of Community Counselling Circles and Inner and Outer Group Dynamics. He is co-author, with Rosemary Randall, of The Barefoot Psychoanalyst: An Illustrated Manual of Self Help Therapy, which is based largely on Horney's mature theories.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="400px">
            <v-card-title class="h4">John Ward, Ph.D.</v-card-title>
            <br />
            <p>(Agricultural Economics)</p>
            <p>Braziers End House, Chesham, Bucks. HP5 2UL, England. Tel. (01494) 758278</p>
            <p>Retiring from retail business. Fellow of the Institute of Management.</p>
            <p>"Involuntary fantasies that become conscious can be reliable guides to many of the elements of Karen Horney's mature theory. Because they are involuntary, it might seem more fair to an individual to accept them without judgement, and so be able to see more clearly their influence on behaviour.</p>
            <p>I wish to study involuntary fantasies that become conscious as they seem to me to be so central to the thinking in Neurosis and Human Growth. In the index of NHG fantasy/phantasy are not listed as individual items, but 'fantasy' is mentioned frequently in the text by name and inference.</p>
            <p>It would be most helpful to hear from anyone who has taken an interest in the importance of conscious fantasy in relation to Karen Horney's work."</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Laurie Jo Wright, B.A.</v-card-title>
            <br />
            <p>(History, UCLA), M.A. (Psychoanalytic Studies, U. of Kent)</p>
            <p>16, Bingham Place, London, England W1M 3FH. Tel. 071-486-2608.</p>
            <p>Ph.D. candidate, Centre for Psychoanalytic Studies, University of Kent. Dissertation topic: Generational Object Loss.</p>
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
  name: "m23",
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
