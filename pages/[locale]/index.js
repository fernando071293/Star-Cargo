export async function getServerSideProps({ params }) {
  const { locale } = params;
  return { redirect: { destination: `/${locale}/home/`, permanent: false } };
}
export default function LocaleIndex() { return null; }
