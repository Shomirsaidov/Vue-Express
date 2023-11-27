<template>
	<div id="feed">
		<NavBar
	      @addHandler="addHandlerHere"
	      name="CRUD Vue Project"
	      avatar="profile-circle.svg"
	      :profileNavBar="false"
	      theTab="feed"
	    ></NavBar>

	    


	    <div class="recentPostsContainer">

	    	<div v-if="!postsLoaded" :style="{display: 'flex', justifyContent: 'cenetr',flexDirection: 'column'}">
              <div id="loader"></div>
              <h2 :style="{color: '#fff'}">Загрузка...</h2>
        	</div>


		    <div 
	          v-if="recentPosts.length !== 0"
	          v-for="(post) in recentPosts" 
	          :key="post.id" 
	          class="card">
	            <img v-if="post.image !== 'undefined'" v-bind:src="require(`../assets/uploads/${post.image}`)" class="articleImage" height="200">
	            <div class="articleInfo">
	              <div>
	              	<img src="../assets/heartBold.svg" width="27" height="27" v-if="isLiked(post)" :style="{cursor: 'pointer'}">
	              	<img src="../assets/heart.svg" width="27" height="27" v-if="!isLiked(post)" :style="{cursor: 'pointer'}" @click="like(post.id)">
	              </div>
	              <h3 v-bind:style="{color: '#2c3e50'}">{{ post.title }}</h3>
	              <p v-html="post.text"></p>
	              <div :style="{display: 'flex', justifyContent: 'space-between'}">
	                <h3 
	                  :style="{color: '#008010de', fontSize: '14px', fontWeight: '100'}"
	                  >{{ post.date }}</h3>
	                <div :style="{display: 'flex', alignItems: 'center'}">
	                	<h2 :style="{margin: '5px', fontSize: '20px', fontStyle: 'italic'}">{{ post.author }}</h2>
	                	<img 
	                	width="40" 
	                	height="40" 
	                	:style="{borderRadius: '50%'}"
	                	v-if="post.author_avatar !== ''"
	                	:src="require(`../assets/uploads/${post.author_avatar}`)">
	                </div>
	              </div>
	            </div>
	        </div>

	    </div>



	</div>
</template>
<script type="text/javascript">
	import NavBar from '../components/NavBar'
	import myaxios from '../myaxios.js'


	const headers = {}
          headers['Access-Control-Allow-Origin'] = '*'
          headers['Access-Control-Allow-Credentials'] = 'true'
          headers['Content-Type'] = 'application/json'


	export default {
		data: () => ({
			recentPosts: null,
			postsLoaded: false,
			userData: null
		}),
		components: {
	    	NavBar,
	  	},
		methods: {
			addHandlerHere(data) {
				console.log(data)
			},
			async loadPosts() {
				const response = await myaxios('http://localhost:3000/giveRecentPosts', 'GET')
				this.recentPosts = response
				this.recentPosts.forEach(post => post.likedBy = JSON.parse(post.likedBy))
				console.log(this.recentPosts)
				this.postsLoaded = true	
			},
			isLiked(thePost) {
				
				if(thePost.likedBy.includes(this.userData.name)) {
					return true
				} else {
					return false
				}
				

			},
			async getUserData() {
		        let dataGot = await myaxios('http://localhost:3000/giveUserInfo/' + localStorage.crudVueUser, 'GET')
		        this.userData = dataGot[0]
		        console.log(this.userData)
		    },
		    async like(postID) {
		    	let dataGot = await myaxios('http://localhost:3000/like/' + postID + '/' + this.userData.name, 'GET')
		    	 // this.recentPosts.forEach(post => {
		    	 // 	if(post.id == postID) {
		    	 		
		    	 // 	} 
		    	 // })


		    }
		},
		beforeMount() {
			this.loadPosts()
			this.getUserData()
		}
	}
</script>



