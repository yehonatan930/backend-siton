<template>
  <div>
    <h1 class="display-4 d-flex justify-center mr-15" id="title">
      לוח פעילויות
    </h1>
    <div class="d-flex justify-center mr-15">
      <v-card width="700" height="300" class="mt-5 rounded-xl">
        <!-- <v-virtual-scroll
          :items="this.activities"
          :item-height="150"
          height="300"
        > -->
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
        <!-- </v-virtual-scroll> -->
      </v-card>
      <div>
        <NewActivity :newActivity="this.newActivity" @newActivity="close">
        </NewActivity>
        <v-dialog v-model="this.dialog" persistent max-width="500">
          <v-card>
            <div
              dir="rtl"
              v-for="field in this.fields"
              :key="field.activity_name"
            >
              <v-card-title dir="rtl" class="headline">
                <h3 id="titleDialog">
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
                <h2>
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
                <h2>{{ field.place }}: {{ activityDialog.place }}</h2>
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
</style>
