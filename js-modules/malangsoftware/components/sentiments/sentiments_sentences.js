'use strict'

const sentimentSentences = `
    <b-row>
        <b-col md="12" class="text-center">sentiment_sentences</b-col>
    </b-row>
`;
var SentimentSentencesTemplate = Vue.component('sentiment-sentences-template', {
    data: function () {
        return {
            a: 'ok'
        }
    },
    created: function () {
        console.log('... sentiment_sentences created');
    },
    mounted: function () {
        console.log('... sentiment_sentences mounted');
        this.$root.$emit('changeRoute', 'sentiments');
    },
    template: sentimentSentences
});

export default SentimentSentencesTemplate;
