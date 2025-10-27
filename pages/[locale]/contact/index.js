// Component List
import Container from '../../../components/container'
import Layout from '../../../components/layouts/layout'
import HeroBanner from '../../../components/hero-banner'
import Header from '../../../components/header'
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '../../../lib/getStatic'
// Next
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from "react";

const Contact = () => {
  const { t } = useTranslation(['common', 'footer'])
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const locationList = [
    {
      title: 'Costa Rica',
      flagIcon: '/images/cr-flag.svg',
      schedule: 'L-V 8am a 12md - 1pm a 5pm',
      phone: '+506-4001 3155',
      address: 'San Jose, Escazú, San Antonio, del supermercado Maxi Pali 200 metros al norte, porton negro a mano izquierda.'
    },
    {
      title: 'Panamá',
      flagIcon: '/images/pa-flag.svg',
      schedule: 'L-V 8am a 12md - 1pm a 5pm',
      phone: '+507-6651-6855',
      address: 'Manzana CO-1-B, Local 7, Sector Coco solito, Zona Libre de Colón, Republica de Panamá.'
    },
    {
      title: 'Nicaragua',
      flagIcon: '/images/ni-flag.svg',
      schedule: 'L-V 8am a 12md - 1pm a 5pm',
      phone: '+505-8442-1036',
      address: 'Entrada La Mercedes 1C al norte, Managua, Nicaragua.'
    },

    {
      title: 'Guatemala',
      flagIcon: '/images/gt-flag.svg',
      schedule: 'L-V 8am a 12md - 1pm a 5pm',
      phone: '+502-5872-3282',
      address: 'Avenida Petapa 55-38, Zona 12, Ciudad de Guatemala.'
    },

    {
      title: 'El Salvador',
      flagIcon: '/images/sv-flag.svg',
      schedule: 'L-V 8am a 12md - 1pm a 5pm',
      phone: '+503-5872-3282',
      address: 'Zona Franca Santa Tecla, Bodega 4, Carretera a Puerto de La Libertad, Km. 12.5, La Libertad, El Salvador '
    },

    {
      title: 'Honduras',
      flagIcon: '/images/hn-flag.svg',
      schedule: 'L-V 8am a 12md - 1pm a 5pm',
      phone: '+504-2232-6050',
      address: 'Col. La Sosa, 1 cuadra al sur y 1/2 cuadra al este, Casa No. 205, Tegucigalpa, Honduras.'
    }

  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  //   Form validation
  const [errors, setErrors] = useState({});

  //   Setting button text
  const [buttonText, setButtonText] = useState("Enviar");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Enviando");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          company: company,
          phone: phone,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Enviar");

        // Reset form fields
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setPhone("");
        setMessage("");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Enviar");
      // Reset form fields
      setName("");
      setEmail("");
      setCompany("");
      setMessage("");
      setPhone("");
      setMessage("");
    }
  };
  return (
    <>
      <Layout>
        <Head>
          <title>Star Cargo - Contact</title>
        </Head>
        <Header />
        <HeroBanner title="Estamos a su disposición" imageUrl="/images/contact.png"/>
        { locationList.map((location, k) => (
                  <section key={k} className={classNames(k % 2 !== 0 ? 'bg-support-grey' : 'bg-white', 'py-[80px]')}>
                    <Container>
                      <div>
                          <h4 className='text-h3 md:text-h2 text-blue-900'>
                            {location.title} <Image width={54} height={32} className="inline w-[54px] h-[32px]" alt="contry flag" src={location.flagIcon} />
                          </h4>
                          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 gap-y-8'>
                            <div className='mt-[60px]'>
                              <Image width={40} height={40} alt="contry flag" src='/images/schedule-icon.svg' />
                              <p className='text-h4 text-base-500  mt-[30px]'>
                                {location.schedule}
                              </p>
                              <span className='text-body text-base-400'>
                                Horario
                              </span>
                            </div>
                            <div className='mt-[60px]'>
                              <Image width={40} height={40} alt="contry flag" src='/images/phone-icon.svg' />
                              <p className='text-h4 text-base-500  mt-[30px]'>
                                { location.phone}
                              </p>
                              <span className='text-body text-base-400'>
                                Teléfono de oficina
                              </span>
                            </div>
                          </div>
                          <div className='mt-[56px]'>
                            <Image width={30} height={40} alt="contry flag" src='/images/location-icon.svg' />
                            <p className='text-h4 text-base-500 mt-[30px]'>
                              {location.address}
                            </p>
                            <span className='text-body text-base-400'>
                                Dirección
                            </span>
                          </div>
                      </div>
                    </Container>
                  </section>
          ))
        }
        <section className='bg-support-grey'>
          <Container className="px-0 md:px-5">
             <div className='pt-[100px] md:py-[120px]'>
               <h2 className='text-center text-blue-900 text-h3 md:text-h2'>
                Dejanos un mensaje
               </h2>
               <p className='mt-4 text-center text-base-500'>Trabajamos para respoder a la mayor brevedad posible</p>
               <div className='grid grid-cols-12 md:gap-4'>
                    <div className='md:col-start-3 col-span-12 md:col-span-8 px-6 py-20 md:p-20 mt-10 bg-white rounded'>
                      <form onSubmit={handleSubmit}>
                        <input name="name"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          className='py-5 px-4 block w-full border text-body placeholder:text-base-300 rounded border-base-300 text-base-300 focus:border focus:border-base-300 focus:outline-base-300 focus:ring-base-300 shadow-sm sm:text-sm' placeholder="Nombre*"></input>
                        {errors?.name && (
                          <p className="text-red-500">Nombre es requerido.</p>
                        )}
                        <input name="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          className='py-5 px-4 mt-8 block w-full border text-body placeholder:text-base-300 rounded border-base-300 text-base-300 focus:border focus:border-base-300 focus:outline-base-300 focus:ring-base-300 shadow-sm sm:text-sm' placeholder="Email*"></input>
                        {errors?.email && (
                          <p className="text-red-500">Email es requerido.</p>
                        )}
                        <input name="company"
                          value={company}
                          onChange={(e) => {
                            setCompany(e.target.value);
                          }}
                          className='py-5 px-4 mt-8 block w-full border text-body placeholder:text-base-300 rounded border-base-300 text-base-300 focus:border focus:border-base-300 focus:outline-base-300 focus:ring-base-300 shadow-sm sm:text-sm' placeholder="Companía"></input>
                        <input name="phone"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                          }}
                          className='py-5 px-4 mt-8 block w-full border text-body placeholder:text-base-300 rounded border-base-300 text-base-300 focus:border focus:border-base-300 focus:outline-base-300 focus:ring-base-300 shadow-sm sm:text-sm' placeholder="Teléfono*"></input>
                        {errors?.phone && (
                          <p className="text-red-500">Teléfono es requerido.</p>
                        )}
                        <textarea name="message"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                          }} rows="10" className='py-5 px-4 mt-8 block w-full border text-body placeholder:text-base-300 rounded border-base-300 text-base-300 focus:border focus:border-base-300 focus:outline-base-300 focus:ring-base-300 shadow-sm sm:text-sm' placeholder="Mensaje"></textarea>
                        <button type="submit" disabled={buttonText !== 'Enviar'} className={classNames(buttonText === 'Enviar' ? 'bg-blue-500 hover:bg-blue-700': 'bg-base-200',"mt-8 block py-2 px-6 font-medium text-white text-center transition duration-300 w-full")}>
                          {buttonText}
                        </button>
                      </form>
                    </div>
               </div>
             </div>
          </Container>
        </section>
      </Layout>
    </>
  )
}

export default Contact

const getStaticProps = makeStaticProps(['common', 'footer'])
export { getStaticPaths, getStaticProps }