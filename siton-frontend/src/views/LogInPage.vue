<template>
  <div>
    <v-card
      id="cardi"
      width="60vw"
      height="80%"
      class="rounded-xl"
      elevation="24"
      dark
    >
      <v-container class="all-container" fill-height>
        <v-row no-gutters fill-height>
          <v-col cols="6" xs="0" class="image-col">
            <img class="cops-image" src="../assets/cops.jpg" />
          </v-col>
          <v-col cols="6" xs="12">
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
// import Swal from "sweetalert2";

export default {
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    async sendLogIn() {
      const response = await axios
        .post(
          "http://siton-backend-securityapp3.apps.openforce.openforce.biz/users/login/policeStation",
          {
            userName: this.userName,
            password: this.password
          }
        )
        .then(function(response) {
          return response;
        })
        .catch(function(error) {
          // Swal.fire({
          //   title: "Wrong user!",
          //   icon: "error",
          //   confirmButtonText: "סגור"
          // });
          console.log(error);
        });

      if (response.status === 200) {
        this.$emit("logIn", response.data);
      }
    }
  }
};
</script>

<style>
#cardi {
  background-color: #000d49;
  margin-top: 15%;
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
