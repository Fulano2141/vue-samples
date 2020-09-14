<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <!-- <app-quote quote="A wonderful quote!" > -->
        <hr />
        <p>{{selectedComponent}}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default content</p>
          </component>
        </keep-alive>
        
        <!--  -->
        <!-- <app-quote> -->
        <!-- <h2 slot="title">{{ quoteTitle }}</h2> -->
        <!-- <p slot="content">A wonderful quote!</p> -->
        <!-- <p>Automatic Render a slot without name slot</p> -->
        <!-- Won't work if slot isn't on Quote.vue-->
        <!-- This app-quote use Quote.vue style  -->
        <!-- </app-quote> -->
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./Quote.vue";
import Author from "./Author.vue";
import New from "./New.vue";

export default {
  data: function () {
    return {
      quoteTitle: "The quote",
      selectedComponent: "appQuote",
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
  },
};
</script>

<style>
</style>