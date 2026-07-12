'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';

export function ProjectsListClient({ initialProjects = [] }) {
  const [projects, setProjects] = useState(initialProjects);
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Delete this project?');
    if (!confirmed) return;

    setDeletingId(id);

    try {
      const response = await fetch(`/api/projects/delete/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete project');
      }

      setProjects((current) => current.filter((project) => project.id !== id));
      toast.success('Project deleted successfully');
    } catch (error) {
      toast.error(error.message || 'Failed to delete project');
    } finally {
      setDeletingId(null);
    }
  };

  if (!projects?.length) {
    return (
      <div className="text-center text-gray-primary max-h-[50vh] min-h-[50vh] border border-white-primary rounded-md p-4 w-full flex flex-col items-center justify-center justify-self-center">
        <h1 className="text-xl font-semibold mb-4 text-white">No projects found</h1>
        <Link href="/projects/add">
          <button className="btn-purple-normal-filled">Add Project</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
      {projects.map((item) => (
        <div
          key={item.id || item.title}
          className="bg-gray-extralight p-4 text-gray-normal group overflow-hidden space-y-2 cursor-pointer"
        >
          {item?.images?.length > 0 && (
            <div className="max-h-48 h-48 overflow-hidden">
              <Image
                src={item.images[0] || ''}
                alt={item.title}
                width={500}
                height={300}
                className="w-full min-h-48 object-center object-cover group-hover:scale-105 duration-1000"
              />
            </div>
          )}

          <div className="text-left space-y-3">
            <div className="text-base Poppins-Medium text-purple-primary">{item.title}</div>
            <p className="text-xs Poppins-Regular text-left h-12 mb-4 line-clamp-2">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                className="btn-purple-normal-filled group-hover:bg-orange-primary hover:text-white text-xs"
                href={item.link || item.links || '#'}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
              <button
                type="button"
                onClick={() => handleDelete(item.id)}
                disabled={deletingId === item.id}
                className="bg-red-600 text-white px-3 py-2 rounded-sm text-xs disabled:opacity-60"
              >
                {deletingId === item.id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
