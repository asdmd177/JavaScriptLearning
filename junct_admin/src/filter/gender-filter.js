import Vue from 'vue'

Vue.filter('genderFilter',(code) =>{
	return code == 0 ? '男':'女'
})