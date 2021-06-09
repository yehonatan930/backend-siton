<template>
  <div>
    <h1 class="display-3 d-flex justify-center" id="title">
      לוח פעילויות
    </h1>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="2" offset="1" class="pb-0">
          <v-select
            v-model="sortSelected"
            :items="sortSelectItems"
            item-text="hebrewLabel"
            item-value="fieldName"
            label="מיון לפי:"
            outlined
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

    <div class="d-flex justify-center">
      <v-card id="activities-card" class="rounded-xl" elevation="1">
        <div class="scrollable">
          <div v-for="activity in sortedActivities" :key="activity.id">
            <Activity
              :activity_name="activity.activity_name"
              :activity_time="
                new Date(activity.activity_time).toLocaleDateString('de-DE')
              "
              :activity_status="activity.status_name"
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
        <NewActivity
          :newActivity="this.newActivity"
          @newActivity="close()"
          @activityToAdd="addToList"
        >
        </NewActivity>
        <v-dialog v-model="this.dialog" max-width="40%" persistent>
          <v-card>
            <div class="ma-5">
              <v-card-title dir="rtl" class="headline">
                <h3 id="titleDialog" class="display-1 font-weight-bold">
                  {{ activityDialog.activity_name }}
                </h3>
              </v-card-title>

              <v-card-text v-for="(hebrew, english) in fields" :key="english">
                <h2>
                  {{ hebrew }}:
                  {{ activityDialog[english] }}
                </h2>
              </v-card-text>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                large
                left
                bottom
                rounded
                dark
                color="#3e4174"
                @click="executeActivities()"
              >
                <v-icon dark>mdi-gavel</v-icon>
                הוצאה לפועל
              </v-btn>

              <v-btn
                large
                bottom
                left
                rounded
                dark
                color="#3e4174"
                @click="returnActivities()"
              >
                <v-icon dark>mdi-arrow-left</v-icon>
                חזור
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
      fields: {
        status_name: "מצב הפעולה",
        activity_type: "סוג פעולה",
        activity_time: "זמן מתוכנן לפעילות",
        scheduledPower: "כוח מתוכנן",
        activity_goal: "מטרת הפעילות",
        activity_approver: "אישור הפעילות",
        place: "מיקום"
      },
      activities: [],
      sortSelectItems: [
        { hebrewLabel: "תאריך", fieldName: "activity_time" },
        { hebrewLabel: "סטטוס", fieldName: "status_name" }
      ],
      sortSelected: ""
    };
  },
  components: {
    Activity,
    NewActivity
  },
  mounted: async function() {
    await this.getActivities();
  },

  computed: {
    sortedActivities: function() {
      if (this.sortSelected) {
        const toBeSortActivities = this.activities;

        return toBeSortActivities.sort((current, next) => {
          const currentField = current[this.sortSelected];
          const nextField = next[this.sortSelected];

          if (currentField < nextField) {
            return 1;
          }
          if (currentField > nextField) {
            return -1;
          }
          return 0;
        });
      } else {
        return this.activities;
      }
    }
  },

  methods: {
    async enterActivity(activity) {
      this.dialog = true;
      this.activityDialog = activity;
      this.activityDialog.place = `${this.activityDialog.lat}, ${this.activityDialog.lon}`;
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
    async close() {
      this.newActivity = false;
      await this.getActivities();
    },
    addToList(activity) {
      this.activities.push(activity);
    },
    async executeActivities() {
      const changedActivity = await axios
        .patch(
          `http://siton-backend-securityapp3.apps.openforce.openforce.biz/activities/start/${this.activityDialog.id}`
        )
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });

      this.getActivities();
      this.returnActivities();
    }
  }
};
</script>

<style>
#titleDialog {
  color: #3e4174;
}

#activities-card {
  width: 85% !important;
  height: 56vh !important;
}

.scrollable {
  overflow-y: scroll;
  height: inherit;
}
</style>
