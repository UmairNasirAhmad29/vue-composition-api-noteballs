import { defineStore } from "pinia";
import {
  collection,
  getDocs,
  onSnapshot,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "@/js/firebase";

const notesCollectionRef = collection(db, "notes");
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

      onSnapshot(notesCollectionRef, (querySnapshot) => {
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
    async addNewNote(newNote) {
      console.log("addNewNote");
      console.log("newNote", newNote);

      let currentDate = new Date().getTime();
      let id = currentDate.toString(); // getting, converting and storing the current date as an id in the id index of array

      // let note = {
      //   // created an array to to store id and new ref newNote.value in the array
      //   id: id,
      //   content: newNote,
      // };
      // this.notes.unshift(note);
      // notes.value.unshift(note); // using unshift to store the latest entry at the top

      await setDoc(doc(notesCollectionRef, id), {
        content: newNote,
      });
    },
    async deleteNote(id) {
      // this.notes = this.notes.filter((note) => {
      //   return note.id != id;
      // }); // using filter hiding the passed note id

      await deleteDoc(doc(notesCollectionRef, id));

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
