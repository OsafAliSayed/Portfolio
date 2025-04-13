const Contact = () => {
    return (
      <section className="min-h-screen px-6 py-12">
        <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
        <form className="max-w-lg mx-auto space-y-5 bg-glass p-6 rounded-xl">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded input-field"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded input-field"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-3 rounded input-field"
          ></textarea>
          <button className="w-full py-3 bg-[#E50914] text-white font-semibold rounded hover:bg-red-700 transition">
            Send
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  