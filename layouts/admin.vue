<template>
    <div class="app">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-12 col-md-3">
                    <AdminSidebar/>
                </div>
                <div class="col-12 col-md-9">
                    <div class="p-4">
                        <slot />
                    </div>
                </div>
            </div>
            
        </div>
        <AppFooter />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>