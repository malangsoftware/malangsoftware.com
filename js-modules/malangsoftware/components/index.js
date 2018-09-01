'use strict'

const index = `
    <b-row>
        <b-col md="12">from index template</b-col>
    </b-row>
`;
var IndexTemplate = Vue.component('index-template', {
    data: function () {
        return {
            a: 'ok'
        }
    },
    created: function () {
        console.log('... index created');
    },
    mounted: function () {
        console.log('... index mounted');
        this.$root.$emit('changeRoute', 'home');
    },
    template: index
});

export default IndexTemplate;
