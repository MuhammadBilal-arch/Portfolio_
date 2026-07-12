"use server";

function getApiBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return `http://localhost:${process.env.PORT || 3002}`;
  }

  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
}

export async function addProject(formData) {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/api/projects/create`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || data.message || "Failed to create project");
  }

  return data.data;
}
