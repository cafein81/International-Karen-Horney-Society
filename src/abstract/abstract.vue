<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12 class="text">
          <v-card-title
            class="titl"
          >Abstract: In Sickness and in Health: A Psychological Approach to American Culture</v-card-title>

          <v-card-text class="cont">
            James Huffman
            <br />jchuffman@adelphia.net
          </v-card-text>
          <v-card-text class="cont">
            <p>This book applies recent psychological thought to the study of American history and culture. Going in a different direction than studies which use primarily biology-based psychology, this work uses theories that take cultural influences more strongly into account. In particular I use the theories of Karen Horney, updating some of her concepts and carrying her insights more broadly and deeply into American life than has yet been done.</p>
            <p>The personality disorders described by Horney have affected not only many individuals in the United States in the twentieth century, but also the course of American history and culture. Horney has described the major personality disorders not only of our time, but of many cultures and eras. More than one book would be required to do justice to this claim. In the present work I focus on the cultures of the United States, primarily but not exclusively in the twentieth century.</p>
            <p>Since the beginning of the nation, Americans have exhibited personality disorders of the kind Horney identifies. From the first the nation perceived itself as threatened, and Europe maligned its culture as both biologically and socially inferior. The struggle against the fear of inferiority led to some unhealthy responses, including a tendency toward violence, as well as to healthier reactions. To counteract feelings of anxiety and inadequacy, Americans developed an idealized image of American character and engaged in a search for glory. Many people of the United States began to believe that theirs would be the greatest nation on earth. Soon they believed that it was the greatest and always would be. Americans began to feel that they had a "Manifest Destiny" and were, in Lincoln's words, an "almost chosen people." They became caught in a vicious circle: fearing inferiority, they had to prove themselves superior; but when they failed to achieve perfection, they felt inferior once again.</p>
            <p>All the major defensive strategies show up in Americans, from isolationistic withdrawal to self-effacing compliance or expansive dominance. Some studies suggest that the detached or resigned personality may now be common. Compliant conformists are also evident. But most notably, Americans use aggression. In terms of which personality style dominates, the United States is expansive both in cultural style and in psychological foundation. Immigration and the westward movement exaggerated expansiveness in many Americans. Several Presidents, including recent ones like Kennedy, Johnson, and Nixon, show strong symptoms of mostly expansive personality disorders. Expansive personality styles and disorders have affected government, corporations, religious movements, ethnic groups, popular culture, and much of the American public, as well as violent incidents like those in Oklahoma City and Columbine.</p>
            <p>Fortunately, healthy forces are also at work. American individualism is healthy for self-esteem in that it places value on each person; however, that individualism is often carried too far and leads to the glorification of idealized selves and searches for glory. It can also lead the country away from a much needed sense of community. Similarly, goals and achievements are good; everyone enjoys the feeling of competence. But goals which are unreasonable can lead to overachievement and obsession rather than healthy accomplishment. American emphasis on freedom is also basically healthy, though again it can serve unhealthy tendencies. Freedom should be an empowerment of persons, not an occasion to exercise control over others or to avoid connection and commitment. Most of the basic principles in the Declaration of Independence and the Constitution, especially the Bill of Rights, are a basically sound recipe for a society. (There may well be other recipes.) But they do not guarantee health.</p>
            <p>American culture seems most unhealthy when it carries its principles to extremes or when it violates those principles, as in slavery and the historic treatment of many ethnic groups. Even in these cases, nevertheless, health may emerge. Malcolm X, for example, after a very unhealthy youth which first led him to deep psychological problems, eventually came to resist discriminatory social norms in a productive way. Similarly, although some forms of feminism seem unhealthy in glorifying the virtues of the self-effacing or in trying to make women expansive like men, others support healthy self-assertion and self-actualization. Close study of Abraham Maslow's hierarchy of human needs reveals that many Americans suffer from lack of security and fulfillment even of "lower" needs. Nevertheless, many Americans certainly move toward self-actualization, and have difficulties more in trying to achieve "higher" needs such as love and belonging than in achieving safety and material comfort.</p>
            <p>Even much maligned popular culture, with its very clearly expansive embrace of violence, reveals healthy trends. Charles Schulz, in the classic years of his comic strip Peanuts, portrays many personality disorders in American culture in a way which shows their inadequacy. This recognition of the problem is a healthy step, and Schulz's use of humor reveals both the problems and possible solutions. (The same is true of Cathy and Life in Hell.) The Muppets generally seem to reflect healthy psychology also, and programs like Sesame Street and Mr. Rogers' Neighborhood help build good self-esteem in children. The United States is obviously neither completely healthy nor totally sick. But Americans need to recognize and admit which is which. This book analyzes the nation's cultural history in sickness and in health, with the hope of diminishing the unhealthy and enhancing more positive development.</p>
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
  name: "abstract",
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
  text-align: center;
  font-size: 15px;
  font-weight: 500;
}
</style>
