<template src="./template.html"/>

<script>
export default {
    name: 'testBody',
    components: {},
    data() {
        return {
            futBtn: 1,
            baseUrl: 'tovar.png',
            tovarValue: 1,
            activLinc: 'Описание'
        }

    },
    methods: {
        newBaseUrl(value) {
            this.baseUrl = value;
        },

        checElValue(el, value) {
            return el === value
        },

        buyTovar() {
            if (this.tovarValue > 0) {
                this.tovarValue--;
            }
        },

        newValueFutBtn(value) {
            this.futBtn = value;
        },

        clickLinc(value) {
            if (this.activLinc !== value) {
                this.activLinc = value
            }
        }
    }
}
</script>

<style scoped lang="less" src="./style.less">

</style>
