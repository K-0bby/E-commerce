import React, {useState} from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData )
    }
  return (
    <div className='max-w-full'>
        <form onSubmit={handleSubmit}>
        <div className="mb-4 font-montserrat">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border w-full md:w-[550px] py-2 px-3 text-gray-700 leading-tight outline-none"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4 font-montserrat">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className=" border w-full md:w-[550px] py-2 px-3 text-gray-700 leading-tight outline-none "
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4 font-montserrat">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border w-full md:w-[550px] h-[200px] py-2 px-3 text-gray-700 leading-tight outline-none"
            placeholder="Message"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="border border-slate-950 hover:bg-orange-400 hover:border-orange-400 hover:text-white text-black uppercase text-xs tracking-[2px] py-3 px-4 font-montserrat"
          >
            Send 
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm