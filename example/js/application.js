(function ($window) {

    "use strict";

    $window.App = Ember.Application.create({

        Socket: EmberSockets.extend({
            host: 'localhost',
            port: 8888,
            controllers: ['index']
        })

    });

})(window);