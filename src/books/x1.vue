<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Celia Hunt (2013), Transformative Learning through Creative Life Writing. Routledge: London and New York.</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>Celia Hunt extends Bernard J. Paris's application of Horneyan theory to the realm of creative writing as a form of therapy. Andrew N. Tershakovec supplements Horneyan theory within psychoanalytic theory with a model of the brain-mind based on knowledge about information processing systems known in computer science. Jack Danielian and Patricia Gianotti, and also Irving Solomon, offer strategies and methods of implementing Horneyan theory in clinical psychiatry in their books. Segal, Coolidge, and Rosowsky include a section on Horney in the context of treating older adult patients. Jennifer Leigh Selig combines Jungian and Horneyan theory to study the leadership of Rev. Dr. Martin Luther King, Jr. in the American civil rights movement. Jeff Mitchell connects Horney not only with philosophy, but also with anthropology and sociology, and Marcus Wiesner uses Horneyan theory to re-examine the mentality of Adolf Hitler in depth. Bernard J. Paris's books from 2010 and 2012 bring Horneyan theory to bear on John Milton's Paradise Lost and Hardy's major novels: Tess of the d'Urbervilles, The Mayor of Casterbridge, and Jude the Obscure. - AKS</p>
          <p>"What happens when we write about ourselves using poetic and fictional techniques? This is the question at the heart of Celia Hunt's new book, in which she explores the effects of creative life writing on adults taking the MA in Creative Writing and Personal Development at the University of Sussex, a unique and highly successful programme of study which many have described as 'life changing'. Drawing together ideas from psychodynamic psychotherapy, literary and learning theory, and work in the cognitive and neurosciences of the self and consciousness, Hunt argues that creative life writing undertaken in a supportive learning environment alongside opportunities for reflection has the power to transform the way people think and learn. It does this is by opening them up to a more embodied self-experience, which increases their awareness of the source of their thinking in bodily feeling and enables them to develop a more reflexive approach to learning."</p>
          <p>Celia identifies the work of the MA as a form of transformative learning, placing it in the context of recent developments in this influential field of learning theory. She also identifies it as a form of therapeutic education arguing, contrary to those who say that this approach leads to a diminished sense of self, that it can help people to develop a stronger sense of agency, whether for writing or learning or relations with others. Topics covered include:</p>
          <p>- Creative writing as a tool for personal and professional development</p>
          <p>- The transformative benefits and challenges of creative writing as a therapeutic activity</p>
          <p>- The relationships between literary structures and the processes of thinking and feeling</p>
          <p>- Collaborative learning and the role of the group</p>
          <p>- The role of cognitive-emotional learning in adult education</p>
          <p>This book will be of interest to teachers in adult, further and higher education wishing to use creative life writing as a tool for learning, as well as to health care professionals seeking arts-based techniques for use in their practice. It will also appeal to academics interested in the relationship between education and psychotherapy, and in the theory and practice of transformative learning, and to writers seeking a deeper understanding of the creative process."</p>
          <p>(information provided on the author's personal website, http://www.celiahunt.com/)</p>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "x1",
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
