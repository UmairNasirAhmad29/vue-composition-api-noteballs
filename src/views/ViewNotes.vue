<template>
  <div class="notes">
    <div class="card has-background-success p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" v-model="newNote" placeholder="Add a new note" /> <!-- added v-model to get values in the sctipt-->
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success-dark" @click="addNewNote" :disabled="!newNote" ref="foucsTextareaRef"> <!-- added click function, added disabled prop when area is empty, also addeda ref to focus-->
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <div class="card mb-4" v-for="note in notes" :key = note.id> <!-- using v-for derivative iterating the entries in the notes computed value-->
      <div class="card-content">
        <div class="content">
          {{ note.content }}
        </div>
      </div>

      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue'

const newNote = ref(''); // declared a new ref for storing the values entered in the textarea
const foucsTextareaRef = ref(null) // declared a new ref and set it to null so it can be used on focusing the text area

// here we are adding notes multiple times by adding an array of objects in the "ref" and accessing them in the above html using v-for (note in notes)
const notes = ref([
  {
    id: "id1",
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ea officia quaerat velit aspernatur, numquam repellendus officiis exercitationem in magnam, accusantium doloribus cum quam iure vel sunt, laboriosam libero eos!",
  },
  {
    id: "id2",
    content: "This is a shorter note"
  }
]);

const addNewNote = () => { // button click function

  console.log('in addNewNote button click');

  let currentDate = new Date().getTime()
  let id = currentDate.toString() // getting, converting and storing the current date as an id in the id index of array

  let note = { // created an array to to store id and new ref newNote.value in the array
    id: id,
    content: newNote.value
  }

  // console.log(note);
  
  notes.value.unshift(note) // using unshift to store the latest entry at the top
  newNote.value = '' // setting the newNote ref value to empty
  foucsTextareaRef.value.focus() // setting the focusTextareaRef to focus

}

</script>
