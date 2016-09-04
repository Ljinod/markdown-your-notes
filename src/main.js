import Vue from 'vue'

new Vue({

    el: 'body',

    data: {
        message: "Hello world!"
    },

    created: function() {
        console.log(this.message);
    }

})

