<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Foreword</v-card-title>

          <v-card-text class="cont">By J. Allan Hobson</v-card-text>
          <v-card-text class="cont">
            <p>[J. Allan Hobson, M.D. is a noted theorist of the science of dreaming and professor emeritus of Psychiatry at Harvard Medical School. He has contributed the Foreword below for inclusion in future translations of books by Horney which have not yet been made available in other languages, such as The Therapeutic Process (1999) and The Unknown Karen Horney (2000). Dr. Hobson has written nineteen books on dreaming and waking consciousness and on the implications of research on dreaming for mental health. — AKS]</p>
          </v-card-text>
          <v-card-text class="cont">
            <p>Controversy regarding Freud’s theories is not new. One of his earliest critics was Karen Horney, whose work has now been translated into Korean as well as many other languages. Horney felt, as I do, that Freud’s contributions were epochal but that, like all scientific hypotheses, they were open to question and subject to revision.</p>
            <p>That healthy process is now gaining force against the almost religious fanaticism of the Freudian orthodoxy. Many psychologists have already rejected Freud out of hand but psychiatrists like me and Horney recognize the importance of psychoanalysis to psychotherapy.</p>
            <p>For psychiatry, now armed with a stockpile of chemical weapons against mental illness, there is still no substitute for psychotherapy. Indeed I feel that psychotherapy is a rightful staple of modern life.</p>
            <p>It is for precisely this reason that getting the science underlying psychoanalysis right is so important. Of course Freud’s views need to be questioned, criticized and, wherever possible, corrected. Horney was concerned with clinical-level progress. For her troubles she was unfairly ostracized and it is a pleasure to participate in her long overdue reinstatement.</p>
            <p>My own contributions have been on the biological side and concern updating Freudian dream theory in the light of brain science. I have also experienced the indignity of rejection at the hands of the Freudians. But it is not so much for our common fate as critics of Freud that the reader should appreciate Horney and me.</p>
            <p>It is rather for the common-sense psychological approach, so beautifully evident in Horney’s work, that the translation of her important book should be recognized. For all those who devote themselves to human understanding, this work will be welcome. I am proud to consider myself common-sensical and passionately committed to human self-understanding.</p>
            <p>This is especially true of women, who Horney correctly felt had been misunderstood and misused by Freud. At least half the patients and as many normal people are women and they bear finally having their day in court. We need a modern Karen Horney to help us understand the promise and the problems of feminism.</p>
            <p>My own view of psychotherapy is that it extends far beyond the bounds of psychiatry and even academic psychology. As Horney wrote in Self-Analysis (1942), psychotherapy must be at once lifelong and self-initiated, and can benefit greatly from observing one’s own dreams. Dreams can be recorded and now understood as both the products of an altered brain and a healthy mind. Scientific humanism can welcome Karen Horney as one of its founders.</p>
            <p>The integration of mind and brain which Freud abandoned is now possible and would please Karen Horney. I wish she were alive to see her work emerge from obscurity.</p>
            <p>J. Allan Hobson, M.D.</p>
            <p>Professor Emeritus of Psychiatry, Harvard Medical School</p>
            <p>Best-selling author:</p>
            <p>Dreaming as Virtual Reality (2016)</p>
            <p>Psychodynamic Neurology: Dreams, Consciousness, and Virtual Reality (2015)</p>
            <p>Ego Damage and Repair: Toward a Psychodynamic Neurology (2014)</p>
            <p>Dream Life: An Experimental Memoir (2011)</p>
            <p>East Burke, Vermont</p>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "h1",
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
  padding-top: 10px;
}
</style>
