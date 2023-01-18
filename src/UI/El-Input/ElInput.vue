<template>
    <div class="el-input">
        <input class="MyInput" :type="type" :placeholder="placeholder" :value="modelValue" @input="updateInput">
    </div>
</template>

<script>

export default {
    name: 'ElInput',
    props: {
        modelValue: [String, Number],
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'Введите текст'
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="less">

</style>
