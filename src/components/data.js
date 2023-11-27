export default {
    data: null,
    indexOfUser: -1,
    userIdentity: '',
    getData() {
          userIdentity = this.$route.query.username
          data = JSON.parse(localStorage.crudVue);
          data.forEach(element => {
            if(element.user == userIdentity) {
              indexOfUser = data.indexOf(element);
              data = element.posts;
              console.log(data)
            }
          });
    },
    refreshData(newObject) {
      let a;
      a = JSON.parse(localStorage.crudVue);
      a[indexOfUser].posts = newObject;
      localStorage.crudVue = JSON.stringify(a);
    }
}

