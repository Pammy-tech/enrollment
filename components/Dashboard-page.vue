<template>
    <div>
        <nav id="sidebar" class="p-3" style="background-color: orange">
                <div class="sidebar-header">
                    <h3>Dashboard</h3>
                </div>
    
        <ul id="accordionSidebar" class="navbar-nav text-light">
        
        <NuxtLink to="/homepage">
            <li class="nav-item"><a class="nav-link active"><i class="fas fa-tachometer-alt"></i><span>Home</span></a></li>
        </NuxtLink> 
        <NuxtLink to="/dashboard">
            <li class="nav-item"><a class="nav-link"><i class="fas fa-user"></i><span>Dashboard</span></a></li>
        </NuxtLink>
    </ul>           
    </nav>
    <div class="container" style="padding: 4rem; margin-left:250px">
    <h3>Dashboard</h3>
        <br>
        <div class="form-inline" action="#">
        <input type="text" id="form-name" v-model="item.name" placeholder="Name" class="form-control">
        <input type="date" v-model="item.dob" class="form-control">
        <input type="text" v-model="item.course" placeholder="Course" class="form-control"></input>
        <input type="text" v-model="item.address" placeholder="Address" class="form-control" v-on:keyup.enter="addItem">
        <button @click="addItem" class="btn btn-dark"><i class="fas fa-plus">Add</i></button>
        </div>
        <br><br>
        <table class="table table-striped table-bordered table-sm">
          <thead>
            <th>Name</th>
            <th>DOB</th>
            <th>Course</th>
            <th>Address</th>
            <th class="col-2">Action</th>
          </thead>
          <tr v-for="item in items" :key="item.name">
            <td>
              <input v-if="item.edit" type="text" v-model="item.name"  v-on:keyup.enter="item.edit = !item.edit">
              <span v-else>{{item.name}} </span>
            </td>
            <td>
              <input v-if="item.edit" type="date" v-model="item.dob" v-on:keyup.enter="item.edit = !item.edit">
              <span v-else>{{item.dob}} </span>
            </td>
            <td>
              <input v-if="item.edit" type="text" v-model="item.course" v-on:keyup.enter="item.edit = !item.edit">
              <span v-else>{{item.course}} </span>
            </td>
            <td>
              <input v-if="item.edit" type="text" v-model="item.address" v-on:keyup.enter="item.edit = !item.edit">
              <span v-else>{{item.address}} </span>
            </td>
              <button @click="item.edit = !item.edit" class="btn btn-primary">Edit</button>
              <button @click="removeItem(index)" class="btn btn-danger">Delete</button>
          </tr>
        </table>
    </div>
    </div>
    </template>
    
    <script scope>
        export default {
          data() {
          return {
            item: {name: "", desc: "", edit: false},
            items: []
          }
        },
        methods:{
          addItem() {
            this.items.push({
              name:this.item.name, desc:this.item.desc, edit: false}
              );
            this.item = [];
          },
          removeItem(index){
            this.items.splice(index, 1)
          }
        }
        }
      </script>
      
      <style scoped>
      .form-inline input {
        margin-right:12px;
      }
      </style>
  
  