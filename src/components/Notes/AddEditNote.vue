<template>
    <div class="card has-background-success p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" /> <!-- added v-model to get values in the sctipt-->
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
         <slot name="buttons" />
        </div>
      </div>
    </div>
</template>