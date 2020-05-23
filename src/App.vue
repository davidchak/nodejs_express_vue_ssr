<docs>
## Компонент: Корневой компонент
Предназначение: подключение других компонент
Версия: 1.0
Дата изменения: 23.05.2020
</docs>

<template>
  <div>
    <!-- Header -->
    <app-header />
    <div class="container">
      <block
        v-for="article in articles"
        :key="article.id"
        :title="article.title"
        :content="article.content"
      />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import Block from "./components/common/Block.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    Block,
  },
  data: () => {
    return {
      articles: [
        { id: 1, title: "Первая статья", content: "Сама статья" },
        { id: 2, title: "Вторая статья", content: "Сама статья" },
        { id: 3, title: "Третья статья", content: "Сама статья" },
        { id: 4, title: "Четвертая статья", content: "Сама статья" },
      ],
    };
  },
};
</script>

<style lang="less">
@import "assets/styles/common/index.less";
</style>
