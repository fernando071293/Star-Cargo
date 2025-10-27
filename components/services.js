import Container from './container'
import Card from './card';
import { useState } from 'react';
export default function Services({ }) {
  const servicesListt = [
    {
      title: 'Transporte Marítimo',
      body: [
        'Ofrecemos el servicio FCL y LCL  desde y hacia cualquier parte del mundo.',
        'Star Cargo ofrece la mejor opción para nuestros clientes enfocados siempre en la competitivdad, reservas, servicio y rutas.',
        'Desarrollamos soluciones para nuestros clientes en sus tiempos ofreciendo diferentes rutas o por medio transporte multimodal para cumplir sus tiempos de entrega.',
        'Brindamos acceso a las diferentes navieras y sus contratos para buscar la mejor opción para nuestros clientes.',
        'Consolidamos mercancías aprovechando los mejores HUB según la región desde cualquier parte de mundo hacia Costa Rica.'
      ],
      image: '/images/service-1v.png',
      expanded: false
    },
    {
      title: 'Transporte Terrestre',
      body: [
        'Nuestro robusto departamente  terrestre  especializado y enfocado en buscar la mejor solución para sus mercancìas y necesidades.',
        'Salidas diarias en modalidad FTL y salidas semanales en modalidad LTL en Centroamerica.',
        'Unidades propias especializados en el transporte y manejo de productos farmaceuticos. ',
        'Experiencia, servicio, diligencia acompañados de tarifas competitivas y tiempos de tránsito optimos.',
        'Expertos en consolidación, agrupamos los pedidos de sus proveedores distribuyendoslos en la región de manera digiligente y en tiempos optimos.',
        'Manejo de Carga sobredimensionada en toda la región.'
      ],
      image: '/images/service-3v.png',
      expanded: false
    },
    {
      title: 'Transporte Aéreo',
      body: [
        'Servicios realizados a la medida con salidas diarias a las principales capitales del mundo.',
        'Contamos con personal certificado en FIATA para el correcto manejo de las mercancías.',
        'Reservaciones, ruteos, rastreos de sus cargas de el origen hasta el destino final. ',
        'Manejo de todo tipo de carga, mercancías peligrosas, suministros medicos y medicamentos.',
        'Reducimos significativamente los tiempos de gestión y garantizamos la seguridad y la legalidad en todo el proceso.'
      ],
      image: '/images/service-2v.png',
      expanded: false
    },
    {
      title: 'Agencia de Aduanas',
      body: [
        'Servicio personalizado con nuestros clientes,  agilizando los tramites aduanales.',
        'Autorizados para trabajar en los diferentes regimenes aduanales, importación, exportación, tránsitos aduaneros, zona francas, perfeccionaiento activo y pasivo. ',
        'Cada oficina tiene experiencia en manejo de mercancías con permisos.',
        'Contamos con servicio de transporte local para poder realizar las entregas de manera seguro y eficaz. ',
        'Aplicación de tratados con beneficios arancelarios.',
        'Asesorias en sus procesos aduanales.'
      ],
      image: '/images/service-4v.png',
      expanded: false
    },
    {
      title: 'Servicio de transporte local',
      body: [
        'Transporte local autorizado por la DGA con cobertura en todo el país.',
        'Confección de flujos de trabajo a la medida.',
        'Seguro de carga.',
        'Unidades con GPS.'
      ],
      image: '/images/service-5v.png',
      expanded: false
    },
    {
      title: 'Almacen y Distribución',
      body: [
        'Servicio de almacenamiento para mercancías fiscales y generales.',
        'Almacenamiento de carga sobre dimensionada.',
        'Servicios adicionales de reempaque y distribución.',
        'Almacenamiento temporal para consolidación y exportación posteriormente. '
      ],
      image: '/images/service-6v.png',
      expanded: false
    }
  ];
  const [servicesList, setServicesList] = useState(servicesListt);
  const expandClick = (value, index) => {
    servicesListt[index].expanded = value;
    setServicesList(servicesListt);
  }

  return (
    <section className="py-[60px] md:py-[100px] bg-support-grey">
      <Container className='max-w-6xl my-10'>
        
            <h2 className="text-h3 md:text-h2 text-center text-blue-900">Nuestros Servicios</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 gap-y-8 mt-10'>
                { servicesList.map((service, i) => (
                  <Card key={i} title={service.title} body={service.body} image={service.image} expanded={service.expanded} index={i} expandClick={expandClick} />
                ))
                }
            </div>
      </Container>
    </section>
  )
}
