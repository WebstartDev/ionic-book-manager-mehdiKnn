import users from "./users.js";
import message from "./message.js";

let chat = {
    props: ["content"],
    template: `
        <div class="d-flex w-100 justify-content-between h-100">
            <users class="w-25"></users>
            <message class="w-50 align-self-end"></message>
        </div>
`,
    components: {
        users,
        message,
    }
};

export default chat;