<template src="./template.html"/>

<script>
export default {
    name: 'testHed',
    components: {},
    data() {
        return {
            activBtn: '',
            activLinc: 'Ролик режущий на нож Tapco',
        }
    },
    methods: {
        checElementLinc(checet) {
            return this.activLinc === checet;
        },

        checElementBtn(checet) {
            return this.activBtn === checet;
        },

        newActivLinc(value) {
            this.activLinc = value;
        },

        newActivBtn(value) {
            this.activBtn = value;
        }


    }

}

</script>







<style scoped lang="less" src="./style.less" />
