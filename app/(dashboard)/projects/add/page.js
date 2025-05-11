"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import { addProject } from "@/app/actions/project";

export default function ProjectForm() {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("priority", data.priority);
            formData.append("link", data.link);
            formData.append("type", data.type);
            formData.append("tech_stack", data.tech_stack);

            for (let i = 0; i < data.images.length; i++) {
                formData.append("images", data.images[i]);
            }
            const project = await addProject(formData);
            console.log("Project response received:", project);
            toast.success("Project created successfully!");
            reset();  
        } catch (err) {
            toast.error("An unexpected error occurred");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <h1>Add Project details</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 max-w-md">
                <div>
                    <label className="text-black font-semibold text-xs" htmlFor="title">
                        Title.
                    </label>
                    <input
                        id="title"
                        className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                        {...register("title", { required: true })} placeholder="Title" />
                </div>
                <div>
                    <label className="text-black font-semibold text-xs" htmlFor="description">
                        Description.
                    </label>
                    <textarea
                        id="description"
                        {...register("description")} placeholder="Description"
                        className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                    />
                </div>
                <div>
                    <label className="text-black font-semibold text-xs" htmlFor="priority">
                        Priority.
                    </label>
                    <input id="priority" type="number" {...register("priority")} placeholder="Priority" className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green" />
                </div>
                <div>
                    <label className="text-black font-semibold text-xs" htmlFor="link">
                        Link.
                    </label>
                    <input id="link" {...register("link")} placeholder="Project Link" className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green" />
                </div>
                <div>
                    <label className="text-black font-semibold text-xs" htmlFor="type">
                        Type.
                    </label>
                    <input id="type" {...register("type")} placeholder="Type" className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green" />
                </div>
                <div>
                    <label className="text-black font-semibold text-xs" htmlFor="tech_stack">
                        Tech Stack.
                    </label>
                    <input id="tech_stack" {...register("tech_stack")} placeholder="Tech Stack" className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green" />
                </div>

                <label className="text-black font-semibold text-xs" htmlFor="images">
                    Images.
                </label>
                <input
                    type="file"
                    {...register("images")}
                    multiple
                    accept="image/*"
                    className="text-black border text-sm border-gray rounded-sm w-full py-1.5 px-3 leading-tight focus:outline-none focus:shadow-outline focus:border-green"
                />

                <button type="submit" className="bg-purple-primary text-white px-4 py-2 rounded-sm" disabled={loading}>
                    {loading ? "Uploading..." : "Create Project"}
                </button>
            </form>
        </div>
    );
}
