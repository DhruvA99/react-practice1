export const FetchData = async () => {
  try {
    const response = await fetch("https://flipkart-page-api.vercel.app/");
    const jsonData = await response.json();
    console.log(jsonData);
    return {
      success: true,
      data: jsonData.data,
    };
  } catch (error) {
    console.log(error.message);
    return {
      success: false,
      message: error.message,
    };
  }
};
