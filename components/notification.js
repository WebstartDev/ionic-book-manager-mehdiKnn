let notification = {
    props: ["content"],
    data() {
        return {
            user:{
                lastname :null,
                firstname: null
            }
        }
    },
    template: `
        <div v-if="user.lastname" class="alert alert-success" role="alert">
 {{user.firstname}} {{user.lastname}} a rejoint
</div>
`,
    mounted() {
        this.$bus.$on("notif", user => {
            console.log(user)
            this.user.lastname = user.lastname
            this.user.firstname = user.firstname
        });
    }
};

export default notification;