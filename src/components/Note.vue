<template lang="html">
    <div :id="noteid" class="noteholder">

        <textarea :value="noteInput" @input="updateMarkdown"
                  class="noteTextarea">
        </textarea>

        <div v-html="compiledNote"
             class="noteRenderedHtml"
        ></div>

    </div>
</template>

<style lang="css">
.noteholder {
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center space-around;
    align-items: center;
    align-content: center;
}

.noteTextarea {
    height: 75vh;
    width: 40vw;
}

.noteRenderedHtml {
    height: 75vh;
    width: 40vw;
}
</style>

<script>
import marked from 'marked'
import _      from 'lodash'

export default {
    data: function () {
        return {
            noteInput: '# New note'
        }
    }

    , computed: {
        // Return the id of the note prepended by "note-" or "newnote" in case
        // the note does not exist.
        noteid: function() {
            if (this.$route.params.noteid) {
                return "note-" + this.$route.params.noteid
            }

            return "newnote"
        }

        // Return the html version of the note. The plugin used is Marked, see:
        // https://github.com/chjj/marked
        , compiledNote: function () {
            return marked(this.noteInput, {sanitize: true})
        }
    }

    , methods: {
        updateMarkdown: _.debounce(function (e) {
            this.noteInput = e.target.value
        }, 300)
    }
}
</script>
