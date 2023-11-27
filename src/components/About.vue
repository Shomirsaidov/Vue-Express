<template>
	<div id="app" v-cloak>
	    <NavBar
	      name="CRUD Vue Project"
	      :profileNavBar="false"
	      theTab="about"
	    ></NavBar>

	    <div :style="{height: '100vh', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}">

	    	<div :style="{display: 'flex',flexDirection: 'column', alignItems: 'center',justifyContent: 'center', padding: '30px', background: '#fff', color: 'black', borderRadius: '30px', boxShadow: '8px 8px 0px limegreen', marginTop: '330px', minWidth: '29%', marginBottom: '30px'}">
		        <img src="../assets/doleap.png" height="80px">
		        
		        <h4 :style="{color: 'grey'}">Худжанд {{year}}</h4>
		    </div>
		    <div :style="{display: 'flex',flexDirection: 'column', alignItems: 'center',justifyContent: 'center', padding: '30px', background: '#fff', color: 'black', borderRadius: '30px', minWidth: '29%',marginBottom: '30px'}">
		    	<h3 :style="{margin: '0 0 0 0',color: '#000'}">DoLeap Corporation CEO </h3>
		        <h3 :style="{fontStyle: 'italic',fontWeight: 'lighter', color: '#000', margin: '15px 0 0 0'}">Шомирсаидов Абубакр</h3>
		    </div>
		    <div :style="{display: 'flex',flexDirection: 'column', alignItems: 'center',justifyContent: 'center', padding: '30px', background: '#fff', color: 'black', borderRadius: '30px', minWidth: '29%',marginBottom: '30px'}">
		    	<h3 :style="{margin: '35px 0 0 0',color: '#000'}">Програмное обеспечение</h3>
		        <h3 :style="{fontStyle: 'italic',fontWeight: 'lighter', color: '#000', margin: '0 0 0 0'}">
		        	<ul style="margin-top: 12px; list-style: none;">
		        		<li>HTML</li>
		        		<li>Tailwind CSS</li>
		        		<li>Vue JS</li>
		        		<li>node.js</li>
		        		<li>Express.js</li>
		        		<li>SQL</li>
		        	</ul>
		        </h3>
		    </div>
		    <div height="400" width="100">Happy End</div>

	    </div>


	    
	</div>
</template>
<script>
	import NavBar from './NavBar'
	export default {
		data: () => ({
			year: new Date().getFullYear()
		}),
		components: {
	    	NavBar,
	  	},
	}
</script>