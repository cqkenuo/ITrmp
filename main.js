// var data="233"
// var wsdata="ws://127.0.0.1:80/echo"
// var callback = function(e){console.log(e,e.data)}
// websocket(wsdata, data, callback)

var vm = new Vue({
    el: '#add',
    data: {
        server_show: false,
        project_show: false
    },
    methods: {
        server_display: function() {
            this.server_show = true
            this.project_show = false
        },
        project_display: function() {
            this.server_show = false
            this.project_show = true
        }
    }

});
