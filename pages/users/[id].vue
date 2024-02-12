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
                        <ul class="nav nav-tabs ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Мои объявления</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Избранное</a>
                            </li>
                        </ul>
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>