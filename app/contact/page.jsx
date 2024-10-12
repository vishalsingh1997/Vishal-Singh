"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-6395458500",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "vishal1997official@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "New Delhi, India",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to an API
    console.log("Form submitted:", formData);
    // Reset the form
    setFormData({
      firstname: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    const data = {
      to_name: formData.firstname,
      to_email: formData.email,
      message: formData.message,
    };

    const serviceId = "service_n4tykla";
    const templateId = "template_o3v91zi";
    const userId = "BARMjYz2LnjU4Zn52";

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        // console.log("Email sent successfully..🎉", response.status, response.text);
        toast.success("Email sent successfully..🎉", {
          position: "top-right",
          theme: "dark",
        });

        // Reset form data after submission
        setFormData({
          firstname: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        toast.error("Ooops..! Failed to send email. ❌", {
          position: "top-right",
          theme: "dark",
        });
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* form  */}
          <div className="lg:h-[54%] order-2 lg:order-none ">
            <form
              action=""
              onSubmit={sendEmail}
              className="flex flex-col  gap-6 p-10 bg-[#27272c] rounded-xl "
            >
              <h3 className="text-4xl text-accent">Let's Work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, molestiae!
              </p>
              {/* input  */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First Name"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  type="lastname"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="eamil"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="phone"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* select  */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="web-development">
                      Web Development(React/Next.js)
                    </SelectItem>
                    <SelectItem value="wp-development">
                      WordPress Websites
                    </SelectItem>
                    <SelectItem value="web-customization">
                      Website Customization
                    </SelectItem>
                    <SelectItem value="seo-service">Seo Services</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea  */}
              <Textarea
                className="h-[220px]"
                placeholder="Type your Message here!"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {/* Submit btn  */}
              <Button type="submit" className="max-w-48 gap-2 " size="md">
                Send Message{" "}
                <BsSendFill className="hover:transform hover:translate-x-2 group-hover:scale-105 transition-all ease-linear" />
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="flex items-center justify-center  w-[52px] h-[52px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text-accent rounded-[8px]">
                      <div className="text-2xl">{item.icon} </div>
                    </div>
                    <div>
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-md text-wrap">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
