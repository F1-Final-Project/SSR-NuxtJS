<template>
  <ul>
    <li v-for="news in newsAll" :key="news">
      {{news.title}} - {{news.text}} - {{news.img}}
    </li>
  </ul>
</template>

<script>
    import gql from 'graphql-tag'

    const newsAll = gql`
    query newsAll{
      newsAll{
        title,
        text,
        img
      }
    }
  `;
    export default {
          apollo: {
              newsAll: {
                  prefetch: true,
                  query: newsAll
              }
        },
    }
</script>

<style>

</style>
