<template>
  <div class="edit-note">
    <addEditNote
      v-model="noteContent"
      bgColor="link"
      placeHolder="Edit note"
      label="Edit Note"
    >
      <template #buttons>
        <RouterLink to="/" class="button is-link is-light mr-3">
          <!-- added click function, added disabled prop when area is empty, also addeda ref to focus -->
          Cancel
        </RouterLink>
        <button
          class="button is-link has-background-link-dark"
          ref="foucsTextareaRef"
          :disabled="!noteContent"
          @click="handleSaveClick"
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
import { useStoreNotes } from "@/stores/storeNotes";
import { useRoute, useRouter } from "vue-router";

const noteContent = ref("");
const route = useRoute();
const router = useRouter();
const storeNotes = useStoreNotes();
noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClick = () => {
  storeNotes.updateAction(route.params.id, noteContent.value);
  router.push("/");
};
</script>
