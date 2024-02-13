<script setup>
const user = useUserStore();
definePageMeta({
    layout: 'user'
})

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h1 class="mb-4">Профиль</h1>
            <div class="row">
                <div class="col-12 col-md-3">
                    <aside>
                        <UserSidebar />
                    </aside>
                </div>
                <div class="col-12 col-md-8 offset-md-1">
                    <main class="d-flex flex-column">
                        <UserNavbar />
                        <div v-if="user.activeTab === 1" class="row mt-4 row-cols-1 g-3">
                            <div class="col" v-for="(item, index) in 4" :key="index">
                                <ApartmentPreview :is-vertical-layout="true" />
                            </div>
                        </div>
                        <div v-if="user.activeTab === 0" class="row mt-4 row-cols-1 g-3">
                            <div class="col" v-for="(item, index) in 1" :key="index">
                                <ApartmentPreview :is-vertical-layout="true" />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>