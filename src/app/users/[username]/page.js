import Image from 'next/image';
import { getUser } from '../../../api/getUser';

export const UserPage = async ({ params }) => {
  const { username } = await params;
  const user = await getUser(username);

  const { avatar_url, login, html_url, followers_url, following_url } = user;

  return (
    <div className="p-6  max-w-xl mx-auto">
      <div className="flex items-center gap-4">
        <Image width={100} height={100} className="w-50 h-50" src={avatar_url} alt="User avatar" />
        <div className="">
          <p className="pl-2">{login}</p>
          <a className="pl-2" href={html_url}>
            GitHub profile
          </a>
        </div>
      </div>
      <div className="mt-6">
        Followers: {followers_url}
        Followings: {following_url}
      </div>
    </div>
  );
};

export default UserPage;
