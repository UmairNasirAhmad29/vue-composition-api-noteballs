import { defineStore } from "pinia";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/js/firebase";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNotes() {
      //added async keyword at the start of the function as the get doc is using await method and that is async so we have to set our method async aswell

      // const querySnapshot = await getDocs(collection(db, "notes"));
      // querySnapshot.forEach((doc) => {
      //   let note = {
      //     id: doc.id,
      //     content: doc.data().content,
      //   };
      //   this.notes.unshift(note);
      // });

      onSnapshot(collection(db, "notes"), (querySnapshot) => {
        let notesArray = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
          };
          notesArray.unshift(note);
        });
        this.notes = notesArray;
      });
    },
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
    updateAction(id, content) {
      // getting index of the note from notes array using id param
      let index = this.notes.findIndex((note) => {
        return note.id === id;
      });
      this.notes[index].content = content;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => {
          return note.id == id;
        })[0].content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
