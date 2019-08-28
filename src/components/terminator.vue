
<template>
   <router-view v-if="!showContent"/>
   <div v-else>
      <h1 class="postTitle">
         {{title}}
      </h1>
      <div class="postBody">
         <div id="cnblogs_post_body" class="blogpost-body">
            <h2>目录</h2>
            <p
               v-for="(item, i ) in catalogue"
               :key="i">
               <span style="float:right">{{item.date}}</span>
               <router-link
               :to="{name: item.name}"

            >{{item.title}}</router-link>

            </p>
         </div>


      </div>

   </div>

</template>

<script>
   import {mapState} from 'vuex'

   export default {
      name: "terminator",
      data: function (){
         return{
         }
      },
      props:{
        catalogue:{
           type: Array,
           default: function () {
              return []
           }
        },
         title:{
           type: String,
            default: '目录'
         }
      },
      computed:{
         ...mapState(['showContent'])
      },
      created: function () {
      }
   }
</script>

<style scoped>

</style>