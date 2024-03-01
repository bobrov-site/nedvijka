// file: ~/middleware/authentication.global.ts
export default defineNuxtRouteMiddleware(() => {
  const { status, data } = useAuth();
  const { authUser, reset} = useUserStore();

  // Return immediately if user is already authenticated
  console.log(status.value)
  if (status.value === "authenticated") {
    const user = data.value?.user 
    authUser(user);
    return;
  }
  reset()
});
