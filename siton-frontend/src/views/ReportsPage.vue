<template>
  <div>
    <h1 class="display-3 d-flex justify-center" id="title">
      לוח דיווחים
    </h1>
    <div class="d-flex justify-center">
      <v-card id="reports-card" class="mt-5 rounded-xl" elevation="1">
        <div class="scrollable">
          <div v-for="report in this.reports" :key="report.id">
            <Report
              :event_name="report.event_name"
              :event_time_date="
                new Date(report.event_time).toLocaleDateString()
              "
              :event_time="new Date(report.event_time).toLocaleTimeString()"
              @click.native="enterReport(report)"
            >
            </Report>
          </div>
        </div>
      </v-card>
      <div>
        <v-dialog v-model="this.dialog" persistent max-width="40%">
          <v-card>
            <div
              class="ma-5"
              v-for="field in this.fields"
              :key="field.activity_name"
            >
              <v-card-title class="headline">
                <h3 id="titleDialog" class="display-1 font-weight-bold">
                  {{ reportDialog.event_name }}
                </h3>
              </v-card-title>

              <v-card-text>
                <h2>
                  {{ field.type }}:
                  {{ reportDialog.event_type }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.eventTime }}:
                  {{ reportDialog.event_time }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.reportTime }}:
                  {{ reportDialog.report_time }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.casualties }}:
                  {{ reportDialog.casualties }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.weapon }}:
                  {{ reportDialog.weapon_type }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>{{ field.reporter }}: {{ reportDialog.user_name }}</h2>
              </v-card-text>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                large
                bottom
                left
                rounded
                dark
                color="#3e4174"
                @click="returnReports()"
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
import Report from "../components/Report";
import axios from "axios";

export default {
  name: "Reports",

  data() {
    return {
      reportDialog: {},
      dialog: false,
      fields: [
        {
          type: "סוג אירוע",
          weapon: "סוג נשק",
          casualties: "נפגעים",
          eventTime: "זמן האירוע",
          reportTime: "זמן הדיווח",
          reporter: "המדווח"
        }
      ],
      reports: []
    };
  },
  created: async function() {
    await this.getReports();
  },
  components: {
    Report
  },

  methods: {
    enterReport(report) {
      this.dialog = true;
      this.reportDialog = report;
    },
    returnReports() {
      this.dialog = false;
    },
    async getReports() {
      this.reports = await axios
        .get(
          "http://siton-backend-securityapp3.apps.openforce.openforce.biz/reports"
        )
        .then(function(response) {
          return response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
#titleDialog {
  color: #3e4174;
}

#reports-card {
  width: 85% !important;
  height: 64.5vh !important;
}

.scrollable {
  overflow-y: scroll;
  height: inherit;
}
</style>
