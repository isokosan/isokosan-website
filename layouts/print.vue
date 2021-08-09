<template>
  <v-app id="print" dark>
    <nuxt class="page" />
  </v-app>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@page {
  size: auto;   /* auto is the current printer page size */
  width: 24cm;
  height: 35cm;
  margin: 10mm;  /* this affects the margin in the printer settings */
}
body {
  background-color:#FFFFFF;
  border: solid 1px black ;
  border: none;
  margin: 0;
  padding: 0;
}
#print.v-application {
  margin: 0px;
  padding: 0.5cm 1.7cm;
  width: 24cm;
  display: block;
  border: 0px;
  .page {
    width: 100%;
    position: relative;
  }
}
</style>
