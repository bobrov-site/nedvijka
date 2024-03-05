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
    throw new createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});
