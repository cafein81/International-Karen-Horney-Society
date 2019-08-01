<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Andrew Tershakovec (2007), The Mind: The Power that Changed the Planet. AuthorHouse: Bloomington, IN.</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>A review of recent findings in key cognitive sciences shows that the human mind's power is unique since it is an information processing device that can program itself. The unconscious within us isn't just a mass of destructive instincts, as we used to believe. To the contrary, it is the real engine of our minds, being the unconscious parallel processing system that learns about the world around us, and uses this knowledge to suitably program its conscious linear counterpart, just as our linear computers are programmed. The intricacies of the interaction between the two systems are summed up and evaluated in this book, so it can supply new insights into the roots of human emotional power, its suppleness and also weaknesses. But if our minds are such incredible machines, shouldn't knowledge of their operations equip us not only for advances in science, but also for reaching superior knowledge of ourselves, and the means for self-improvement?</p>
          <p>(book description provided on Amazon.com)</p>
          <p>"Though dense and complex, this book presents a thorough, much-needed update to the theory of Karen Horney ('Horn-eye,' not 'horny,' 1885-1952). The centerpiece of Tershakovec's book is its model of the functions of the brain's left and right hemispheres as corresponding to two different types of information processing known through computer science: the left brain functions by serial, linear processing (S[L]P), which is closed to input from the environment, and the right hemisphere functions by parallel distributed processing (PDP), is associated with the 'unconscious' and handles feelings and emotions, and is open to input from the environment. However, every paragraph in every chapter contains valuable, important insights on the way the brain-mind functions, in sickness and in health, and although it is not a simplistic self-help guide, the book also contains two somewhat detailed case studies demonstrating one way of tapping into 'emotional capsules' that can help to re-orient people who suffer from anxiety neuroses and steer them back onto the path of self-realization. The final chapter on psycho-pharmacology is perhaps the most complex but also contains powerful analogies and discussions of why it is important, using the knowledge now available to us, to avail ourselves of a more correct model of how the mind works."</p>
          <p>(Anthony K. Shin's customer review on Amazon.com)</p>
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
