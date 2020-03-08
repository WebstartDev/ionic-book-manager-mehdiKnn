import user from "./user.js";
let users = {
    data(){
        return{
            userTable:[]
        }
    },
    props:["content"],
    template: `
        <ul class="list-group list-group-flush rounded border bg-light">
        <user v-for="(user , index) in userTable" :key="index" :lastname="user.lastname" :firstname="user.firstname"></user>
        </ul>`,
    mounted() {
        setInterval(() => {
            if (this.userTable.length < 10){
                let user = {firstname : faker.name.firstName(), lastname : faker.name.lastName()}
                this.userTable.push(user)
                this.$bus.$emit("notif", user)
            }
        }, 3000)
    },
    components:{
        user
    }
};

export default users;