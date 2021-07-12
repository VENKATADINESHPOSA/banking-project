const send = async ({ url, body, method }) => {
  try {
    let result = await fetch(url, {
      method,
      body: JSON.stringify(body),
    });
    result = await result.json();
    return result;
  } catch (e) {
    return { error: e };
  }
};

export default send;
