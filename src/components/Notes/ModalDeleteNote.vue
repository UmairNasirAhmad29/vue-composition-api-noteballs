<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <div class="buttons">
          <button class="button" @click="closeModal">Cancel</button>
          <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">Delete</button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
import { useStoreNotes } from "@/stores/storeNotes";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String,
    requred: true
  }
});

const emit = defineEmits(["update:modelValue"]);

const storeNotes = useStoreNotes()

const closeModal = () => {
  console.log("close modal clicked");

  emit("update:modelValue", false);
};

// hiding modal when clicked out side the modal using template ref and vue default function 'onClickOutsude'
const modalCardRef = ref(null);
onClickOutside(modalCardRef, () => {
  emit("update:modelValue", false);
});

//hiding modal using escape key using the lifecycle hooks e.g, onMounted, onUnMounted, etc
const handleKeyboard = (e) => {
  if (e.key == "Escape") {
    closeModal();
  }
};
onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});
onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});

// const deleteNote = () => {

//     storeNotes.deleteNote(noteId)
//     closeModal()

// }

</script>
