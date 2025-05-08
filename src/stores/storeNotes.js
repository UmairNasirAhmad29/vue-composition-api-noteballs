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
});
