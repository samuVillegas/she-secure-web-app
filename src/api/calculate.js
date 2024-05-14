export default async (start, end) => {
  try {
    const result = await fetch("http://35.224.225.59:8080/calculate", {
      method: "POST",
      body: JSON.stringify({
        start: {
          lat: start.lat,
          lon: start.lng,
        },
        end: {
          lat: end.lat,
          lon: end.lng,
        },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.json();
  } catch (err) {
    console.log(err);
    return false
  }
};
