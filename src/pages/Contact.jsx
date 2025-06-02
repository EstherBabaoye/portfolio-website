export default function Contact() {
  return (
    <section className="min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-lg space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border" />
        <textarea placeholder="Message" className="w-full p-2 border h-32" />
        <button className="bg-[#051d40] text-white px-4 py-2">Send</button>
      </form>
    </section>
  );
}
