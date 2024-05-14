export default async (start, end) => {
  try {
    const result = await fetch("https://yammering-tine-leisaoft-1527e89d.koyeb.app/calculate", {
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
    console.log(result);
    return result.json();
  } catch (err) {
    console.log(err);
  }
};
