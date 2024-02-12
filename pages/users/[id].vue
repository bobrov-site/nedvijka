<script setup>
definePageMeta({
    layout: 'profile'
})

const changeTab = (event) => {
    console.log(event.target);
}
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h1 class="mb-4">Профиль</h1>
            <div class="row">
                <div class="col-12 col-md-4">
                    <aside>
                        <UserSidebar />
                    </aside>
                </div>
                <div class="col-md-8">
                    <main class="d-flex flex-column">
                        <UserNavbar @click="changeTab($event)"/>
                        <div class="row mt-4 row-cols-1 g-3">
                            <div class="col" v-for="(item, index) in 4" :key="index">
                                <ApartmentPreview :is-vertical-layout="true"/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>