export async function runVTON(
  person: File,
  cloth: File,
  description: string
): Promise<string> {
  const formData = new FormData();
  formData.append("person", person);
  formData.append("cloth", cloth);
  formData.append("garment_des", description);

  // Use proxy routing to backend API
  const response = await fetch("/api/tryon", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Try-on request failed");
  }

  const data = await response.json();
  // Return the local result URL for development
  return `http://localhost:8000${data.output}`;
}
