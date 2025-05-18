<template>
  <div class="card p-4 mb-5" :class="`has-background-${bgColor}`">
    <label v-if="label" class="label has-text-white">
      {{ label }}
    </label>
    <div class="field">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          :placeholder="placeHolder"
          ref="textareaRef"
        />
        <!-- added v-model to get values in the sctipt-->
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeHolder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>
