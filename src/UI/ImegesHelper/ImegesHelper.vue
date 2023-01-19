<template src="./template.html">

</template>

<script>

export default {
    name: "ImegesHelper",
    props: [
        'baseUrl',
        'titelUrl',
        'typeUrl'
    ],
    data() {
        return {
            baseTitel: 'Изображение',
            baseValue: 'tovar.png',
            typeValue: 'img'
        }
    },
    computed: {
        url() {
            if (this.baseUrl && (!this.typeUrl || this.typeUrl == 'img')) {
                const fileName = this.baseUrl.toLowerCase()
                return require(`@/assets/imges/${fileName}`);
            }
            const fileName = this.baseValue.toLowerCase()
            return require(`@/assets/imges/${fileName}`);
        }
    },
    methods: {
    }
}
</script>

<style scoped src="./Style.less" lang="less">

</style>