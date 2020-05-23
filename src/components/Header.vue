<docs>
## Компонент: Шапка
Предназначение: отображение заголовочной информации
Версия: 1.0
Дата изменения: 23.05.2020
</docs>

<template>
  <nav class="header blue darken-2">
    <div class="header__wrapper nav-wrapper">
      <a href="#" class="brand-logo">{{ header_logo }}</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">JavaScript</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
  data: function() {
    return {
      header_logo: "Header",
    };
  },
};
</script>

<style lang="less">
@import "../assets/styles/components/header.less";
</style>
