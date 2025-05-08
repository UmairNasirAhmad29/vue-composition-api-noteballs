import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [
        {
          id: "id1",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ea officia quaerat velit aspernatur, numquam repellendus officiis exercitationem in magnam, accusantium doloribus cum quam iure vel sunt, laboriosam libero eos!",
        },
        {
          id: "id2",
          content: "This is a shorter note",
        },
        {
          id: "id3",
          content: "This is an another shorter note",
        },
      ],
    };
  },
  actions: {
    addNewNote(newNote) {
      console.log("addNewNote");
      console.log("newNote", newNote);

      let currentDate = new Date().getTime();
      let id = currentDate.toString(); // getting, converting and storing the current date as an id in the id index of array

      let note = {
        // created an array to to store id and new ref newNote.value in the array
        id: id,
        content: newNote,
      };

      // console.log(note);
      this.notes.unshift(note);
      //   notes.value.unshift(note); // using unshift to store the latest entry at the top
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => {
        return note.id != id;
      }); // using filter hiding the passed note id
    },
  },
});
