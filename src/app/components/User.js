import Image from 'next/image';
import Link from 'next/link';

export const User = ({ avatar, username }) => {
  return (
    <Link href={`/users/${username}`} className="block">
      <div className="w-full flex items-center justify-start mb-2">
        <Image src={avatar} alt="User avatar" width={50} height={50} className="rounded-full" />
        <p className="pl-2">{username}</p>
      </div>
    </Link>
  );
};
