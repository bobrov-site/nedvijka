// file: ~/middleware/authentication.global.ts
export default defineNuxtRouteMiddleware((to) => {
  const { status, data } = useAuth();

  // Return immediately if user is already authenticated
  console.log(status.value)
  if (status.value === "authenticated") {
    const user = data.value?.user 
    useUserStore().auth.isAuth = true;
    useUserStore().user.email = user.email;
    useUserStore().user.id = user._id;
    return;
  }

  /**
   * We cannot directly call and/or return `signIn` here as `signIn` uses async composables under the hood, leading to "nuxt instance undefined errors", see https://github.com/nuxt/framework/issues/5740#issuecomment-1229197529
   *
   * So to avoid calling it, we return it immediately.
   */
});
