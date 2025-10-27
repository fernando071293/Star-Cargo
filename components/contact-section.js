import Container from './container';
import Link from '../components/Link'

export default function ContactSection() {
  return (
    <section className="py-10 bg-blue-500">
      <Container className="my-6 flex justify-between items-start max-w-6xl flex-col md:flex-row">
            <h2 className="text-h3 md:text-h2 md:text-center text-white">Dudas ó comentarios?</h2>
            <Link href="/contact">
              <span className="py-4 px-10 text-blue-500 bg-white text-button inline-block grow-0 mt-10 md:mt-0">
              Contáctenos
              </span>
            </Link>
      </Container>
    </section>
  )
}
