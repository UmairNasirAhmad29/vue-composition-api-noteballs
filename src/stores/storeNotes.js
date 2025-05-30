import { defineStore } from "pinia";
import {
  collection,
  getDocs,
  onSnapshot,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "@/js/firebase";
import { useStoreAuth } from "@/stores/storeAuth";

let notesCollectionRef;
let getCollectionQuery;
let getNotesSnapShot = null;

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
      notesLoaded: false,
    };
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth();
      notesCollectionRef = collection(db, "users", storeAuth.user.uid, "notes");
      getCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));

      this.getNotes();
    },
    async getNotes() {
      //added async keyword at the start of the function as the get doc is using await method and that is async so we have to set our method async aswell
      if (getNotesSnapShot) getNotesSnapShot(); // added this so multipe users data don't replicate on other users when they are logged in.

      getNotesSnapShot = onSnapshot(getCollectionQuery, (querySnapshot) => {
        let notesArray = [];
        this.notesLoaded = false;
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          notesArray.push(note);
        });
        this.notes = notesArray;
        this.notesLoaded = true;
      });
    },
    async addNewNote(newNote) {
      let currentDate = new Date().getTime();
      let date = currentDate.toString(); // getting, converting and storing the current date as an id in the id index of array

      // let note = {
      //   // created an array to to store id and new ref newNote.value in the array
      //   id: id,
      //   content: newNote,
      // };
      // this.notes.unshift(note);
      // notes.value.unshift(note); // using unshift to store the latest entry at the top

      // await setDoc(doc(notesCollectionRef, id), {
      //   id: id,
      //   content: newNote,
      // });

      await addDoc(notesCollectionRef, {
        content: newNote,
        date: date,
      });
    },
    async deleteNote(id) {
      // this.notes = this.notes.filter((note) => {
      //   return note.id != id;
      // }); // using filter hiding the passed note id

      await deleteDoc(doc(notesCollectionRef, id));
    },
    async updateAction(id, content) {
      // getting index of the note from notes array using id param
      // let index = this.notes.findIndex((note) => {
      //   return note.id === id;
      // });
      // this.notes[index].content = content;

      await updateDoc(doc(notesCollectionRef, id), {
        content: content,
      });
    },
    clearNotes() {
      this.notes = [];
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
