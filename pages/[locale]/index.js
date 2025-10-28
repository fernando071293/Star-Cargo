export async function getServerSideProps() {
  return { redirect: { destination: '/es/home/', permanent: false } };
}
export default function Index() { return null; }
