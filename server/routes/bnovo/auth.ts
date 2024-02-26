export default defineEventHandler(async (event) => {
  const { bnovoUsername, bnovoPassword } = useRuntimeConfig(event);
  const data = {
    username: bnovoUsername,
    password: bnovoPassword,
  };
  try {
    const response = await axiosInstance({
      method: 'POST',
      data: data,
      maxRedirects: 0,
      validateStatus: status => status < 400
    });
    if (response.status === 302) {
      return {
        auth: true,
      }
      
    }
    else {
      throw new Error('Expected a redirect response, but did not receive one.');
    }
  } catch (e) {
    return {
      auth: false,
      error: e.message
    };
  }
});
