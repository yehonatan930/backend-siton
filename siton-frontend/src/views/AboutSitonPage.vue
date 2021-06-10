<template>
  <div class="text-center">
    <h1 class="head-credits">
      שלום, אנחנו מדור סיטון <v-icon x-large>mdi-emoticon-cool-outline</v-icon>
    </h1>

    <p class="sub-head-credits">
      בראשות גיא, סמיח, ואוראל <v-icon>mdi-heart</v-icon>
    </p>

    <hr />
    <br />
    <p>חברי המדור היפים, המדהימים, המוכשרים, הגאונים:</p>
    <p class="main-credits">
      ג'וני, שי"ש, גלי פ***** גרשטיין, ענבי, וובון, ועודד
    </p>
    <span class="main-credits text-decoration-line-through">ז"ל</span>
    <p>בתפקיד אורח: מיכאל</p>
    <img src="../assets/us.jpg" class="us-jpg" />
  </div>
</template>

<script>
export default {
  name: "AboutSiton"
};
</script>

<style>
.head-credits {
  font-size: 5em;
}

.main-credits {
  font-size: 2em;
  display: inline;
}

.small-credits {
  font-size: 1em;
}

.sub-head-credits {
  font-size: 1.5em;
}

.us-jpg {
  height: 50%;
  width: 20%;
}
</style>
