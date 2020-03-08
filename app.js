import notification from "./components/notification.js";
import chat from "./components/chat.js";
import message from "./components/message.js";

let bus = new Vue();
Vue.prototype.$bus = bus;

const App = new Vue({
    el: '#app',
    data:{
        content:""
    },
    components: {
        notification,
        chat,
    },

})