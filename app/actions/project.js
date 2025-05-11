"use server";

export async function addProject(formData) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/create`, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Failed to create project");

  return data.data;
}
