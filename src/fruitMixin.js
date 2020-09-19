// On every use this isn't shared.

// https://vuejs.org/v2/guide/filters.html
// http://vuejs.org/guide/mixins.html
export const fruitMixin = {
    data: () => ({
        fruits: ["Apple", "Banana", "Mango", "Melon"],
        filterText: "",
    }),
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        },
    },
    created() {
        console.log("Created on the mixin");
    },
};