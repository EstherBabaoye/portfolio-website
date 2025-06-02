export default function Projects() {
  return (
    <section className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded shadow">Project 1</div>
        <div className="bg-white p-6 rounded shadow">Project 2</div>
        <div className="bg-white p-6 rounded shadow">Project 3</div>
      </div>
    </section>
  );
}
