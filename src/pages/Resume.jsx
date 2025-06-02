import { useEffect } from "react";

export default function Resume() {
  useEffect(() => {
    document.title = "My Resume";
  }, []);
  return (
    <section className="min-h-screen p-8">
      <h2 className="text-3xl mt-8 font-bold mb-4">My Resume</h2>
      {/* <p>You can download my resume <a href="/assets/resume.pdf" className="text-[#72cded] underline">here</a>.</p> */}
    </section>
  );
}
