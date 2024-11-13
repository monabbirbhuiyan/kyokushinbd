import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-screen">
      <div className="flex w-full items-center justify-center h-[700px] border-[1px]">
        <p className="text-4xl text-black">Contact</p>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between gap-8 px-4">
        {/* Contact Information */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold">Address</h2>
          <p>1, Lake Circus (Ground Floor), Kalabagan, Dhaka-1205.</p>

          <h3 className="text-xl font-bold mt-4">Mobile no:</h3>
          <p>+880 1819-276779 / +880 1630 277052</p>

          <h3 className="text-xl font-bold mt-4">Email Address</h3>
          <p>kyokushinent@yahoo.com</p>

          <h3 className="text-xl font-bold mt-4">Facebook</h3>
          <p>Kyokushin Bangladesh</p>
        </div>

        {/* Map */}
        <div className="md:w-1/2 h-[300px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.234884809368!2d90.4170595!3d23.7809232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79eabd56035%3A0x81b7d8299806484b!2sGulshan%20Karate%20Dojo!5e0!3m2!1sen!2sca!4v1730952094733!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
