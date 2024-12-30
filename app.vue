<script lang="ts" setup>
useHead({
  link: [
    {
      rel: 'apple-touch-icon',
      href: '/img/logos/192x192.png',
    },
  ],
  meta: [
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'wfm',
    },
  ],
});
</script>

<template>

  <div>
    <VitePwaManifest />
    <div>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </div>
</template>
