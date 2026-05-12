<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center gap-2">
        <UIcon name="i-lucide-sparkles" />
        <UBadge>Nuxt UI Demo</UBadge>
      </div>
    </template>

    <div class="flex flex-col items-center gap-4 py-4 text-center">
      <p>
        This app extends <code>@enms/layer-a</code> and uses Nuxt UI components.
      </p>
      <pre class="text-sm text-(--ui-text-muted)">{{ myLayer }}</pre>
    </div>

    <template #footer>
      <div class="flex justify-center gap-2">
        <UButton to="https://nuxt.com" target="_blank" icon="i-lucide-book-open">
          Nuxt Docs
        </UButton>
        <UButton to="https://ui.nuxt.com" target="_blank" variant="subtle">
          Nuxt UI Docs
        </UButton>
      </div>
    </template>
  </UCard>
</template>
