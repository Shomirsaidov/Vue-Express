<script>
export default {
  data() {
    return {
      stylesheet: {
        mySize: 30
      },
      inputValue: '',
      requiredString: "friend's name",
      title: 'Hello',
      posts: [
        { id: 1, title: 'My journey with Vue', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem sint sapiente odio eaque magni iure recusandae voluptas voluptate itaque?' },
        { id: 2, title: 'Blogging with Vue', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem sint sapiente odio eaque magni iure recusandae voluptas voluptate itaque?' },
        { id: 3, title: 'Why Vue is so fun', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem sint sapiente odio eaque magni iure recusandae voluptas voluptate itaque?' },
        { id: 90, title: 'I hate Vue js but it is the only thing I can bother !', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem sint sapiente odio eaque magni iure recusandae voluptas voluptate itaque?' }
      ]
    }
  },
  methods: {
    addUser: function () {
      let object = {id: 5, title: this.inputValue};
      this.posts.unshift(object);
    }
  }
}



</script>

<template>
  
</template>