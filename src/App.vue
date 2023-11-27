<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
import BlogPost from './components/BlogPost.vue'
  
var data = null;
function getData() {
   data = JSON.parse(localStorage.crudVue);
}
getData();
function refreshData(newObject) {
  localStorage.crudVue = JSON.stringify(newObject);
}

export default {
  props: ['title', 'text','index'],
  components: {
    BlogPost,
  },
  data() {
    return {

        stylesheet: {
          mySize: 23
        },
        articleName: '',
        articleText: '',
        requiredString: "название",
        posts: data,
        updateMode: false,
        articleToChange: null,
        errors: '',
    }
  },
  methods: {
    addArticle: function () {
      if (this.updateMode) {
        this.updateMode = false;
        this.posts[this.articleToChange].title = this.articleName;
        this.posts[this.articleToChange].text = this.articleText;
        this.articleName = '';
        this.articleText = '';
      } else {
        let object = {id: 5, title: this.articleName, text: this.articleText};
        this.posts.unshift(object);
        this.articleName = '';
        this.articleText = '';
      }
      this.errors = '';
      refreshData(this.posts);
    },
    deleteArticle: function(indexOfArticle) {
      this.posts.splice(indexOfArticle , 1);
      refreshData(this.posts);
    },
    updateArticle: function(indexOfArticle) {
      this.updateMode = true;
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
    }
  },
  computed: {
    refreshTextButton() {
      let text = 'Добавить';
      this.updateMode ? text = 'Изменить' : text = 'Добавить';
      return text;
    },
  },

}


</script>

<link rel="stylesheet" href="./styles/style_main.css">

<style>
  
  #my {
  justify-self: center;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background: darkgreen;
  color: #fff;
  font-weight: bold;
}
h3 {
  color: #fff;
}
main,.button {
    display: flex;
    justify-content: center;
}
.container {
  margin-top: 0px;
  padding: 30px 0px;
  background: #dedede;
}
      .red {
        background: red;  
      }
      .options {
        background: #fff;
      }
      .size {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
        box-sizing: border-box;
      }
      input  {
        border: 2px black solid;
        border-radius: 5px;
        padding: 6px;
        margin-bottom: 15px;
      } 
      textarea {
        border: 2px black solid;
        width: 100%;
        height: 85px;
        border-radius: 5px;
      }
      .blue-background {
        background: blue;
      }
      #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  button {
    background: royalblue;
    color: #fff;
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 45px;
    cursor: pointer;
  }
  .del {
    background: indianred;
  }
  p, main > div {
    max-width: 350px;
  }
  .body {
    margin: 0;    
  }
  .card {
    background: #fff;
    box-shadow: 1px 1px 4px navajowhite;
    padding: 20px;
    border-radius: 25px;
    max-width: 420px;
    margin-top: 16px;
    overflow: auto;
  }
  .options {
    background: #fff;
  }
  .myFlex {
    display: flex;
    justify-content: flex-end;
  }
  .success {
    background: green;
  }
  .primary {
    background: #ff5265;
  }
  [v-cloak] {
    display: none;
  }
  body {
    margin: 0px;
  }
  html {
    background: #dedede;
  }
</style> 
<!-- Каждый раз из-за дневника мне приходится слушать часовые лекции усителя и директора на счёт того насколько я беспорядочен. Иногда это доходит тго что они вызывают моих родителей в школу
 -->