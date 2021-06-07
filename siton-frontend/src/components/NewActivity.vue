<template>
  <div>
    <v-dialog persistent v-model="this.newActivity" width="700">
      <v-card width="700" class="mt-5 rounded-xl">
        <v-form ref="form" v-model="valid" lazy-validation class="ma-4">
          <v-select
            v-model="activity.activity_type"
            :items="activityKinds"
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
            max-width="290px"
            min-width="290px"
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

          <v-text-field
            v-model="activity.plannedForce"
            :rules="[v => !!v || 'צריך להזין כוח מתוכנן!']"
            label="כוח מתוכנן"
            required
            clearable
          ></v-text-field>

          <v-text-field
            v-model="activity.activity_goal"
            :rules="[v => !!v || 'צריך להזין מטרת פעילות!']"
            label="מטרת הפעילות"
            required
            clearable
          ></v-text-field>

          <v-text-field
            v-model="activity.activity_approver"
            :rules="[v => !!v || 'צריך להזין מאשר פעילות!']"
            label="מאשר הפעילות"
            required
            clearable
          ></v-text-field>

          <v-text-field
            v-model="activity.loaction"
            :rules="[
              v => !!v || 'צריך להזין מיקום!',
              v => /\d+,\d+/.test(v) || 'צריך להזין מיקום תקני!'
            ]"
            label="מיקום"
            required
            clearable
          ></v-text-field>
          <v-flex class="text-left">
            <v-btn
              @click="close"
              color="#040848"
              class="ml-4 mr-4 mb-2 white--text"
            >
              סגור
            </v-btn>
            <v-btn
              class="mb-2 white--text"
              type="submit"
              :disabled="!valid"
              color="#3e4174"
            >
              הוסף פעילות
            </v-btn>

            <v-btn
              @click="clear"
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
export default {
  data: () => ({
    activity: {
      date: null,
      time: null,
      plannedForce: "",
      activity_goal: null,
      activity_approver: null,
      activity_type: null,
      location: null
    },

    menu: false,
    menu2: false,

    valid: false,

    activityKinds: ["פטרול", "מארב", "מחסן רכבים"]
  }),
  computed: {
    
  },
  methods: {
    submit() {},
    clear() {
      this.activity = {
        date: null,
        time: null,
        plannedForce: "",
        activity_goal: null,
        activity_approver: null,
        activity_type: null,
        location: null
      };
    },
    close() {
      this.newActivity = false;
      this.$emit("newActivity", this.newActivity);
    }, 
  },
  props: ["newActivity"]
};
</script>

<style scoped></style>
