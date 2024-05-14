export default (data) => {
  const { shortest_path_risk } = data;
  const u = Object.values(shortest_path_risk["lat_lon_u"]);
  const v = Object.values(shortest_path_risk["lat_lon_v"]);
  const features = [];
  for (let i = 0; i < u.length; i++) {
    const uConverted = convertToArray(u[i]);
    const vConverted = convertToArray(v[i]);
    features.push({
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [uConverted[1], uConverted[0]],
          [vConverted[1], vConverted[0]],
        ],
      },
    });
  }
  return {
    type: "FeatureCollection",
    name: "shortest_path",
    features,
  };
};

const convertToArray = (cad) => {
  return cad
    .substring(1, cad.length - 1)
    .split(",")
    .map((coordenada) => parseFloat(coordenada.trim()));
};
