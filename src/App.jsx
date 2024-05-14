import { Box, Fab } from "@mui/material";
import Map from "./Map";
// import gsonData1 from "./data/shortest_path.json";
import { useState } from "react";
import calculateApi from "./api/calculate";
import processData from "./process/process-data";

export default function App() {
  const [startPosition, setStartPosition] = useState({
    lat: 6.246207,
    lng: -75.575756,
  });
  const [endPosition, setEndPosition] = useState({
    lat: 6.2000058,
    lng: -75.5774817,
  });
  const [gsonData, setGeoData] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    setLoading(true);
    const data = await calculateApi(startPosition, endPosition);
    const dataProcessed = processData(data);
    setGeoData(dataProcessed);
    setLoading(false);
  };

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Map
        gsonData={gsonData}
        startPosition={startPosition}
        setStartPosition={setStartPosition}
        endPosition={endPosition}
        setEndPosition={setEndPosition}
        loading={loading}
      />
      <Fab
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        color="primary"
        aria-label="add"
        onClick={calculate}
      >
        START
      </Fab>
    </Box>
  );
}
