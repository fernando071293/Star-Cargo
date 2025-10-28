import { useEffect } from 'react';
import { useRouter } from 'next/router';
import languageDetector from './languageDetector';

export const useRedirect = (to) => {
  const router = useRouter();

  useEffect(() => {
    const detectedLng = languageDetector.detect();
    const current = to || router.asPath;

    if (router.route === '/404') {
      router.replace(`/${detectedLng}/home/`);
      return;
    }

    const alreadyPrefixed =
      current === `/${detectedLng}` ||
      current === `/${detectedLng}/` ||
      current.startsWith(`/${detectedLng}/`);

    const normalized = current.startsWith('/') ? current : `/${current}`;

    if (alreadyPrefixed) {
      router.replace(normalized);
    } else {
      router.replace(`/${detectedLng}${normalized}`);
    }

    languageDetector.cache(detectedLng);
  }, []); 

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
