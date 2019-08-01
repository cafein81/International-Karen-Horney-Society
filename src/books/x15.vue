<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Bernard J. Paris (2010): Heaven and Its Discontents: Milton's Characters in Paradise Lost</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>Many critics agree with C. S. Lewis that ""Satan is the best drawn of Milton's characters"". Satan is certainly a wonderful creation, but Adam and Eve are also complex and well-drawn, and God may be the most complicated character of all. Paradise Lost is above all God's story; it is his discontent, first with Lucifer and then with human beings, that drives the action from the beginning until his anger subsides at the world's end.</p>
          <p>God and Satan have similarities not only in their pursuit of revenge, but also in their craving for power and glory. The ambitious Satan wants more than he already has, but what accounts for the voracity of God's appetite? Does the fact that each threatens the status of the other help to explain the intensity of their hatred and rage? Is their vindictiveness a response to being threatened, an effort to repair the injury they feel they've sustained? This seems to be the case for Satan, but must not God also have felt deeply hurt to have such a powerful need for vengeance? If so, why is the Almighty so vulnerable? And why is he so hard on Adam and Eve and the rest of humankind? These are the kinds of questions Bernard Paris tries to answer in this book.</p>
          <p>Paris's purpose is not to focus on Milton's illustrative intentions but to try to understand God, Satan, Adam, and Eve as psychologically motivated characters who are torn by inner conflicts.Most critics treat Milton's characters as coded messages from the author, but their mimetic features interfere with the process of decoding. Instead of looking through the characters to the author, Paris looks at Milton's characters as objects of interest in themselves, as creations inside a creation who escape their thematic roles and are embodiments of his psychological intuitions. This book heightens our appreciation of an ignored aspect of Milton's art and offers new insights into the critical controversies that have surrounded Paradise Lost.</p>
          <p>(book description provided on Amazon.com)</p>
          <p>Transaction Publishers has also reissued reprints of Paris's first two books applying a Horneyan approach to literary criticism: A Psychological Approach to Fiction (1974/2010), with a new introduction by the author; and Character and Conflict in Jane Austen's Novels (1978/2013).</p>
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
