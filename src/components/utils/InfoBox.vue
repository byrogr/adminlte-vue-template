<template>
  <div class="info-box">
    <!-- Apply any bg-* class to to the icon to color it -->
    <span class="info-box-icon" :class="'bg-' + color">
      <i class="fa" :class="icon"></i>
    </span>
    <div class="info-box-content">
      <span class="info-box-text">{{ text }}</span>
      <span class="info-box-number">{{ number }}</span>
    </div>
    <!-- /.info-box-content -->
  </div>
  <!-- /.info-box -->
</template>

<script>
  export default {
    name: 'infobox',
    props: {
      text: { type: String, required: true },
      number: { type: Number },
      icon: { type: String },
      color: { type: String }
    }
  }
</script>

<style scoped>

</style>
