export default ((element) => {
    const { $bootstrap } = useNuxtApp();
    element.addEventListener('mouseover', (() => {
        new $bootstrap.Dropdown(element).show();
    }))
    element.addEventListener('mouseleave' , (() => {
        new $bootstrap.Dropdown(element).hide();
    }))
})