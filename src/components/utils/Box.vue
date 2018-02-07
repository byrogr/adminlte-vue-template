<template>
  <div class="box" :class="'box-' + theme">
    <div class="box-header with-border">
      <h3 class="box-title">{{ title }}</h3>
      <div class="box-tools pull-right">
        <!-- Buttons, labels, and many other things can be placed here! -->
        <slot name="tools" />
      </div>
      <!-- /.box-tools -->
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <slot name="body" />
    </div>
    <!-- /.box-body -->
    <slot name="footer" />
    <!-- box-footer -->
  </div>
  <!-- /.box -->
</template>

<script>
    export default {
      name: 'box',
      props: {
        title: {type: String, required: true},
        theme: {type: String, default: 'default'}
      }
    }
</script>

<style scoped>

</style>
