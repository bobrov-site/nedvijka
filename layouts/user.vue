<template>
    <div class="app">
        <AppHeader />
        <div class="container mb-4 mt-4">
            <div class="card">
                <div class="card-body">
                    <h1 class="mb-4">Профиль</h1>
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <aside>
                                <UserSidebar/>
                            </aside>
                        </div>
                        <div class="col-12 col-md-7 offset-md-1">
                            <main class="d-flex flex-column">
                                <UserNavbar />
                                <slot />
                            </main>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <AppFooter />
    </div>
</template>