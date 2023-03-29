

//product review 
Vue.component("task-form", {
  template: `
      
      <div class="container">

        <div id="newtask">
          <input type="text" placeholder="Add Tasks"  v-model="task">
          <button id="push" @click="addTask">Add</button>
        </div>
        <task-list :list="list"></task-list>
      </div>
    `,
  data() {
    return {
      task: "",
      list: []
    };
  },
  methods: {
    addTask() {
      if (this.task)
        this.list.push(this.task)
      console.log(this.list);
    },
  },
});

Vue.component("task-list", {
  template: `
    <div>
    <div class="task" v-for="(item,index) in list" :key="index">
  <span id="taskname">
      {{ item }}
  </span>
  <button class="delete">
      <i class="far fa-trash-alt"></i>
  </button>
</div>
</div>
    `,
  props: {
    list: {
      type: Array,
      required: true
    }
  },

});


let vm = new Vue({

  el: "#root",
  props: {

  },
  methods: {

  }

})


