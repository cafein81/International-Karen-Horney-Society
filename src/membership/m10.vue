<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Greece</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="350px">
            <v-card-title class="h4">George Evangelatos, M.D.</v-card-title>
            <br />
            <p>Trion Navarehon 74-76, Patras, Greece. Tel. (061) 343-582</p>
            <p>Graduate, American Institute for Psychoanalysis; practice in adult and child psychiatry.</p>
            <P>"In my writings and speeches, I apply the Horneyan theory. I have participated in seminars, symposia, and round tables in which I have tried to make Greek psychologists, psychiatrists, and social workers aware of different aspects of Horney theory. I am interested in politics, social psychology, ecology, etc. I am an active member of the "Movement of Self-Consciousness and Self-Protection," located here in Patras, which has as its goal the application of self-development techniques in order to prevent cruelty, aggression, destructiveness, and war. I wrote a book in Greek analyzing war and destructiveness from the perspective of social psychology in 1989. I am particularly interested in exploring Ghandi's technique of passive resistance in social and political matters."</P>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Helen Papathanassopoulou</v-card-title>
            <br />
            <p>Voutsina 77-79, Holargos, 15561 Athens. Tel. 6528695</p>
            <p>Graduate of School of Social Work. Student, Department of Psychology, University of Ioanning. Analysand of Dr. George Evangelatos. Social worker at the Psychotherapeutic and Child Psychiatric Center of Patras. Practice in psychotherapy under supervision of Dr. Evangelatos.</p>
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
  name: "m10",
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
