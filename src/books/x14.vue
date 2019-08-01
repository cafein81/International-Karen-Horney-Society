<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Bernard J. Paris (2012): A General Drama of Pain: Character and Fate in Hardy's Major Novels.</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>Available in Kindle format on Amazon.com. Also available on Google Play.</p>
          <p>"This motivational analysis of the protagonists in Thomas Hardy's three most widely read novels--Tess of the d'Urbervilles, The Mayor of Casterbridge, and Jude the Obscure--highlights an often-overlooked aspect of his art. Bernard J. Paris shows Hardy's genius in creating imagined human beings. He demonstrates that while Hardy tends to blame external conditions for his characters' painful fates, their downfalls are due to a very complex combination of cosmic, social, and psychological factors.</p>
          <p>Hardy's characters are usually discussed primarily in thematic terms. The characters are are so richly portrayed, Paris argues, that they can be better understood independent of Hardy's interpretations, in motivational terms and he utilizes the psychologist Karen Horney's theories to recover Hardy's intuitions. The characters are full of inner conflicts that make them difficult to fathom, but the approach Paris employs explains their contradictions and illuminates their troubled relationships--shedding light on these expertly crafted imagined human beings.</p>
          <p>This psychological approach to Hardy's characters enables us to understand his characters and gain insight into the implied authors of the works. In addition, the approach shows Hardy's authorial personality. We can see that Hardy treats some defensive strategies more sympathetically than others. Given his view of life as "a general drama of pain," resignation, like that of Hardy's character Elizabeth-Jane, is the strategy he prefers."</p>
          <p>(book description provided on Amazon.com)</p>
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
