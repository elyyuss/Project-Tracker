import React, { useState } from 'react';

const ProjectDashboard = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Proyek A', status: 'Berjalan' },
    { id: 2, name: 'Proyek B', status: 'Akan Berjalan' },
    { id: 3, name: 'Proyek C', status: 'Selesai' },
  ]);

  const updateStatus = (id, newStatus) => {
    setProjects(projects.map(p =>
      p.id === id ? { ...p, status: newStatus } : p
    ));
  };

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Daftar Proyek</h1>
      <div className="grid gap-4">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-600">Status: {project.status}</p>
            <div className="mt-2 space-x-2">
              {['Akan Berjalan', 'Berjalan', 'Selesai'].map(status => (
                <button
                  key={status}
                  onClick={() => updateStatus(project.id, status)}
                  className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboard;