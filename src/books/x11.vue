<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Jeff Mitchell (2014), Individualism and Moral Character: Karen Horney's Depth Psychology</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>"There are hundreds of different systems of psychotherapy today, ranging from the traditional 'talking cure' to symbolic 're-birthing' and primal scream. The landscape is littered with serious social science, pop psychology, esoteric doctrine, and pure charlatanism. One of the obvious dangers of so many choices is that the best therapies may be lost in a profusion of competing schools and traditions.</p>
          <p>To some extent, this has been the fate of the school of psychotherapy developed by Karen Horney. Since her death in 1952, Horney's work has received insufficient attention, in part because criticism of Freud's thought may have tainted attitudes toward psychotherapy in general. Jeff Mitchell argues that Karen Horney's school of psychoanalysis constitutes a highly innovative moral psychology. He interprets her approach to the treatment of personality or character disorders as a form of moral education.</p>
          <p>Drawing on research in the social sciences, particularly anthropology, sociology, and psychology, Mitchell argues that Horney's reworking of Freud's thinking preserves and builds upon what was truly insightful in his work, and eliminates the most dubious elements. Her thinking acknowledges that today individuals achieve their own identities rather than accepting what was ascribed to them by birth. This makes Karen Horney's theories especially relevant, both for psychotherapy as well as to thought about human affairs in general."</p>
          <p>(book description provided on Amazon.com and on Google Play)</p>
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
