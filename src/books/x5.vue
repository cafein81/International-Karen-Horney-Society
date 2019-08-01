<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Daniel L. Segal, Frederick L. Coolidge, and Erlene Rosowsky (2006): Personality Disorders and Older Adults. John Wiley & Sons, Inc.</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>"The older adult population is booming in the United States and across the globe. With this boom comes an increase in the number of older adults who experience psychological disorders. Current estimates suggest that about 20% of older persons are diagnosable with a mental disorder: Personality disorders are among the most poorly understood, challenging, and frustrating of these disorders among older adults. This book is designed to provide scholarly and scientifically-based guidance about the diagnosis, assessment, and treatment of personality disorders to health professionals, mental health professionals, and senior service professionals who encounter personality-disordered or "difficult" older adults."</p>
          <p>(book description provided on Amazon.com)</p>
          <p>Chapter 7 in this book contains a section discussing Horney's work and its relevance to personality disorders vis-à-vis older adults, under the subtitle "Interpersonal theories of Personality Disorders" (op. cit., pp. 198-206).</p>
          <p>"Interpersonal theories tend to have a broad theoretical perspective, including interactions with others and the effects that culture, gender, and environmental factors have on the individual psyche and outward behavior. Such theorists as Harry Stack Sullivan, Abraham Maslow, Carl Rogers, Sidney Jourard, Timothy Leary, and Lorna Smith Benjamin may be good representatives for aspects of interpersonal theories, but psychoanalyst Karen Horney developed one of the premier, time-tested, interpersonal theories. Her theory addressed the continuum of psychologically healthy and unhealthy as well as cultural and gender issues, yet her simple language allowed easy access by nonprofessionals. Furthermore, one of Horney's biographers (Paris, 1994) described that what Horney wrote of as neuroses should now best be conceived of as modern personality disorders. For our exposition, we focus on Horney's model."</p>
          <p>(op. cit., p. 198) - AKS</p>
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
