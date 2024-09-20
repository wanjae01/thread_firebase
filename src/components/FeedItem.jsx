import React from "react";
import { RiHeartLine, RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa6";

const FeedItem = ({data}) => {
  //logic
  const {userName, userProfileImage, thread, LikeCount} = data;
  //view
  return (
    <li className="border-t border-churead-gray-300 border-opacity-15 px-6 py-3">
      <div className="flex items-start gap-3">
        {/* START: 프로필 이미지 영역 */}
        <div className="w-10 rounded-full overflow-hidden mt-1">
          <img src={userProfileImage} alt="사용자 프로필 이미지" />
        </div>
        {/* END: 프로필 이미지 영역 */}
        {/* START: 콘텐츠 영역 */}
        <div className="w-full">
          <div className="flex items-center">
            <span className="font-bold">{userName}</span>
            {/* START: 수정, 삭제 버튼 영역 */}
            <div className="ml-auto flex gap-1">
              <button type="button" className="max-w-6 p-1">
                <RiPencilFill size={"18px"} />
              </button>
              <button type="button" className="max-w-6 p-1">
                <FaTrash size={"14px"} />
              </button>
            </div>
            {/* END: 수정, 삭제 버튼 영역 */}
          </div>
          <p className="pt-1">
            {thread}
          </p>
          {/* START: 좋아요 영역 */}
          <div className="flex items-center gap-1">
            <button type="button" className="text-churead-gray-400">
              <RiHeartLine />
              {/* <RiHeartFill color="red" /> */}
            </button>
            <span>{LikeCount}</span>
          </div>
          {/* END: 좋아요 영역 */}
        </div>
        {/* END: 콘텐츠 영역 */}
      </div>
    </li>
  );
};

export default FeedItem;