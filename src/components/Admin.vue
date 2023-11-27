<!-- bismillah -->
<template>
  <div id="app" v-cloak>
    <NavBar
      @addHandler="addHandlerHere"
      :name="userData.name"
      :job="userData.job"
      :email="userData.email"
      :avatar="userData.avatar"
      :profileNavBar="true"
      theTab="admin"
    ></NavBar>
    
    <main>
      <div>
        <div :style="{marginTop: '130px'}">
          <h2 v-if="updateMode" style="color: #7eff83;">Включен режим редактирования</h2>
          <form :action="`http://localhost:3000/${requestType}`" method="POST" enctype="multipart/form-data">
            <div 
              :style="{display: 'flex', flexDirection: 'column'}"
              v-if="addMode">
              <input type="hidden" name="userToken" v-bind:value="userToken">
              <input type="hidden" name="author" v-bind:value="userData.name">
              <input type="hidden" name="authorAvatar" v-bind:value="userData.avatar">
              <input type="file" name="articleImage" :style="{background: 'white', fontWeight: 'bold'}">
              <input 
                type="text" 
                v-model="articleName"
                v-bind:placeholder="requiredString"
                v-bind:style="{fontSize: stylesheet.mySize + 'px'}"
                v-on:keypress.enter="showErrors"
                name="articleName" 
              />
              <textarea type="text"
                :style="{fontSize: '20px'}"
                v-model="articleText"
                placeholder="Текст"
                v-on:keypress.enter="showErrors"
                name="articleText" 
              ></textarea>
                <br>
              <h3 :style="{
                color: 'red',
              }">{{ errors }}</h3>
            </div>
            <div class="button" v-if="addMode">
              <!-- <button 
                v-on:click="showErrors"
                v-bind:class="[updateMode ? 'success' : 'primary']"
              >
                {{ refreshTextButton }}
              </button> -->
              <input  
                type="submit"
                v-bind:class="[updateMode ? 'success' : 'primary']"
                v-bind:value="refreshTextButton"
              />
                
              
            </div>
          </form>
        </div>
        <h3 v-if="posts.length > 0" :style="{marginTop: '130px'}">Общее количество публикаций: {{ posts.length }}</h3>
              <!-- <button class="bg-blue-500 font-black text-white hover:bg-blue-700 py-2 px-4 rounded">Button</button>
 -->
        
        <div 
          v-if="posts.length !== 0"
          v-for="(post, indexOfArticle) in posts" 
          :key="post.id" 
          class="card">
            <img v-if="post.image !== 'undefined'" v-bind:src="require(`../assets/uploads/${post.image}`)" class="articleImage" height="200">
            <div class="articleInfo">
              <h3 v-bind:style="{color: '#2c3e50'}">{{ post.title }}</h3>
              <p v-html="post.text"></p>
              <div :style="{display: 'flex', justifyContent: 'space-between'}">
                <h3 
                  :style="{color: '#008010de', fontSize: '14px', fontWeight: '100'}"
                  >{{ post.date }}</h3>
                <div class="myFlex" v-if="post.id !== 7777777">
                  <button class="options" @click="deleteArticle(indexOfArticle, post.id)"><img src="../assets/trash.svg" width="34" alt=""></button>
                  <button class="options"><img @click="updateArticle(indexOfArticle,post.id)" src="../assets/pen-add.svg" width="34" alt=""></button>
                </div>
              </div>
            </div>
        </div>


        <div
          >
          <div v-if="!postsLoaded" :style="{display: 'flex', justifyContent: 'center',flexDirection: 'column'}">
              <div id="loader"></div>
              <h2 :style="{color: '#fff'}">Загрузка...</h2>
          </div>
          <h3 v-if="posts.length == 0 && postsLoaded">Пока нет публикаций. Попробуйте добавить</h3>
        </div>

      </div>
    </main>

  </div>
</template>

<script>
import Router from 'vue-router'
import NavBar from '../components/NavBar.vue'

const mYheaders = {}
          mYheaders['Access-Control-Allow-Origin'] = '*'
          mYheaders['Access-Control-Allow-Credentials'] = 'true'
          mYheaders['Content-Type'] = 'application/json;charset=utf-8'

async function myaxios(url, method) {
        try {
          
          const headers = {}
          headers['Access-Control-Allow-Origin'] = '*'
          headers['Access-Control-Allow-Credentials'] = 'true'
          headers['Content-Type'] = 'application/json'
          const response = await fetch(url, {
            method,
            headers
          })
          let v = await response.json();
          return v;
        }
        catch (e) {
          console.warn(e.message);
        }
}


export default {
  props: ['title', 'text','index'],
  components: {
    NavBar,
  },
  data() {
    return {

        stylesheet: {
          mySize: 23
        },
        articleName: '',
        articleText: '',
        requiredString: "название",
        posts: '',
        userData: {name: '', job: '', email: ''},
        updateMode: false,
        requestType: 'publicate',
        addMode: 0,
        articleToChange: null,
        errors: '',
        userIdentity: '',
        indexOfUser: 0,
        userToken: localStorage.crudVueUser,
        articleID: 0,
        postsLoaded: false
    }
  },
  methods: {
    addArticle: function () {
      var publishingDate = new Date().toDateString();
      this.addMode = 0
      if (this.updateMode) {
        this.updateMode = false;
        this.posts[this.articleToChange].title = this.articleName;
        this.posts[this.articleToChange].text = this.articleText;
        // this.posts[this.articleToChange].date = publishingDate;

        this.articleName = '';
        this.articleText = '';
      } else {
        let object = {id: new Date().getMilliseconds(), title: this.articleName, text: this.articleText, date: publishingDate};

        this.posts.unshift(object);
        this.articleName = '';
        this.articleText = '';
      }
      this.errors = '';
      this.refreshData(this.posts);
    },
    async deleteArticle(indexOfArticle, articleID) {
      this.posts.splice(indexOfArticle , 1);
      // this.refreshData(this.posts);
      
      const response = await myaxios('http://localhost:3000/deleteArticle/' + articleID, 'GET')
    


    },
    updateArticle(indexOfArticle, articleID) {
      this.articleID = articleID
      console.log(articleID)
      this.addMode = true
      this.updateMode = true;

      this.requestTypeDefiner()
      this.articleToChange = indexOfArticle;
      this.articleName = this.posts[indexOfArticle].title;
      this.articleText = this.posts[indexOfArticle].text;


      document.documentElement.scrollIntoView({
        behavior: "smooth"
      });
    },
    showErrors() {
      if (this.articleName.trim().length == 0) {
        this.errors = 'Сначала введите заголовок !';        
      } else if (this.articleText.trim().length == 0) {
        this.errors = 'Сначала введите текст !';
      } else {
        this.addArticle();
      }
    }, 
    async refreshData(newObject) {
      
      try {
        const refresh = await fetch('http://localhost:3000/refreshPosts', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            userToken: localStorage.crudVueUser,
            newPostsObject: newObject
          })
        })
      }
      catch (e) {
        console.log(e.message)
      }

     
    },
    async getPostsData() {
          let dataGot = await myaxios('http://localhost:3000/givePosts/' + localStorage.crudVueUser, 'GET')
          this.posts = dataGot
          this.postsLoaded = true
    },
    async getUserData() {
        let dataGot = await myaxios('http://localhost:3000/giveUserInfo/' + localStorage.crudVueUser, 'GET')
        this.userData = dataGot[0]
    },
    registerUserLocally() {
            if (this.$route.query.token === undefined) {
            } else {
              localStorage.setItem('crudVueUser', this.$route.query.token)
              this.userToken = localStorage.crudVueUser            
            }
          
          this.getPostsData()
          this.getUserData()
    }, 
    addHandlerHere(data) {
      this.addMode = data.addMode
      this.requestType = 'publicate'
      document.documentElement.scrollIntoView({
        behavior: "smooth"
      });
    },
    requestTypeDefiner() {
      if(this.updateMode) {
          this.requestType = 'refreshPosts/' + this.articleID 
        } else {
          this.requestType = 'publicate'
        }
    }
  },
  computed: {
    refreshTextButton() {
      let text = 'Добавить';

      if(this.updateMode) {
        // this.requestType = 'refreshPosts/' + this.articleID 
        text = 'Изменить'
      } else {
        // this.requestType = 'publicate'
        text = 'Добавить'
      }

      console.log(this.requestType)
      return text;
    },
    
  },
  beforeMount() {
    this.registerUserLocally()
    this.requestTypeDefiner()
  } 


}

      


</script>



<!-- Каждый раз из-за дневника мне приходится слушать часовые лекции усителя и директора на счёт того насколько я беспорядочен. Иногда это доходит тго что они вызывают моих родителей в школу
 

This app is an example of CRUD app. CRUD stands for Create Read Update Delete so this kind of apps must implement this functions. So this app does ! It was piece of cake for me to create this app (unfortunately i am just kidding) so everybody of you can create CRUD app and bother in front of his friends. As a database this app uses just localStorage object in your browser. NO any asynchrounous sever requests cause our backend developers have not created any test page I can get api from.



Firstly , cause we have a really important football match. Secondly I have no idea what to do. Only thing I can do know is to look at the monitor and waste my time. I cannot learn about vue-router here from that videos because the author uses vue 3. So I have to go home and figure out everything about it and review components. To create a project with authorization and then come here to customize my app with my mentors` demands !


-->