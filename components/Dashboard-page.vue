<template>
  <div>
    <nav id="sidebar" class="p-3" style="background-color: orange">
      <div class="sidebar-header">
        <h3>Dashboard</h3>
      </div>

        <ul id="accordionSidebar" class="navbar-nav text-light">

        <NuxtLink to="/homepage">
            <li class="nav-item"><a class="nav-link active"><span>Home</span></a></li>
        </NuxtLink>
        <NuxtLink to="/dashboard">
            <li class="nav-item"><a class="nav-link"><span>Dashboard</span></a></li>
        </NuxtLink>
    </ul>
    </nav>
    <div class="container" style="padding: 4rem; margin-left:250px">
      <div>
      <h3>Dashboard</h3>
      <hr>
      <h4>Add Students</h4>
      </div>
      <br>
      <div class="form-inline" action="#">
      <input id="form-name" v-model="item.name"  type="text"  placeholder="First Name" class="form-control">
      <input v-model="item.lastname" type="text" placeholder="Last Name" class="form-control">
      <button class="btn btn-dark" @click="addItem"><i class="fas fa-plus">Add</i></button>
        </div>
      <br><br>
      <table class="table table-striped table-bordered table-sm">
        <thead class="thead-light">
          <th>First Name</th>
          <th>Last Name</th>
          <th class="col-2">Edit/Delete</th>
        </thead>
        <tr v-for="i in items" :key="i.name">
          <td>
            <input v-if="i.edit" v-model="i.name" type="text">
            <span v-else>{{i.name}} </span>
          </td>
          <td>
            <input v-if="i.edit" v-model="i.lastname" type="text">
            <span v-else>{{i.lastname}} </span>
          </td>
          <td><button class="btn btn-info" @click="ItemEdit(i)"><i class="far fa-edit">edit</i></button>
            <button class="btn btn-danger" @click="removeItem(i)"><i class="far fa-trash-alt">delete</i></button></td>
        </tr>
      </table>
  </div>
  </div>

  </template>

  <script scope>
  const url = "http://localhost:3002/user";
    export default {
      data() {
      return {
        item: {id: 0, name: "", lastname: "", edit: false},
        items: [],
        tempData: []
      }
    },
    methods:{
      async addItem() {
        await this.$axios.$post(url + '/insert', this.item)
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      async removeItem(item){
        await this.$axios.$post(url + '/delete', { id: item.id })
        .then((res) => {
          console.log(res);
          this.GetAllData();
        })
        .catch((err) => console.log(err));
      },
      GetCurrentID(){
      this.item.id = Math.max.apply(Math, this.items.map(function(o) { return o.id; })) + 1;
      console.log(this.item);
      },
      async GetAllData(){
        await this.$axios.$get(url)
      .then((res) => {
        console.log(res);
        this.items = res;
      })
      .catch((err) => console.log(err));
      this.GetCurrentID();
      }
    },
    async mounted(){
      await this.GetAllData();
    }
    }
  </script>

<style scoped>
.form-inline input {
  margin-right:8px;
}


</style>
