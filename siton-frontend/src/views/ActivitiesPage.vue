<template>
  <div>
    <h1 class="display-4 d-flex justify-center" id="title">לוח פעילויות</h1>
    <div class="d-flex justify-center">
      <v-card width="700" height="300" class="mt-5 rounded-xl">
        <Activity @click.native="enterActivity()"> </Activity>
        <template>
          <v-btn
            bottom
            absolute
            left
            fab
            dark
            color="#3e4174"
            class="mb-10"
            v-on:click="addNewActivity()"
          >
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
      </v-card>
      <div>
        <NewActivity :newActivity="this.newActivity" @newActivity="close">
        </NewActivity>
        <v-dialog v-model="this.dialog" persistent max-width="500">
          <v-card>
            <v-card-title dir="rtl" class="headline">
              <h2 id="titleDialog">Label 1</h2></v-card-title
            >
            <div
              dir="rtl"
              v-for="(field, index) in this.fields"
              :key="field.activity_type"
            >
              <v-card-text>
                <h2>
                  {{ field.activity_type }}:
                  {{ activities[index].activity_type }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.activity_time }}:
                  {{ activities[index].activity_time }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.scheduledPower }}:
                  {{ activities[index].scheduledPower }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.activity_goal }}:
                  {{ activities[index].activity_goal }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.activity_approver }}:
                  {{ activities[index].activity_approver }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>{{ field.place }}: {{ activities[index].place }}</h2>
              </v-card-text>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-4"
                class="font-weight-bold"
                text
                @click="this.dialog = false"
                ><h2>הוצא פעולה לפועל</h2></v-btn
              >
              <v-btn
                color="blue darken-4"
                class="font-weight-bold"
                text
                @click="returnActivities()"
                ><h2>חזור ללוח פעילויות</h2></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Activity from "../components/Activity";
import NewActivity from "../components/NewActivity";
import axios from "axios";

export default {
  data() {
    return {
      newActivity: false,
      dialog: false,
      fields: [
        {
          activity_type: "סוג פעולה",
          activity_time: "זמן מתוכנן לפעילות",
          scheduledPower: "כוח מתוכנן",
          activity_goal: "מטרת הפעילות",
          activity_approver: "אישור הפעילות",
          place: "מיקום"
        }
      ],
      // details: [
      //   {
      //     activity_type: "מארב",
      //     activity_time: new Date().toLocaleString(),
      //     scheduledPower: "ג'ק פרלטה, איימי סנטיאגו וג'ינה לינטי",
      //     activity_goal: "מארב לתפיסת החשוד",
      //     activity_approver: "קפטן ריי הולט",
      //     place: "276909,655437"
      //   }
      // ],
      activities: []
    };
  },
  components: {
    Activity,
    NewActivity
  },
  created: async function() {
    this.activities = await axios
      .get(
        "http://siton-backend-securityapp3.apps.openforce.openforce.biz/activities"
      )
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    enterActivity() {
      this.dialog = true;
    },
    returnActivities() {
      this.dialog = false;
    },
    addNewActivity() {
      this.newActivity = true;
    },
    close(closeDialog) {
      this.newActivity = closeDialog;
    }
  }
};
</script>

<style>
#titleDialog {
  color: #3e4174;
}
</style>
