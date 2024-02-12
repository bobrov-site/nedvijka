<script setup>
definePageMeta({
    layout: 'profile'
})
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
                    <main>
                        <UserNavbar/>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>