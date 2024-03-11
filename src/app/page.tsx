import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Home</h1>
      <Link href="/admin" className={buttonVariants()}>
        Open my admin
      </Link>
    </div>
  );
}
