
import emailjs from "emailjs-com";
import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceID = "service_431pnqe";
    const templateID = "template_93slb8e";
    const publicKey = "ZMbXIoU_7EYSbPCiN";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus(" Failed to send message. Please try again!");
        }
      );
  };

  return (
    <div
      id="Contact"
      className="max-w-xl mx-auto mt-16 p-10 bg-gray-100 rounded-xl shadow-lg text-center"
      data-aos="fade-up"
    >
      <h2
        data-aos="fade-down"
        data-aos-delay="200"
        className="text-4xl font-extrabold mb-8 text-gray-800"
      >
        Contact Me
      </h2>

      <div data-aos="fade-up" data-aos-delay="400" className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">WhatsApp</h3>
        <p className="text-xl text-gray-700">+8801881799990</p>
      </div>

      <div data-aos="fade-up" data-aos-delay="600" className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">Email</h3>
        <p className="text-xl text-gray-700">safikolislam72@gmail.com</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="text-left space-y-4"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-gray-700">{status}</p>}
    </div>
  );
};

export default Contact;





