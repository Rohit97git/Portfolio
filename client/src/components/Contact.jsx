const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-white px-4">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Contact</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 w-full rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 w-full rounded"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="border p-3 w-full rounded"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
