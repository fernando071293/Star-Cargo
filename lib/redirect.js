import { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from './languageDetector';

const withLeadingSlash = (p) => (p.startsWith('/') ? p : `/${p}`);
const norm = (p) => {
  const s = withLeadingSlash(p);
  return s.endsWith('/') ? s : `${s}/`;
};

export const useRedirect = (to) => {
  const router = useRouter();

  useEffect(() => {
    const detectedLng = languageDetector.detect();
    const current = to ?? router.asPath;
    const normalized = norm(current);

    if (router.route === '/404') {
      const dest = `/${detectedLng}/home/`;
      if (norm(router.asPath) !== norm(dest)) router.replace(dest);
      return;
    }

    const alreadyPrefixed =
      normalized === `/${detectedLng}/` ||
      normalized.startsWith(`/${detectedLng}/`);

    const target = alreadyPrefixed ? normalized : `/${detectedLng}${normalized}`;

    if (norm(router.asPath) !== norm(target)) {
      languageDetector.cache(detectedLng);
      router.replace(target);
    }
  }, [router, to]);

  return null;
};

export const Redirect = () => {
  useRedirect();
  return null;
};

export const getRedirect = (to) => () => {
  useRedirect(to);
  return null;
};
