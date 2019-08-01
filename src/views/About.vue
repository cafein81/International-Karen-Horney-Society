<template>
  <div>
    <v-container grid-list-lg class="about">
      <v-layout row wrap>
        <v-flex d-flex xs12 sm6 md7 class="about-img">
          <v-card color="#ffffff">
            <img src="../assets/images/library.jpg" height="565px" width="100%" />
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md5 class="about-text">
          <v-layout row wrap>
            <v-flex d-flex xs12>
              <v-card color="#ffffff">
                <v-card-title class="titl">About the IKHS</v-card-title>
                <v-card-text class="cont">
                  The International Karen Horney Society was founded in 1991 by Bernard J. Paris, Ph.D., and Helen De Rosis,
                  M.D. Bernard Paris has been the Society's director since its inception. The objectives of the Society have been to
                  put people interested in Horney in touch with each other, to keep members informed of developments in Horney theory and
                  Horney studies, and to call Horney's contribution to the attention of those who may not be familiar with it.
                </v-card-text>
                
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title class="titl">More Information</v-card-title>
          <v-card-text class="cont">
                  In the first half-dozen years of its existence, the IKHS facilitated these objectives by distributing an
                  informative membership directory, publishing a Bulletin, and holding meetings and conferences. International conferences
                  were held in New York in 1993 and Rome in 1994, and there were other meetings of a more local nature. In 1995, the
                  IKHS conducted a four day seminar on "Karen Horney's Theory and Its Applications in Science and Clinical Practice" at
                  the East European Institute of Psychoanalysis in St. Petersburg, Russia. The Society has sponsored translations of
                  Horney's works into Russian and Chinese and has assisted those working with Horney in various parts of the world,
                  including South Korea.
                </v-card-text>
          <v-card-title class="h4">Current Activities</v-card-title>

          <v-card-text class="cont">
            2016 marks the 25th anniversary since the founding of the International Karen Horney Society in 1991 by
            Prof. Bernard J. Paris. 2016 also marks the 75th anniversary since the founding of the American Institute
            for Psychoanalysis in 1941 by Dr. Karen Horney. One of the goals of the IKHS this year is to take stock of
            recent and ongoing developments related to Horney’s theory and works. Another is to show connections between
            her psychodynamic theory with computer science and the model of the mind that have been brought to light by Dr.
            Andrew N. Tershakovec (1921–2007). A third goal is to identify how Horneyan theory can be placed in systematic
            relation to the theory of dreaming consciousness of Dr. J. Allan Hobson.
          </v-card-text>
          <v-card-text class="cont">
            Since 1997, the Society has continued to sponsor translations and to facilitate the study of Horney in countries
            where materials have been hard to obtain, but it has stopped holding conferences, adding new members, collecting
            dues, and issuing reports, bulletins, and membership directories. In 2001, the IKHS entered a new phase of activity
            with the establishment of this website. The objectives of the website are those the Society was originally formed
            to implement: to help those interested in Horney to become aware of each other, to inform people of developments
            in Horney studies, and to help people learn about Horney's ideas.
          </v-card-text>

          <v-card-title class="h4">Membership</v-card-title>
          <v-card-text class="cont">
            The IKHS no longer formally enrolls members or collects dues, but anyone wishing to be added to the membership
            directory should send an e-mail to bjparis@ufl.edu with pertinent information, and his or her entry will be added
            when this website is next updated. Those who are already in the membership directory posted here, which was current
            as of 1995, may update their entry via e-mail. Visitors to this website are also invited to contribute to the
            Bulletin Board, which contains notices pertinent to Horney studies and which will be updated periodically.
          </v-card-text>

          <v-card-title class="h4">Director</v-card-title>
          <v-card-text class="cont">
            Anthony K. Shin (email Anthony K. Shin) has been serving in the capacity of Director since 2016. He is currently
            employed as an Assistant Professor in the Department of English Linguistics at Hankuk University of Foreign Studies
            in Seoul, Korea. He has an M.A. in Applied Linguistics from Teachers College Columbia University and an M.A.
            in Middle East, South Asian, and African Studies from Columbia University. His major interests include history
            (of the late Ottoman Empire and British India especially), cognitive science, and the use of popular fiction as
            an aid to understanding Horneyan theory.
          </v-card-text>

          <v-card-title class="h4">Founder, Senior Advisor</v-card-title>
          <v-card-text class="cont">
            Bernard J. Paris has been the Society’s director for twenty-five years since its inception in 1991 until 2016. He
            is a professor emeritus of English Literature at the University of Florida-Gainesville. He has written and edited
            more than a dozen books on literary criticism, almost all of these employing the theory of Karen Horney. He has
            also written a biography of Karen Horney (Karen Horney: A Psychoanalyst’s Search for Self-Understanding, New Haven
            and London: Yale University Press, 1994) and edited two books from Horney’s previously-unpublished works: The
            Therapeutic Process: Essays and Lectures, YUP, 1999, and The Unknown Karen Horney: Essays on Gender, Culture,
            and Psychoanalysis, YUP, 2000. More information about his work on Horney and his applications of her theory to
            the study of literature can be found on his personal web site, which complements this one (see Links).
          </v-card-text>

          <v-card-title class="h4">Advisor</v-card-title>
          <v-card-text class="cont">
            J. Allan Hobson, M.D. is a professor emeritus of Psychiatry at Harvard Medical School who has since 1977 been pioneering
            a neurobiologically-based science of dreaming. Two of his early works on the subject are cited in Andrew N. Tershakovec’s
            The Mind: The Power that Changed the Planet (2007): Hobson & McCarley, “The Brain as a Dream State Generator, An
            Activation-Synthesis Hypothesis of the Dream Process,” The American Journal of Psychiatry 134:12, Dec. 1977, 1335–1348,
            and The Dreaming Brain: How the Brain Creates Both the Sense and the Nonsense of Dreams, New York: Basic Books, 1988.
          </v-card-text>
          <v-card-text class="cont">
            Hobson’s recent books include Dream Life: An Experimental Memoir, Cambridge: MIT Press, 2011; Psychodynamic Neurology: Dreams,
            Consciousness, and Virtual Reality, Boca Raton: CRC Press, 2015; and Dreaming as Virtual Reality, forthcoming, 2016.
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
  name: "About",
  components: {
    Footer,
  }
};
</script>

<style scoped>
img {
  object-fit: cover;
}

.about-img {
  height: 580px;
  margin-top: 50px;
}

.about-text {
  height: 580px;
  margin-top: 50px;
}

.v-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.titl {
  font-family: "Playfair+Display", serif;
  font-size: 25px;
  color: #8a2c2c;
  font-weight: 400;
  padding-bottom: 0px;
}

.h4 {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
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



