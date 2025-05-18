<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content has-text-white">
        {{ note.content }}
      </div>
      <div class="has-text-right has-text-grey-light mt-2">
        <small>{{ characterLength }}</small>
        <!-- setting the character lenght using computed property-->
      </div>
    </div>

    <footer class="card-footer">
      <RouterLink :to="`/edit/${note.id}`" class="card-footer-item"
        >Edit</RouterLink
      >
      <a
        href="#"
        class="card-footer-item"
        @click.prevent="modals.deleteNote = true"
        >Delete</a
      >
    </footer>
    <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id"/>
  </div>
</template>

<script setup>
import { computed, handleError, reactive } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";
import { RouterLink } from "vue-router";
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";
const props = defineProps({
  // defining the prop that is being used in "@/views/ViewNotes.vue"
  note: {
    type: Object,
    required: true,
  },
});

const characterLength = computed(() => {
  // creating a computed property
  let charLength = props.note.content.length; // fetching the lenght of the note
  let description = charLength > 1 ? "Characters" : "Character";

  return `${charLength} ${description}`; // returning the value in template string so the character length and description can returned as a concatination
});

const storeNotes = useStoreNotes();

const modals = reactive({
  deleteNote: false,
});
</script>
