<template>
  <div class="notes">
    <addEditNote v-model="newNote" placeHolder="Add a new note">
      <template #buttons>
        <button
          class="button is-link has-background-success-dark"
          @click="addNewNote"
          :disabled="!newNote"
          ref="foucsTextareaRef"
        >
          <!-- added click function, added disabled prop when area is empty, also addeda ref to focus -->
          Add New Note
        </button>
      </template>
    </addEditNote>

    <progress
      class="progress is-large is-success"
      max="100"
      v-if="!storeNotes.notesLoaded"
    />
    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note />

      <div
        v-if="!storeNotes.notes.length"
        class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
      >
        No notes are added...
      </div>
    </template>
    <!-- using v-for derivative iterating the entries in the notes reactive object. Added a new prop ":note" so that the reactive object values can be accessed in the child components in "@/components/Notes/Note.vue". Now we are using pinia store so delete functionlaity is all being handled from child component Note.vue-->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Note from "@/components/Notes/Note.vue"; // importing the new child component created at "@/components/Notes/Note.vue"
import addEditNote from "@/components/Notes/AddEditNote.vue"; // importing the new child component created at "@/components/Notes/AddEditNote.vue as the card functionality is moved there so it can re used"
import { useStoreNotes } from "@/stores/storeNotes";

const storeNotes = useStoreNotes();

const newNote = ref(""); // declared a new ref for storing the values entered in the textarea
const foucsTextareaRef = ref(null); // declared a new ref and set it to null so it can be used on focusing the text area

const addNewNote = () => {
  // button click function
  storeNotes.addNewNote(newNote.value);
  newNote.value = ""; // setting the newNote ref value to empty
  foucsTextareaRef.value.focus(); // setting the focusTextareaRef to focus
};

onMounted(() => {
  storeNotes.getNotes();
});
</script>
