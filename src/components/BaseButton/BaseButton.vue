<template>
  <button class="personal-button" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  text: string
}

defineProps<ButtonProps>()

const onClick = () => alert('hi world')
</script>

<style lang="scss">
@import url('../../assets/variables.scss');

.personal-button {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: 0.75rem 1rem;
  border-radius: var(--border-radius);
  border: 0;
  cursor: pointer;
  width: fit-content;
}
</style>
