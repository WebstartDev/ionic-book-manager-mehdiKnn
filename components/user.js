let user = {
    props: [
        "firstname",
        "lastname"
    ],

    template: `
            <li class="list-group-item">
            <span>{{firstname}}</span>
            <span>{{lastname}}</span>
            </li>
       
    `,

}
export default user;