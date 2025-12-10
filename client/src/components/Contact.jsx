export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-700 mb-8">
          Email: <strong>rohitv1797@gmail.com</strong>
        </p>

        <form className="space-y-4 max-w-lg mx-auto">
          <input
            className="border p-3 w-full rounded"
            type="text"
            placeholder="Your Name"
          />

          <input
            className="border p-3 w-full rounded"
            type="email"
            placeholder="Your Email"
          />

          <textarea
            className="border p-3 w-full rounded"
            placeholder="Message"
            rows="4"
          ></textarea>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
