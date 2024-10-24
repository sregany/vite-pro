import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    option: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id='contacto' className="bg-custom-dark p-10 min-w-screen flex items-center justify-center">
      <div className="bg-[#101010] p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-purple-400 text-4xl font-bold mb-4">¡Trabajemos juntos!</h2>
        <p className="text-white mb-6">Creo y desarrollo soluciones simples y elegantes, y disfruto cada momento de mi trabajo. ¡Así de fácil!</p>
        <form action="https://getform.io/f/aqoonoza" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Nombre"
              className="bg-[#1f1a30] text-white p-3 rounded-md"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Apellidos"
              className="bg-[#1f1a30] text-white p-3 rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-[#1f1a30] text-white p-3 rounded-md"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Teléfono"
              className="bg-[#1f1a30] text-white p-3 rounded-md"
            />
          </div>
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="bg-[#1f1a30] text-white p-3 rounded-md w-full"
          >
            <option value="Project">Proyecto</option>
            <option value="Collaboration">Colaboración</option>
            <option value="Other">Otros</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mensaje..."
            className="bg-[#1f1a30] text-white p-3 rounded-md w-full"
            rows="4"
          />
          {/* Honeypot para prevenir SPAM */}
          <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

          <button type="submit" className="bg-purple-600 hover:bg-purple-900 text-white p-3 rounded-md w-full md:w-auto">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
