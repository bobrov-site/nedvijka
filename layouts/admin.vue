<template>
    <div class="app">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div :class="{'col-md-1': admin.isWrapped, 'col-md-3' : !admin.isWrapped}" class="col-12">
                    <AdminSidebar/>
                </div>
                <div :class="{'col-md-11': admin.isWrapped, 'col-md-9' : !admin.isWrapped}" class="col-12">
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
const admin = useAdminStore();

</script>

<style lang="scss" scoped>

</style>