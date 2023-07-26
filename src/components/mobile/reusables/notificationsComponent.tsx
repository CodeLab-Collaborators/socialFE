import Category from "./category";
import ProfilePhotos from "./profilePhotos";

type iNotification = {
  profilePhoto: any;
  name: string;
  about: string;
  action: string;
};

const NotificationsComponent: React.FC<iNotification> = ({
  profilePhoto,
  name,
  about,
  action,
}) => {
  return (
    <div className="w-full flex gap-4 items-start">
      <ProfilePhotos photo={profilePhoto} sizeInPexels="32px" />
      <div className="flex-1 pb-4 flex items-center justify-between border-b-[#efefef] border-b-[1px]">
        <div className="flex flex-col gap-0">
          <div className="text-xs">{name}</div>
          <div className="text-xs text-[silver]">{about}</div>
        </div>
        <Category category={action} />
      </div>
    </div>
  );
};

export default NotificationsComponent;
