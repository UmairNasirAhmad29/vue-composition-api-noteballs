<template>
    <div class="card mb-4">
      <div class="card-content">
        <div class="content has-text-white">
          {{ note.content }}
        </div>
        <div class="has-text-right has-text-grey-light mt-2">
            <small>{{ characterLength }}</small> <!-- setting the character lenght using computed property-->
        </div>
      </div>

      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
</template>

<script setup>
import { computed } from 'vue';

    const prop = defineProps({ // defining the prop that is being used in "@/views/ViewNotes.vue"
        note: {
            type: Object,
            required: true
        }
    })

    const characterLength = computed(()=>{ // creating a computed property
        let charLength = prop.note.content.length // fetching the lenght of the note
        let description = charLength > 1 ? 'Characters' : 'Character'
        
        return `${charLength} ${description}` // returning the value in template string so the character length and description can returned as a concatination
    })
</script>