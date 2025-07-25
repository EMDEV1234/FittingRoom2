export async function runVTON(
  person: File,
  cloth: File,
  description: string
): Promise<string> {
  const formData = new FormData();
  formData.append("person", person);
  formData.append("cloth", cloth);
  formData.append("garment_des", description);

  // Use ingress routing to backend API
  const response = await fetch("/api/tryon", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Try-on request failed");
  }

  const data = await response.json();
  return `http://fittingroom.tech${data.output}`;
}
