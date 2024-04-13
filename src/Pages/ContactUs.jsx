const ContactUs = () => {
  return (
   <div className="min-h-screen py-32">
     <div className="grid max-w-screen-xl gap-8 px-4 my-auto py-20  mx-auto text-white rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-[#3fb89a] ">
      <div className="flex items-center justify-center gap-4">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
        </div>
        {/* <img src="https://i.ibb.co/D1mx3nq/contact-image.jpg"  className="w-3/4" /> */}
      </div>
      <form noValidate="" className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded "
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded "
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded "
            data-gramm="false"
          ></textarea>
        </div>
        <button
          className="w-full p-3 text-sm font-bold  uppercase rounded bg-[#0A4781] text-white"
        >
          Send Message
        </button>
      </form>
    </div>
   </div>
  );
};

export default ContactUs;
