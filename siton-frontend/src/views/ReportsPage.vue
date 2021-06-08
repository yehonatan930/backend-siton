<template>
  <div>
    <h1 class="display-4 d-flex justify-center mr-15" id="title">דיווחים</h1>
    <div class="d-flex justify-center mr-15">
      <v-card width="700" height="300" class="mt-5 rounded-xl">
        <Report @click.native="enterReport()"> </Report>
      </v-card>
      <div>
        <v-dialog v-model="this.dialog" persistent max-width="500">
          <v-card>
            <v-card-title dir="rtl" class="headline">
              <h2 id="titleDialog">Label 1</h2></v-card-title
            >
            <div
              dir="rtl"
              v-for="(field, index) in this.fields"
              :key="field.type"
            >
              <v-card-text>
                <h2>{{ field.type }}: {{ details[index].type }}</h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.scheduledTime }}: {{ details[index].scheduledTime }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>
                  {{ field.scheduledPower }}:
                  {{ details[index].scheduledPower }}
                </h2>
              </v-card-text>
              <v-card-text>
                <h2>{{ field.purpose }}: {{ details[index].purpose }}</h2>
              </v-card-text>
              <v-card-text>
                <h2>{{ field.approval }}: {{ details[index].approval }}</h2>
              </v-card-text>
              <v-card-text>
                <h2>{{ field.place }}: {{ details[index].place }}</h2>
              </v-card-text>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-4"
                class="font-weight-bold"
                text
                @click="returnReports()"
                ><h2>חזור ללוח דיווחים</h2></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Report from "../components/Report";

export default {
  name: "Reports",

  data() {
    return {
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
      details: [
        {
          type: "דקירה",
          weapon: "סכין",
          casualties: "2 אזרחים",
          eventTime: "08/09/2021 14:30",
          reportTime: "08/09/2021 14:35",
          reporter: "נבו בונה"
        }
      ]
    };
  },
  components: {
    Report
  },
  methods: {
    enterReport() {
      this.dialog = true;
    },
    returnReports() {
      this.dialog = false;
    }
  }
};
</script>

<style>
#titleDialog {
  color: #3e4174;
}
</style>
