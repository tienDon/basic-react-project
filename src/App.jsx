import { useState } from "react";
import Card from "./components/Card";
import Layout from "./components/Layout";
import { projects } from "./routes/projects";

function MiniProject() {
  return <div className="bg-white p-4 rounded">Mini Project Content Here</div>;
}

function App() {
  const [currentProject, setCurrentProject] = useState(null);
  // const projects = ["Title_1", "Title_2", "Title_3", "Title_4", "Title_5"];

  return (
    <div className="bg-gray-600  p-6 min-h-screen">
      {!currentProject ? (
        <>
          <p className="text-2xl font-semibold mb-4 text-white">
            Welcome to the Mini Projects
          </p>
          <div className="max-w-4xl mx-auto">
            {projects.map((project) => (
              <Card
                key={project.id}
                title={project.title}
                onClick={() => setCurrentProject(project)}
              />
            ))}
          </div>
        </>
      ) : (
        <Layout
          title={currentProject.title}
          component={currentProject.component}
          onBack={() => setCurrentProject(null)}
        />
      )}
    </div>
  );
}

export default App;
