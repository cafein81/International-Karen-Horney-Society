<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">Mexico</v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg class="long-card-wrap">
      <v-layout row wrap>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="300px">
            <v-card-title class="h4">Annemarie Brügmann, Ph.D.</v-card-title>
            <br />
            <p>(Psychology, Universidad Nacional Autónoma de México)</p>
            <p>Pedro Luis Ogazón 79, Mexico D.F., 01000, MEXICO. Tel. 661-95-17</p>
            <p>Psychoanalyst; Professor of Psychology, University of Mexico; Coordinator of Psychology, Instituto Nacional de Nutricion; private practice. Educational background includes studies in clinical psychology, Austin, Texas; psychoanalytic training, IMPSIA, Mexico; family therapy, Mental Research Institute, Palo Alto; psychosomatic treatment, ISG, Mannheim, Germany.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Sotero Moreno Camacho</v-card-title>
            <br />
            <p>Maestria en Psic. Clinica</p>
            <p>Apartado Postal No. 152-013, 01700, Mexico D.F., MEXICO. Tel. 668-4840</p>
            <p>Faculty, Universidad Nacional Autónoma de México; private practice.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Dr. Mario A. Cicero Franco</v-card-title>
            <br />
            <p>Apartado Postal No. 152-013. 01700, Mexico D.F., MEXICO. Tel. 668-4840.</p>
            <p>Faculty, Universidad Nacional Autónoma de México; private practice.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card" height="320px">
            <v-card-title class="h4">Jorge Silva-Garcia, M.D.</v-card-title>
            <br />
            <p>Joaquin Romo 171, Tlalpan, Mexico D.F., 14410 Mexico. Tel. (252) 665-1269.</p>
            <p>Training, supervising, and practicing psychoanalyst. Consultant, Instituto Nacional de la Nutricion; Assessor, Hospital Central Militar.</p>
            <p>"I met Karen Horney late in her life in Cuernavaca, while visiting with her daughter Mrs. Crevenna [Renate Patterson] and Dr. Fromm. He thought very highly of her and valued their friendship of many years. My first contact with her writings was in 1955-56 when I wrote a dissertation on her writings. When I wrote a paper on "Man's Fear of Women" in 1964, I came across her 1934 paper on this theme."</p>
            <p>Dr. Silva-Garcia has invited Dr. Jeanne Smith to present a series of lectures on Karen Horney in Mexico.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Blanco Elena Mancilla Gómez</v-card-title>
            <br />
            <p>Lincenciada en Psicologia</p>
            <p>Andador 25 de Francisco J. Macin #4, Col. C.T.U. el Risco, Mexico D.F., C.P. 07090, MEXICO. Tel. 715-0941.</p>
            <p>Faculty, Universidad Nacional Autónoma de México; private practice.</p>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12>
          <v-card class="long-card">
            <v-card-title class="h4">Jose Maria Lopez Landiribar</v-card-title>
            <br />
            <p>M.A. (Psychotherapy, Instituto Mexicano de la Paresa)</p>
            <p>Guadalahara 948-18, Col Condesa 06140, Mexico D.F., MEXICO.</p>
            <p>Dean of the Psychology School, Universidad Anahuac; marriage psychotherapist, private practice. International affiliate, American Psychological Association. Titular member, Asociacion Mexicana de Terapia de Paresa.</p>
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
  name: "m16",
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
