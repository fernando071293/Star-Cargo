import Container from './container';
import Link from './Link'

export default function TrackingSection() {
  return (
    <section className="py-14">
      <Container className="my-6 flex justify-between items-start max-w-6xl flex-col md:flex-row">
            <h2 className="text-h3 md:text-h2 md:text-center text-base-500">Información y estado de su carga.</h2>
            <a target="_blank" rel="noreferrer" href="https://tracking.starcargoservice.com">
              <span className="py-4 px-10 bg-blue-500 text-white text-button inline-block grow-0 mt-10 md:mt-0">
              Tracking
              </span>
            </a>
      </Container>
    </section>
  )
}
