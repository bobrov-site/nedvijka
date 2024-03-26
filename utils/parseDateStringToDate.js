export default ((dateString) => {
    const parts = dateString.split('-');
    const formattedDate = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    return formattedDate
})