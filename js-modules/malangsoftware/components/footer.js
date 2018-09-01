'use strict'

const footer = `
    <b-row>
        <b-col md="12" class="text-center">footer</b-col>
    </b-row>
`;
var FooterTemplate = Vue.component('footer-template', {
    data: function () {
        return {
            a: 'ok'
        }
    },
    created: function () {
        console.log('... footer created');
    },
    mounted: function () {
        console.log('... footer mounted');
    },
    template: footer
});

export default FooterTemplate;
