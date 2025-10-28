import { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from './languageDetector';

export const useRedirect = (to) => {
  const router = useRouter();

  useEffect(() => {
    const detectedLng = languageDetector.detect();
    const current = to ?? router.asPath;
    const normalized = current.startsWith('/') ? current : `/${current}`;

    if (router.route === '/404') {
      router.replace(`/${detectedLng}/home/`);
      return;
    }

    const alreadyPrefixed =
      normalized === `/${detectedLng}` ||
      normalized === `/${detectedLng}/` ||
      normalized.startsWith(`/${detectedLng}/`);

    const target = alreadyPrefixed ? normalized : `/${detectedLng}${normalized}`;

    if (router.asPath !== target) {
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
