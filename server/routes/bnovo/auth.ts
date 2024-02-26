export default defineEventHandler(async (event) => {
  try {
    const data = {
      username: "65d73a37ce20f+12910@customapp.bnovo.ru",
      password: "b16aa9502e3db4c7",
    };
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
