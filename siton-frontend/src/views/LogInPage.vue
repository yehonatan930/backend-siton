<template>
  <div>
    <v-card
      id="cardi"
      width="60vw"
      height="60vh"
      class="rounded-xl"
      elevation="24"
      dark
    >
      <v-container fluid class="all-container" fill-height>
        <v-row no-gutters fill-height>
          <v-col cols="6">
            <img class="cops-image" src="../assets/cops.jpg" />
          </v-col>
          <v-col cols="6">
            <div id="login-container" class="d-flex align-center flex-column">
              <h1 id="welcome">ברוכים הבאים!</h1>
              <v-form>
                <v-text-field
                  v-model="userName"
                  label="שם משתמש"
                  type="text"
                  required
                >
                </v-text-field>
                <v-text-field
                  v-model="password"
                  label="סיסמה"
                  type="password"
                  required
                ></v-text-field>
                <div class="d-flex align-center">
                  <v-btn
                    x-large
                    id="login-btn"
                    rounded
                    color="#292b64"
                    type="submit"
                    @click="sendLogIn()"
                  >
                    התחבר
                  </v-btn>
                </div>
              </v-form>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    async sendLogIn() {
      this.$emit("logIn");
      await axios
        .post(
          "http://siton-backend-securityapp3.apps.openforce.openforce.biz/users/login",
          {
            userName: this.userName,
            password: this.password
          }
        )
        .then(function(response) {
          console.log(response.data);
          console.log(response.status);
          if (response.status(200)) {
            this.$emit("logIn");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
#cardi {
  background-color: #000d49;
  margin-top: 17vh;
}

.all-container {
  overflow: hidden;
  padding: 0 !important;
}

.cops-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

#login-container {
  padding-top: 10%;
  line-height: 2.5 !important;
}

#welcome {
  font-weight: bold;
  font-size: 400%;
}

.v-form {
  width: 60%;
  padding-top: 5%;
}

#login-btn {
  margin-top: 5%;
  margin-right: 33%;
  padding-right: 10%;
  padding-left: 10%;
  font-size: 1.2em;
}
</style>
