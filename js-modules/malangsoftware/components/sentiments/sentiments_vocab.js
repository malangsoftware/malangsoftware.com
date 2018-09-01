'use strict'

const sentimentVocab = `
    <b-row>
        <b-col md="12" class="text-center">sentiment_vocab</b-col>
    </b-row>
`;
var SentimentVocabTemplate = Vue.component('sentiment-vocab-template', {
    data: function () {
        return {
            a: 'ok'
        }
    },
    created: function () {
        console.log('... sentiment_vocab created');
    },
    mounted: function () {
        console.log('... sentiment_vocab mounted');
        this.$root.$emit('changeRoute', 'sentiments');
    },
    template: sentimentVocab
});

export default SentimentVocabTemplate;
