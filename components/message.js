let message = {
    data() {
        return {
            messagesTable: [],

            message: {
                content: null
            }
        }
    },
    template: `
        <div class="">
            <div>
            <ul class="list-group">
                          <div  class="bg-light border card-body mb-1 p-2" v-for="(text , index) in messagesTable" :key="index">
                          <p class="mb-1">Mehdi</p>
                          <p class="mb-1" style="font-size: 12px">{{text}}</p>
                          
                          </div>
</ul>
  
                </div>
              <div class="input-group">
               <input type="text" class="form-control" v-model="message.content" aria-label="Recipient's username" aria-describedby="button-addon2">
            <div class="input-group-append">
             <button class="btn btn-outline-secondary form-control" type="button" id="button-addon2" @click="sendMsg">Button</button>
              </div>
            </div>
        </div>
    
    `,
    methods: {
        sendMsg() {
            let test = this.message.content
            this.messagesTable.push(test)
        }
    },

};

export default message;