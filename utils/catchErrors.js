function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // the request was made and the server responsed with a status code that iis not in the range of 2xx
    errorMsg = error.response.data;
    console.error("Error list: ", errorMsg);

    // For cloundinary image uploads
    if (error.response.data.error) {
      errorMsg = error.response.data.error;
    }
  } else if (error.request) {
    // the request was made, but no response was received
    console.info("Error Request: ", errorMsg);
  } else {
    errorMsg = error.message;
    console.log("unexpected error: ", errorMsg);
  }

  displayError(errorMsg);
}

export default catchErrors;
