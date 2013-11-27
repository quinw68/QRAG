if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to QRAG.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Package.describe({
    summary: "three.js packaged for use in Meteor."
});

Package.on_use(function (api) {
    api.add_files('public/Core/three_js/three.min.js', 'client');
});