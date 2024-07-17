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
    <div className='w-full'>
      <form action="#" onSubmit={handleSubmit} className='w-full'>
        <div className='grid grid-cols gap-5'>
        <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='border outline-none font-montserrat py-2 px-2'
            placeholder="Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.name}
            onChange={handleChange}
            className='border outline-none font-montserrat py-2 px-2'
            placeholder="Email"
            required
          />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className='border outline-none font-montserrat px-2 h-[200px] resize-none'
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="border border-slate-950 hover:bg-orange-400 hover:border-orange-400 hover:text-white text-black uppercase text-xs tracking-[2px] xl:w-1/4 py-3 px-4 font-montserrat"
          >
            Send 
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm