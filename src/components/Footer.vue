<template>
  <div>
    <v-footer dark height="auto">
      <v-flex d-flex xs2>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card class="foot-card">
              <v-card-title class="f-titl">
                <router-link class="rout" to="/EssaysExcerpts">Essays/Excerpts</router-link>
              </v-card-title>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/EssaysExcerpts/e1">Lazarus, What's Next?</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/EssaysExcerpts/e3">Horney’s Tridimensional Theory</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/EssaysExcerpts/e14">Horney and Korean Film</router-link>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs2>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card class="foot-card">
              <v-card-title class="f-titl">
                <router-link class="rout" to="/AudioVideo">Audio/Video</router-link>
              </v-card-title>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/AudioVideo/a2">Neurosis of Childhood</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/AudioVideo/a4">Problems of Adolescence</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/AudioVideo/a5">Oldest and Youngest Child</router-link>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs2>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card class="foot-card">
              <v-card-title class="f-titl">
                <router-link class="rout" to="/Extensions">Extensions/Applications</router-link>
              </v-card-title>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/Extensions/x7">The Poverty of Affluence</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/Extensions/x15">Heaven and Its Discontents</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/Extensions/x4">Karen Horney and Character Disorder</router-link>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs2>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card class="foot-card">
              <v-card-title class="f-titl">
                <router-link class="rout" to="/BulletinBoard">Bulletin Board</router-link>
              </v-card-title>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/BulletinBoard/b1">1994 IKHS Bulletin</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/BulletinBoard/b2">1997 IKHS Bulletin</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/BulletinBoard">1997-2001 IKHS Bulletin</router-link>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs2>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card class="foot-card">
              <v-card-title class="f-titl">
                <router-link class="rout" to="/MembershipDirectory">Membership directory</router-link>
              </v-card-title>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/MembershipDirectory/m24">United States</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/MembershipDirectory/m23">United Kingdom</router-link>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <router-link class="rout" to="/MembershipDirectory/m20">South Africa</router-link>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs2>
        <v-layout row wrap>
          <v-flex d-flex xs12>
            <v-card class="foot-card">
              <v-card-title class="f-titl">
                <router-link class="rout" to="/AllanHobson">Allan Hobson</router-link>
              </v-card-title>
              <v-card-text class="f-titl-sub">
                <a
                  href="http://allanhobson.org/pages/home.html?i=1"
                  target="_blank"
                >Dreamstage Museum</a>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <a
                  href="http://allanhobson.org/allanhobson/index.html?i=1"
                  target="_blank"
                >Personal Website</a>
              </v-card-text>
              <v-card-text class="f-titl-sub">
                <a href="https://vimeo.com/56975531" target="_blank">Dreaming as Virtual Reality</a>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-footer>

    <div class="bottm">
      <br />
      <p>&copy;2019 &nbsp;International Karen Horney Society</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {}
};
</script>

<style scoped>
.foot-card {
  background: #8a2c2c;
  height: 300px;
}

.foot h4 {
  text-align: center;
  margin-top: 100px;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

.f-titl {
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #ffffff;
  padding-left: 20px;
}

.f-titl-sub {
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: #ffffff;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
}

.f-titl-sub a {
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-weight: 300;
  text-decoration: none;
}

.f-titl-sub a:hover {
  font-family: "Roboto", sans-serif;
  color: dodgerblue;
  font-weight: 300;
  text-decoration: none;
}
.bottm p {
  color: #8a2c2c;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-align: center;
}

.v-card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.rout {
  text-decoration: none;
  color: #ffffff;
}
.rout:hover {
  color: dodgerblue;
}
</style>