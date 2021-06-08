<template>
  <div>
    <h1 class="display-3 d-flex justify-center" id="title">מפה</h1>
    <div class="wrapper">
      <Iframe
        frameBorder="0"
        class="frame mt-5"
        src="http://map3-service-tmzmap3.apps.openforce.openforce.biz/#/IControlWeb"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  width: 60vw;
  height: 69vh;
  margin-right: 5vw;
}
.wrapper iframe {
  height: 100%;
  width: 100%;
}
</style>
