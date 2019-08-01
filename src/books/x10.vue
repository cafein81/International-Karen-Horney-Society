<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Darlene Lancer (2014), Conquering Shame and Codependency: 8 Steps to Freeing the True You. Center City, MN: Hazelden.</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>"A nationally recognized author and codependency expert examines the roots of shame and its connection with codependent relationships. Learn how to heal from their destructive hold by implementing eight steps that will empower the real you, and lead to healthier relationships.</p>
          <p>Shame. The torment you feel when you’re exposed, humiliated, or rejected. The feeling of not being good enough. It’s a deeply painful, universal emotion, yet is not frequently discussed. For some, shame lurks in the unconscious, undermining self-esteem and destroying confidence, leading to codependency on others. These codependent relationships —where we overlook our own needs and desires as we try to care for, protect, or please another—are often covering up abuse, addiction, or other harmful behaviors. Shame and codependency feed off one another, making us feel stuck, never able to let go, move on, and become the true self we were meant to be.</p>
          <p>In Conquering Codependency and Shame, Darlene Lancer sheds new light on shame: how codependents’ feelings and beliefs about shame affect their identity, symptoms, and behavior, and how shame can corrode relationships, destroying trust and love. She then provides the eight key steps to heal from shame, learn to love yourself, and develop healthy relationships."</p>
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
  name: "x10",
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
