<template>
    <div class="flex flex-center cursor-pointer" @click="this.$emit('clickButton')">
        <slot>Кнопка</slot>
    </div>
</template>

<script>

export default {
    name: 'ElButton',
}
</script>


<style scoped lang="less">

</style>
