<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon class="burger" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="logo">International Karen Horney Society</v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="sidenav">
      <v-list class="pa-1">
        <v-list-tile class="sm-title">
          <v-list-tile-content>
            <v-list-tile-title class="abbrev">IKHS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/" exact class="sec2">Home</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/About" class="sec2">About</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/KarenHorney" class="sec2">Karen Horney</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/AudioVideo" class="sec2">Audio/Video</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/Extensions" class="sec2">Extensions/Applications</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/Resources" class="sec2">Additional Resources</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/News" class="sec2">News</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/EssaysExcerpts" class="sec2">Essays/Excerpts</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/RelatedBooks" class="sec2">Related Books</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/BulletinBoard" class="sec2">Bulletin Board</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/AllanHobson" class="sec2">Allan Hobson</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/MembershipDirectory" class="sec2">Membership Directory</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile @click>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/Contact" class="sec2">Contact</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style scoped>
.v-toolbar {
  height: 70px;
  background: #ffffff;
}
.logo {
  font-size: 20px;
  font-family: "Playfair+Display", serif;
  font-weight: 500;
  color: #8a2c2c;
}

.burger {
  color: #8a2c2c;
}

.sidenav {
  background: #8a2c2c;
  opacity: 0.9;
}
.sm-title {
  height: 62px;
}

.abbrev {
  color: #ffffff;
  font-size: 20px;
  font-family: "Playfair+Display", serif;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  letter-spacing: 2px;
}

.sec2 {
  color: #ffffff;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  padding-left: 20px;
  text-decoration: none;
}
</style>
