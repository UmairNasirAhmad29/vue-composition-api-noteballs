<template>
  <div class="edit-note">
    <addEditNote
      v-model="noteContent"
      bgColor="link"
      placeHolder="Edit note"
      label="Edit Note"
    >
      <template #buttons>
        <RouterLink to="/" class="button is-link is-light">
          <!-- added click function, added disabled prop when area is empty, also addeda ref to focus -->
          Cancel
        </RouterLink>
        <button
          class="button is-link has-background-link-dark"
          ref="foucsTextareaRef"
          :disabled="!noteContent"
        >
          <!-- added click function, added disabled prop when area is empty, also addeda ref to focus -->
          Save Note
        </button>
      </template>
    </addEditNote>
  </div>
</template>

<script setup>
import addEditNote from "@/components/Notes/AddEditNote.vue";
import { ref } from "vue";

const noteContent = ref("");
</script>
