<template>
    <div class="el-list">
        <div class="MyList">
            <slot>

            </slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ElList',
}
</script>


<style scoped lang="less">
.el-list {
    width: 100%;
    margin: 0 10%;
    margin-bottom: 0.5rem;
}

.MyList {
    width: 100%;
    height: 100%;
    padding: 1%;
}
</style>
