// var data="233"
// var wsdata="ws://127.0.0.1:80/echo"
// var callback = function(e){console.log(e,e.data)}
// websocket(wsdata, data, callback)

var vm = new Vue({
    el: '#add',
    data: {
        pc_show:                        false,
        project_show:                   false,
        server_show:                    false,
        hardware_show:                  false,
        depend_hzmongo_cluster_show:    false,
        depend_hzmongo_node_show:       false,
        depend_hzes_cluster_show:       false,
        depend_hzes_node_show:          false,
        depend_hzkafka_show:            false,
        features_listenport_show:       false,
    },
    methods: {
        pc_display: function() {
            this.pc_show                        = true
            this.project_show                   = false
            this.server_show                    = false
            this.hardware_show                  = false
        },
        project_display: function() {
            this.pc_show                        = false
            this.project_show                   = true
            this.server_show                    = false
            this.hardware_show                  = false
        },
        server_display: function() {
            this.pc_show                        = false
            this.project_show                   = false
            this.server_show                    = true
            this.hardware_show                  = false
        },
        hardware_display: function() {
            this.pc_show                        = false
            this.project_show                   = false
            this.server_show                    = false
            this.hardware_show                  = true
        },

        depend_hzmongo_cluster_display: function() {
            this.depend_hzmongo_cluster_show    = !this.depend_hzmongo_cluster_show
        },
        depend_hzmongo_node_display:    function() {
            this.depend_hzmongo_node_show       = !this.depend_hzmongo_node_show
        },
        depend_hzes_cluster_display:    function() {
            this.depend_hzes_cluster_show       = !this.depend_hzes_cluster_show
        },
        depend_hzes_node_display:       function() {
            this.depend_hzes_node_show          = !this.depend_hzes_node_show
        },
        depend_hzkafka_display:         function() {
            this.depend_hzkafka_show            = !this.depend_hzkafka_show
        },
        features_listenport_display:       function() {
            this.features_listenport_show            = !this.features_listenport_show
        }
    }

});
