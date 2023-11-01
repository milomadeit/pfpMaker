const INFURA_IPFS_ENDPOINT = "https://ipfs.infura.io:5001/api/v0/add";

export const saveToIPFS = async (blob) => {
  const formData = new FormData();
  formData.append("file", blob);

  // Encoding API_KEY and API_KEY_SECRET in base64
  const encodedCredentials = btoa(
    process.env.REACT_APP_API_KEY + ":" + process.env.REACT_APP_API_KEY_SECRET
  );

  const response = await fetch(INFURA_IPFS_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: "Basic " + encodedCredentials,
    },
    body: formData,
  });

  console.log("Authorization Header:", "Basic " + encodedCredentials);

  console.log("IPFS Response:", response);
  if (!response.ok) {
    throw new Error(`Failed to save to IPFS: ${response.statusText}`);
  }

  const data = await response.json();
  return data.Hash; // This is the CID for your file on IPFS.
};
