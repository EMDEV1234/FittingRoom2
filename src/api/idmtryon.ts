export async function runVTON(
  person: File,
  cloth: File,
  description: string
): Promise<string> {
  const formData = new FormData();
  formData.append("person", person);
  formData.append("cloth", cloth);
  formData.append("garment_des", description);

  try {
    // Use proxy routing to backend API
    const response = await fetch("/api/tryon", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      // Try to get error details from the response
      let errorMessage = "Try-on request failed";
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorMessage;
      } catch {
        errorMessage = `HTTP ${response.status}: ${response.statusText}`;
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    if (!data.output) {
      throw new Error("No output received from server");
    }
    
    // Return the local result URL for development
    return `http://localhost:8000${data.output}`;
    
  } catch (error) {
    console.error("VTON API Error:", error);
    throw error;
  }
}
