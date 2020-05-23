<docs>
## Компонент: Блок
Предназначение: для отображение связных по типу элементов
Версия: 1.0
Дата изменения: 23.05.2020
</docs>

<template src="../../../templates/components/block.html"></template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
};
</script>
