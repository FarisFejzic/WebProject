$(document).ready(function() {

  $("main#spapp > section").height($(document).height() - 60);

    var app = $.spapp({
    defaultView  : "#start",
    templateDir  : "./tpl/",
    pageNotFound : "#pg404"
  });  // initialize

  // define routes

  app.route({
    view : "pg404",
    load : "pg404.html",
    onReady: function() {
      $("section").hide();
      $("#pg404").show();
      window.scrollTo(0,0);
      }
  });


  app.route({
    view : "pricing",
    load : "pricing.html",
    onReady: function() {
      $("section").hide();
      $("#pricing").show();
      window.scrollTo(0,0);
      }
  });

  app.route({
    view : "services",
    load : "services.html",
    onReady: function() {
      $("section").hide();
      $("#services").show();
      window.scrollTo(0,0);
      }
  });
  
  app.route({
    view : "start",
    load : "start.html",
    onReady: function() {
      $("section").hide();
      $("#start").show();
      window.scrollTo(0,0);
      }
  });

  app.route({
    view : "admin",
    load : "admin.html",
    onReady: function() {
      $("section").hide();
      $("#admin").show();
      window.scrollTo(0,0);
      }
  });

  // run app
  app.run();

});