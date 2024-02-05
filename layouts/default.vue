<template>
    <div class="app">
        <!-- header -->
        <AppHeader/>
        <main>
            <div class="container">
                <slot/>
            </div>
        </main>
        <AppFooter/>
        <!-- footer -->
    </div>
</template>
<style lang="scss" scoped>
.app {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>