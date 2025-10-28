import cn from 'classnames';
import Container from './container';
import Link from 'next/link';

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{' '}
              <Link href="/api/exit-preview/" className="underline">
                Click here
              </Link>{' '}
              to exit preview mode.
            </>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </div>
  );
}
