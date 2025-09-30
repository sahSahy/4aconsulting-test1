export default async function fetchApi() {
  try {
    const response = await fetch("https://t-core.fit-hub.pro/Test/GetTariffs");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
