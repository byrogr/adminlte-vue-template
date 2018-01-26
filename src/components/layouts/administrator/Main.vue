<script>
  import Cabecera from './Header.vue'
  import Sidebar from './Sidebar.vue'

  export default {
    components: {Cabecera, Sidebar}
  }
</script>

<template>
  <div class="wrapper">
    <cabecera/>
    <sidebar/>
    <div class="content-wrapper">
      <section class="content-header">
        <h1>
          Blank page
        </h1>
        <!-- Migas de pan component <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
          <li><a href="#">Examples</a></li>
          <li class="active">Blank page</li>
        </ol>-->
      </section><!-- end of .content-header -->
      <!-- Main content -->
      <section class="content">
        <slot/>
      </section>
      <!-- /.content -->
    </div><!-- end of .content-wrapper -->
    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <b>Version</b> 2.4.0
      </div>
      <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">RM Software</a>.</strong> All rights reserved.
    </footer>
  </div><!-- end of .wrapper -->
</template>