var myapp = new Vue({
    el: "#my-app",
    data:{
        name: "online web tutor",
        playlist: "VUEJS"
    },
    methods:{
        run : function(message,name){
            return "I'm running!"+ message +"name"+ name ;
        },
        welcome: function(dayTime){
            return "Good " + dayTime;
        },
        valueAccess: function(){
            return this.name + "" + this.playlist;
        }
    }
});