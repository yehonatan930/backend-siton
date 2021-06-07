<template>
  <div>
    <div class="d-flex justify-center">
      <v-card width="700" height="300" class="mt-5 rounded-xl">
        <Activity @click.native="enterActivity()"> </Activity>

        <v-card-actions>
          <v-btn fab dark color="#3e4174">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-card-actions>
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

export default {
  data() {
    return {
      dialog: false,
      fields: [
        {
          type: "סוג פעולה",
          scheduledTime: "זמן מתוכנן לפעילות",
          scheduledPower: "כוח מתוכנן",
          purpose: "מטרת הפעילות",
          approval: "אישור הפעילות",
          place: "מיקום"
        }
      ],
      details: [
        {
          type: "מארב",
          scheduledTime: new Date().toLocaleString(),
          scheduledPower: "ג'ק פרלטה, איימי סנטיאגו וג'ינה לינטי",
          purpose: "מארב לתפיסת החשוד",
          approval: "קפטן ריי הולט",
          place: "276909,655437"
        }
      ]
    };
  },
  components: {
    Activity
  },
  methods: {
    enterActivity() {
      this.dialog = true;
    },
    returnActivities() {
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
