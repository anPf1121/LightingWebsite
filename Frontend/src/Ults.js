export const isJsonString = (data) => {
    try {
      JSON.stringify(data);
    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
}
