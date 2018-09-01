'use strict'

const sentimentMain = `
    <b-row>
        <b-col md="12" class="text-center">sentiment_main</b-col>
    </b-row>
`;
var SentimentMainTemplate = Vue.component('sentiment-main-template', {
    data: function () {
        return {
            a: 'ok'
        }
    },
    created: function () {
        console.log('... sentiment_main created');
    },
    mounted: function () {
        console.log('... sentiment_main mounted');
        this.$root.$emit('changeRoute', 'sentiments');
    },
    template: sentimentMain
});

export default SentimentMainTemplate;
