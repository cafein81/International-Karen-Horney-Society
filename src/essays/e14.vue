<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >A Horn-eye View of Castaway on the Moon (2009): Alienation from Self, and Emotional Capsules</v-card-title>

          <v-card-text class="cont">By Anthony K. Shin</v-card-text>
          <v-card-text class="cont">
            <p>[This essay aims at illustrating Karen Horney’s concept of the “alienation from self” and Andrew N. Tershakovec’s idea of “emotional capsules” through the depictions of plot and character in the 2009 Korean film Castaway on the Moon. It also draws on the literary critic Bernard J. Paris’s concepts of “implied author,” “rhetoric,” and “mimesis” to discuss the personalities of the two main characters in this film, and offers support for the use of Horneyan theory by connection with the works of J. Allan Hobson and his collaborators. - AKS]</p>
          </v-card-text>
          <v-card-text class="cont">
            <p class="cent">[Introduction]</p>
            <p>The German-American psychiatrist Karen Horney, M.D. (“Horn-eye,” 1885–1952) formulated a brilliant theory of anxiety neurosis that she elaborated in the five books she wrote between 1937 and 1950. Because her theory was primarily synchronic, as contrasted to Freudian theory, Horneyan theory is much more suitable for analyzing the behavior of fictional characters,1 and also real historical figures,2 about whose later lives we have abundant knowledge but whose earlier experiences are dimly known at best, and then only in hindsight. Through the study of the thought and behavior of these people and fictional characters, we learn a great deal about neurotic behavior.</p>
            <p>However, one problem is that we are less familiar with the nature and dynamics of the processes that prepare the ground for neurotic patterns to take hold. It is important to investigate what leads to neurosis in this way because diachronic explanations, including not only Freudian accounts but also more recent ones such as those of object-relations theorists such as Weiss and Sampson (1986, cited in Tershakovec, 2007) have been invalidated, yet they cannot simply be ignored, because they have continued to serve as default explanations in the absence of better ones. As Tershakovec wrote, “a wrong psychoanalytic theory cannot be simply ignored, as it was when it became destructive in case of psychoses: it must be replaced by a correct one” (2007, p. 282). To cast light on how neurosis takes hold, I turn to Horney’s discussion of “alienation from self” and “general measures to relieve tension,” found in the chapters bearing these titles (Chapters 6 and 7) in Neurosis and Human Growth (1950). I use the characters and plot of the 2009 Korean film Castaway on the Moon [Kim-ssi P’yoryugi / 김씨표류기] to illustrate the process of alienation from self and how it gives rise to Horney’s three major strategies for gaining reassurance against anxiety, by moving toward, against, and away from people.3</p>
            <p>There are two major representations of entropy in Castaway on the Moon: (1) the large financial debt that Mr. Kim has incurred, and (2) the disordered state of Miss Kim’s room. In order to escape from his debt, Mr. Kim initially attempts to commit suicide, and until the end of the movie, he himself is excused, by by being stranded on an uninhabited island, from having to deal with the social pressures of everyday urban living. While thus isolated, he adapts to his new situation and is able muster his available physical and mental resources to work toward goals that have meaning and value for him. He is even able to keep up communication with Miss Kim, and it is implied that he regains courage and interest in his own life, and is able to face his various challenges back in the civilized world. In order to escape from and avoid dealing with the disorder in her actual living circumstances, Miss Kim pretends, under a false online identity on Korea’s social networking service “Cyworld,” that she is in fact leading a successful, fulfilling life on the outside.</p>
            <p>Mr. Kim and Miss Kim show different ways of keeping social expectations in abeyance: Mr. Kim tries to conform, superficially, to social expectations, but incurs a very large amount of financial debt to maintain this unfulfilling lifestyle. Miss Kim leads a hikikomori lifestyle of extreme reclusion within one room of her apartment, thereby shutting herself off from and insulating herself from having to abide by social expectations. She has to hide the squalor in which she lives as well as the dreary reality of her existence, which falls far short of the glamorized image she presents to the online world. I suggest that even within this film, we can trace and understand not just the two protagonists’ ineffective attempts to gain reassurance against anxiety, but also the beginnings of their more constructive directions of growth, by connection with Tershakovec’s idea of “emotional capsules.”</p>
            <p>[Other sections to follow]</p>
            <v-divider></v-divider>
            <br />
            <p>1 Cf. Paris, 1974, 1978, 1986, 1990, 1991a, 1991b, 1997, 2003, 2008, 2010, 2012.</p>
            <p>2 Cf. Tucker, 1961 (on Marx), 1973, 1990 (on Stalin); Huffman (on Lyndon Johnson), 1989; Glad, 1980 (on Jimmy Carter).</p>
            <p>3 This ternary branching corresponds to three ways of exchanging entropy with the environment (Friston & Stephan, 2007, p. 421), to minimize free energy: (1) by emulating the source of surprising input (moving toward the source of anxiety), and relying on the properties of the object of mimicry to afford protection and eliminate the need to better predict the sources of qualia presented to awareness; (2) by using an excess of energy, in an entropically costly way (moving against the source of anxiety), to overwhelm, drown out, and choke off the source of surprising input, so that it will no longer produce surprisal; and (3) by habituating to the surprising input (moving away from the source of anxiety), and altering posterior predictions and beliefs to accept and label any and all subsequent input with a neutral, “unsurprising” tag, and transferring or postponing responsibility for tracing qualia to other external or yet-to-be-discovered sources.</p>
          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import VuetifyAudio from "vuetify-audio";
import Footer from "@/components/Footer";

export default {
  name: "e14",
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

.cent {
  font-size: 15px;
  font-weight: 500;
}
</style>
