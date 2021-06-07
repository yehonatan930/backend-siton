<template>
  <div>
    <h1 class="display-4 d-flex justify-center" id="title">מפה</h1>
    <div class="wrapper">
      <Iframe
        class="frame"
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
  display: block;
  position: relative;
  top: 0;
  right: 2000;
  width: 100%;
  height: 400px;
}
.wrapper iframe {
  height: 100%;
  width: 100%;
}
</style>
