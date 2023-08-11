<template>
  <div class="forum">
    <div class="sidebar">
      <div class="search-bar">
        <input v-model="searchQuery" placeholder="Pretraži forum" />
        <button @click="searchForum">Traži</button>
      </div>
      <button class="add-topic-btn" @click="showAddTopicForm = true">
        Dodaj svoju temu
      </button>
    </div>
    <div class="main-content">
      <h1>Forum</h1>
      <div class="topics">
        <div v-for="topic in topics" :key="topic.id" class="topic">
          <h2>{{ topic.title }}</h2>
          <p>{{ topic.content }}</p>
          <p>Autor: {{ topic.author }}</p>
        </div>
      </div>
    </div>
    <div v-if="showAddTopicForm" class="add-topic-form">
      <h2>Dodaj svoju temu</h2>
      <input v-model="newTopic.title" placeholder="Naslov teme" />
      <textarea
        v-model="newTopic.content"
        placeholder="Sadržaj teme"
      ></textarea>
      <button @click="addTopic">Dodaj temu</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      showAddTopicForm: false,
      newTopic: {
        title: "",
        content: "",
        author: "Neki Autor",
      },
      topics: [
        {
          id: 1,
          title: "nivea ili balea?",
          content: "nisam siguran treba li odabrati niveu ili baleu.",
          author: "anto 1",
        },
        {
          id: 2,
          title: "Druga tema",
          content: "Sadržaj druge teme",
          author: "Autor 2",
        },
        //  ostale teme
      ],
    };
  },
  methods: {
    searchForum() {
      // Logika za pretragu foruma prema searchQuery
    },
    addTopic() {
      this.topics.push({ ...this.newTopic, id: this.topics.length + 1 });
      this.newTopic.title = "";
      this.newTopic.content = "";
      this.showAddTopicForm = false;
    },
  },
};
</script>

<style>
.forum {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.sidebar {
  width: 25%;
}

.search-bar {
  margin-bottom: 10px;
}
.add-topic-form {
  padding-right: 60px;
}

.add-topic-btn {
  background-color: purple;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.main-content {
  width: 70%;
  padding-left: 340px;
}

.topic {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.add-topic-form {
  margin-top: 20px;
  padding: 20px;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
