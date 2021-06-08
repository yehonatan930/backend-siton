<template>
  <div>
    <h1 class="display-3 d-flex justify-center mr-15" id="title">
      לוח פעילויות
    </h1>
    <div class="d-flex justify-center">
      <v-card class="mt-5 rounded-xl inner-card" elevation="1" scrollable>
        <div class="scrollable">
          <div v-for="activity in this.activities" :key="activity.id">
            <Activity
              :activity_name="activity.activity_name"
              :activity_time="
                new Date(activity.activity_time).toLocaleDateString()
              "
              @click.native="enterActivity(activity)"
            >
            </Activity>
          </div>
        </div>
        <template>
          <div class="text-center">
            <v-btn
              x-large
              bottom
              absolute
              fab
              dark
              color="#3e4174"
              v-on:click="addNewActivity()"
            >
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </div>
        </template>
      </v-card>
      <div>
        <NewActivity :newActivity="this.newActivity" @newActivity="close">
        </NewActivity>
        <v-dialog
          v-model="this.dialog"
          max-width="800"
          height="800"
          persistent
          class="dialog"
        >
          <v-card>
            <div
              class="ma-5"
              dir="rtl"
              v-for="field in this.fields"
              :key="field.activity_name"
            >
              <v-card-title dir="rtl" class="headline">
                <h3 id="titleDialog" class="display-1 font-weight-bold">
                  {{ activityDialog.activity_name }}
                </h3></v-card-title
              >

              <v-card-text>
                <h2>
                  {{ field.activity_type }}:
                  {{ activityDialog.activity_type }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.activity_time }}:
                  {{ activityDialog.activity_time }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2 v-if="activityDialog.scheduledPower">
                  {{ field.scheduledPower }}:
                  {{ activityDialog.scheduledPower}}
                </h2>
                <h2 v-else>
                  {{ field.scheduledPower }}:
                  {{ activityDialog.scheduledPower }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.activity_goal }}:
                  {{ activityDialog.activity_goal }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.activity_approver }}:
                  {{ activityDialog.activity_approver }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.place }}: {{ activityDialog.lat }},
                  {{ activityDialog.lon }}
                </h2>
              </v-card-text>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                large
                left
                bottom
                fab
                dark
                color="#3e4174"
                @click="returnActivities()"
              >
                <v-icon dark>mdi-gavel</v-icon>
              </v-btn>

              <v-btn
                large
                bottom
                left
                fab
                dark
                color="#3e4174"
                @click="returnActivities()"
              >
                <v-icon dark>mdi-arrow-left</v-icon>
              </v-btn>
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
      activityDialog: {},
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
      activities: []
    };
  },
  components: {
    Activity,
    NewActivity
  },
  created: async function() {
    await this.getActivities();
  },
  methods: {
    async enterActivity(activity) {
      this.dialog = true;
      this.activityDialog = activity;
    },
    returnActivities() {
      this.dialog = false;
    },
    addNewActivity() {
      this.newActivity = true;
    },
    async getActivities() {
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
    async close(closeDialog) {
      this.newActivity = closeDialog;
      await this.getActivities();
    }
  }
};
</script>

<style>
#titleDialog {
  color: #3e4174;
}

.inner-card {
  width: 60vw;
  height: 65vh;
}

.scrollable {
  overflow-y: scroll;
  height: 55vh;
}
</style>
