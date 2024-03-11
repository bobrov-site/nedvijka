import axios from "axios";

export default defineEventHandler(async (event) => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  try {
    const response = await axios.get(
      "https://public-api.reservationsteps.ru/v1/api/roomtypes?account_id=8959",
      {
        headers: headers,
      }
    );
    return {
      roomTypesPublic: response.data,
    };
  } catch (e) {
    console.log(e)
    throw new createError({
      statusCode: 500,
      statusMessage: e.data.message,
    });
  }
});
