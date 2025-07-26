<template>
  <div class="flex flex-col gap-6">
    <h1 class="font-mono text-2xl font-medium">
      <slot name="title" />
    </h1>
    <ul class="ml-4 flex flex-col gap-2 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li>span]:size-5 [&>li>span]:text-primary [&>li>span]:-translate-y-[1.5px]">
      <slot name="item" />
    </ul>
  </div>
</template>
