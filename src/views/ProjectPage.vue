<template>
  <div class="container">
    <Header :maxQuotes="maxQuote" :quoteCount="quotes.length"></Header>
    <NewQuote @quoteAdded="newQuote"></NewQuote>
    <QuoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></QuoteGrid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Quote to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from "../components/courseProject/QuoteGrid";
import NewQuote from "../components/courseProject/NewQuote";
import Header from "../components/courseProject/Header";

export default {
  data: () => ({
    maxQuote: 10,
    quotes: ["Just a quote to see something"],
  }),
  components: {
    QuoteGrid,
    NewQuote,
    Header,
  },
  methods: {
    newQuote(data) {
      if (this.quotes.length >= this.maxQuote) {
        return alert("Please delete Quotes");
      }
      this.quotes.push(data);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    },
  },
};
</script>

<style>
</style>