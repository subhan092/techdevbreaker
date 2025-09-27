"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import projectData from "@/data/Projects.json"; // 👈 tumhara JSON yahan rakho
import { ArrowLeft, Workflow } from "lucide-react";
import Link from "next/link";

export default function ProjectDetail() {
  const { title } = useParams();
  const newtitle = title.replace(/-/g, " ")
  const project = projectData.find((p) => p.title == newtitle);
  console.log(title , project);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0F2C] text-white">
      {/* Banner */}
      <section className="relative h-72 flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="absolute  left-8 top-5 ">
            <a   href={'http://localhost:3000/'} className="flex items-center  "  ><ArrowLeft size={30} />
            Go Back</a>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          {project.title}
        </h1>
        <p className="absolute bottom-6 text-lg opacity-80">
          {project.tagline}
        </p>
      </section>

      {/* Screenshot */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
          <Image
            src={project.screenshot}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Details */}
      <section className="max-w-5xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-10">
        {/* Tech Stack */}
        <div>
  <h2 className="text-2xl font-semibold text-blue-400 mb-4">
    🛠 Tech Stack
  </h2>
  <div className="space-y-6">
    {Object.entries(project.tech_stack).map(([category, techs], idx) => (
      <div key={idx}>
        {/* Category Title */}
        <h3 className="text-lg font-medium text-white mb-2 capitalize">
          {category.replace(/_/g, " ")}
        </h3>
        
        {/* Tech Pills */}
        <div className="flex flex-wrap gap-2">
          {techs.map((t, i) => (
            <span
              key={i}
              className="inline-block bg-blue-700 hover:bg-blue-500 cursor-pointer 
                         text-white px-3 py-1 rounded-full text-sm shadow-md transition"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Features */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">
            🚀 Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {project?.features.map((feature, idx) => (
              <li key={idx} className="text-gray-200">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Thought Process */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold flex gap-2 text-blue-400 mb-4">
            <Workflow className="text-white" size={40} /> Workflow
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {Object.entries(project?.workflow)?.map(([step, value] , idx) => (
             <span key={idx}>
                {step && value}  <br/><br/>
                </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}
