'use strict'

var me = `
    <b-row>
        <b-col md="12">me</b-col>
    </b-row>
`;
var MeTemplate = Vue.component('me-template', {
    data: function () {
        return {
            a: 'ok'
        }
    },
    created: function () {
        console.log('... me created');
    },
    mounted: function () {
        console.log('... me mounted');
        this.$root.$emit('changeRoute', 'accounts');
    },
    template: me
});

export default MeTemplate;
