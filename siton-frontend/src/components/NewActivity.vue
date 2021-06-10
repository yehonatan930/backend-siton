<template>
  <div>
    <v-dialog persistent v-model="this.newActivity" width="36%">
      <v-card class="rounded-xl d-flex justify-center">
        <v-form ref="form" v-model="valid" lazy-validation class="ma-4">
          <v-text-field
            v-model="activity.activity_name"
            :rules="[v => !!v || 'צריך להזין שם פעולה!']"
            label="שם הפעולה"
            required
            clearable
          ></v-text-field>
          <v-select
            v-model="activity.activity_type"
            :items="this.eventsActivities"
            :rules="[v => !!v || 'צריך לבחור פעילות!']"
            label="סוג הפעולה"
            required
          ></v-select>

          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="activity.date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="activity.date"
                label="תאריך מתוכנן לפעילות"
                readonly
                v-bind="attrs"
                v-on="on"
                required
                clearable
              ></v-text-field>
            </template>
            <v-date-picker v-model="activity.date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">
                ביטול
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(activity.date)"
              >
                אישור
              </v-btn>
            </v-date-picker>
          </v-menu>
          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="activity.time"
            transition="scale-transition"
            offset-y
            max-width="300%"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="activity.time"
                label="זמן מתוכנן לפעילות"
                readonly
                v-bind="attrs"
                v-on="on"
                required
                clearable
              ></v-text-field>
            </template>
            <v-time-picker
              v-model="activity.time"
              full-width
              @click:minute="$refs.menu2.save(activity.time)"
              scrollable
            ></v-time-picker>
          </v-menu>

          <v-select
            v-model="activity.plannedForce"
            :items="this.users"
            :menu-props="{ maxHeight: '20%' }"
            :rules="[v => !!v || 'צריך להזין כוח מתוכנן!']"
            label="כוח מתוכנן"
            multiple
          ></v-select>

          <v-text-field
            v-model="activity.activity_goal"
            :rules="[v => !!v || 'צריך להזין מטרת פעילות!']"
            label="מטרת הפעילות"
            required
            clearable
          ></v-text-field>

          <v-select
            v-model="activity.activity_approver"
            :items="this.users"
            :rules="[v => !!v || 'צריך להזין מאשר פעילות!']"
            label="מאשר הפעילות"
            required
          ></v-select>

          <v-select
            v-model="activity.location"
            :items="this.places.map(place => place.placeName)"
            :rules="[v => !!v || 'צריך להזין מקום!']"
            label="מיקום"
            required
          ></v-select>

          <v-flex class="text-left">
            <v-btn
              @click="close()"
              color="#040848"
              class="ml-4 mr-4 mb-2 white--text"
            >
              סגור
            </v-btn>
            <v-btn
              class="mb-2 white--text"
              :disabled="!valid"
              color="#3e4174"
              @click="addActivity()"
            >
              הוסף פעילות
            </v-btn>

            <v-btn
              @click="clear()"
              color="#3e4174"
              class="ml-4 mr-4 mb-2 white--text"
            >
              נקה
            </v-btn>
          </v-flex>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    activity: {
      name: null,
      date: null,
      time: "",
      plannedForce: "",
      activity_goal: null,
      activity_approver: null,
      activity_type: null,
      location: null
    },

    menu: false,
    menu2: false,

    valid: false,

    eventsActivities: [],
    places: [
      { placeName: "ברונקס", location: "40,-70" },
      { placeName: "מנהטן", location: "40,-71" },
      { placeName: "ברוקלין", location: "39,-70" },
      { placeName: "קווינס", location: "40,-72" },
      { placeName: "סטייטן איילנד", location: "41,-71" }
    ],
    locationSelect: {},

    users: []
  }),
  mounted: async function() {
    await this.getUsers();
    await this.getEvents();
  },
  computed: {},
  methods: {
    close() {
      this.newActivity = false;
      this.$emit("newActivity", this.newActivity);
    },
    async addActivity() {
      this.close();
      this.locationSelect = this.places.find(
        place => place.placeName === this.activity.location
      ).location;
      const data = await axios
        .post(
          "http://siton-backend-securityapp3.apps.openforce.openforce.biz/activities",
          {
            activity: {
              activity_name: this.activity.activity_name,
              activity_type:
                this.eventsActivities.indexOf(this.activity.activity_type) + 1,
              activity_time: new Date(this.activity.date),
              scheduledPower: this.activity.plannedForce,
              activity_goal: this.activity.activity_goal,
              activity_approver: this.activity.activity_approver,
              status: 1,
              lat: this.locationSelect.split(",")[0],
              lon: this.locationSelect.split(",")[1]
            }
          }
        )
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });

      this.sentActivity(data);
    },
    clear() {
      this.activity = {
        name: null,
        date: null,
        time: null,
        plannedForce: "",
        activity_goal: null,
        activity_approver: null,
        activity_type: null,
        location: null
      };
    },
    sentActivity(data) {
      this.$emit("activityToAdd", data);
    },
    async getUsers() {
      this.users = await axios
        .get(
          "http://siton-backend-securityapp3.apps.openforce.openforce.biz/users"
        )
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });

      this.users = this.users.map(user => user.user_name);
    },
    async getEvents() {
      this.eventsActivities = await axios
        .get(
          "http://siton-backend-securityapp3.apps.openforce.openforce.biz/activities/types"
        )
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });

      this.eventsActivities = this.eventsActivities.map(event => event.activity_name);
    }
  },
  props: ["newActivity"]
};
</script>

<style scoped>
.v-form {
  width: 90%;
  padding-top: 5%;
}
</style>
