<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Jennifer Leigh Selig (2012): Integration: The Psychology and Mythology of Martin Luther King, Jr., and His (Unfinished) Therapy With the Soul of America.</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex xs12 class="cont">
          <p>"Jesse Jackson once said of Martin Luther King, Jr., 'Thinking about him is like thinking about the prism, the sun shining through a glass from as many angles as you look. You know there is another set of rays, and as many angles as you think about Dr. King, there is yet another set of angles with which to analyze him.' Author and depth psychologist Jennifer Leigh Selig approaches King from the angle of a cultural therapist, a radical conceit that extends therapy beyond the bounded container of the consulting room and into the cultural milieu, and beyond the narrow purview of the licensed few and into the hands of the committed many. During the Civil Rights Movement, Selig illustrates how King put America on the couch, talked with her about her issues, challenged her to see her psychological disease, and marched with her along the path of healing, toward her own integration. And just as common wisdom says that therapists can only take clients as far toward wholeness as they have traveled themselves, it is illuminating to look at King's psychological health for hints about why he was able to succeed, and where he might have failed, to heal his 'client,' the soul of America. Drawing upon the mythic roles that possessed King-the deliverer, the prophet, and the martyr-savior-and the mythic goal that obsessed him-the creation of the beloved community-this book is a fascinating and ground-breaking exploration of the psyche and mythos of one man and his country struggling toward integration."</p>
          <p>(book description provided on Amazon.com)</p>
          <p>In this book, Selig notes that Rev. Dr. Martin Luther King, Jr. was familiar with or had at least heard of Horney, and referred to The Neurotic Personality of Our Time (1937) as a "one of the bestsellers of his day" (p. 121). Selig refers many times in Integration to Horney's work, its possible influence on King, and its utility in understanding King's mission. - AKS</p>
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
