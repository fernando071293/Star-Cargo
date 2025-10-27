import Container from './container';
import Link from '../components/Link'
import Image from 'next/image'

export default function RouteSection() {
  return (
    <section className="py-[100px] py-[160px] relative  bg-base-900">
      <div className="w-full h-full bg-no-repeat bg-center bg-cover bg-[url('/images/routes-bg.png')] absolute z-0 top-0 opacity-5"></div>
      <Container className="my-10 flex justify-between items-start max-w-6xl relative z-10 ">
            <div className='grid grid-cols-1 md:grid-cols-2'>
              <div className='lg:max-w-[80%]'>
                <h2 className="text-h3 md:text-h2 text-white">Principales Rutas</h2>
                <p className='text-base-100 mt-6'>
                  Nuestras ruta estan diseñadas para cumplir con las necesidades de conexión de trasporte internacional a nivel Centroamericano, facilitando a los exportadores y agentes de carga ampliar el mercado regional de sus mercancias.
                </p>
                <p className='text-base-100 mt-4'>
                  Utilizamos Panamá, Costa Rica y Guatemala, como nuestros centros de consolidacion, esto debido a su pocisión geografica, facilidades aduanales y beneficios para las cargas en transito. 
                </p>
                <p className='text-base-100 mt-4'>
                  Los almacenes fiscales encargados se encuentran ubicados en el GAM de cada país para la facilidad de los clientes y agentes de carga.
                </p>
                {/* <Link href="/routes">
                  <a className="py-2 mt-4 text-white text-overline-large font-normal inline-block">
                    Ver todas las rutas
                  </a>
                </Link> */}
              </div>
              <div className='mt-10 md:mt-0 md:ml-10 md:pl-10'>
                <ul>
                  <li className='border-l-2 border-blue-300 bg-blue-300/[.06] text-h4 text-white py-8 pl-[48px]'>
                    <span className='lg:hidden'>Desde</span>
                    <span className='hidden lg:inline'>Servicio desde</span>
                    <span className='text-blue-200'> Panamá</span></li>
                  <li className='border-l-2 border-blue-300 bg-blue-300/[.06] text-h4 text-white py-8 mt-8 pl-[48px]'>
                    <span className='lg:hidden'>Desde</span>
                    <span className='hidden lg:inline'>Servicio desde</span>
                    <span className='text-blue-200'> Costa Rica</span></li>
                  <li className='border-l-2 border-blue-300 bg-blue-300/[.06] text-h4 text-white py-8 mt-8 pl-[48px]'>
                    <span className='lg:hidden'>Desde</span>
                    <span className='hidden lg:inline'>Servicio desde</span>
                    <span className='text-blue-200'> Guatemala</span></li>
                </ul>
              </div>
              
            </div>
            
      </Container>
    </section>
  )
}
