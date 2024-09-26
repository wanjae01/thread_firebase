import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Nav from "../components/layout/Nav";
import FeedItem from "../components/FeedItem";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, deleteDoc, doc, increment, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";



const Home = ({ editedItem, onEdit }) => {
  // logic
  const history = useNavigate();

  const [feedList, setFeedList] = useState([]);
  const user = auth.currentUser
  // const delay = (ms) => {
  //   return new Promise((res) => setTimeout(res, ms));
  // };

  /**
   * 아이템 삭제하기
   * 1. 휴지통 아이콘이 있는 버튼을 클릭한다
   * 2. 클릭 이벤트가 발생한다.
   * 3. 클릭 이벤트가 발생시 handleDelete라는 함수가 호출된다.
   * 4. handleDelete 내부 논리
   * 4-1. confirm창을 띄운다.
   * 4-2. 사용자 선택한 값(boolean타입)을 ok라는 변수에 저장한다.
   * 4-3. 사용자 선택한 값이 true이면 onDelete라는 이벤트를 호출한다.
   * 4-4. onDelete라는 이벤트에서 선택된 아이템 즉 data를 인자에 넣어서 부모에게 올려준다.
   * 5. 부모는 onDelete라는 이벤트에 handleDelete라는 함수를 연결한다.
   * 6. feedList에 filter함수를 사용한다.
   * 6-1. filter함수에서 각 요소들의 id값과 자식으로부터 받아온 인자아이템의 id값과 비교해서 일치하지 않는 요소들만 뽑아낸다.
   * 7. filter함수로 리턴받은 배열을 feedList라는 state에 반영한다.
   */

  const handleEdit = (data) => {
    // 인자, argument
    onEdit(data); // 부모에게 수정할 객체 아이템 넘겨주기
    history("/edit"); // edit페이지로 이동
  };

  const handleDelete = async (selectedItem) => {
    // const filterList = feedList.filter((item) => item.id !== selectedItem.id);
    // setFeedList(filterList);
    if (selectedItem.userId !== user.uid) return;

    try {
      //데이터베이스에게 삭제 요청
      await deleteDoc(doc(db, "threads", selectedItem.id))
    } catch (error) {
      console.error(error)
    }
  };

  const handleLogout = async () => {
    const ok = window.confirm("정말 로그아웃 하시겠습니까?");

    if (!ok) return; // 아니요 선택시 다음 줄 실행안함

    // TODO: 1. 파이어베이스에게 로그아웃 요청
    try {
      // await signOut(auth)
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }

    // TODO: 2. 로그인 화면으로 리다이렉트
    history("/login");
  };

  const getLiveData = () => {
    const collectionRef = collection(db, "threads");

    const threadQuery = query(collectionRef, orderBy("createAt", "desc"));
    // 실시간으로 데이터 가져오기
    const unsubscribe = onSnapshot(threadQuery, (snapshot) => {
      console.log("snap", snapshot)
      const datas = snapshot.docs.map((item) => {
        console.log("item=>", item.data());
        return { id: item.id, ...item.data() };
      });
      // console.log("datas", datas);
      setFeedList(datas);
    });
    return unsubscribe
  };

  const handleLike = async (selectedItem) => {
    //firebase에게 라이크 숫자 업데이트 요구(LikeCount 값 1 증가)
    await updateDoc(doc(db, "threads", selectedItem.id), {likeCount: increment(1)} )
  }

  // 진입시 딱 한번 실행
  useEffect(() => {
   const unsubscribe = getLiveData();

    return () => {
      unsubscribe && unsubscribe();
    }
  }, []);

  useEffect(() => {
    if (!editedItem) return;
    //editedItem의 값이 있는경우
    const resultFeedList = feedList.map((item) => {
      if (item.id === editedItem.id) return editedItem;
      return item;
    });
    setFeedList(resultFeedList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editedItem]);

  // view
  return (
    <div className="h-full pt-20 pb-[74px] overflow-hidden">
      {/* START: 헤더 영역 */}
      <Header onLogout={handleLogout} />
      {/* END: 헤더 영역 */}
      <main className="h-full overflow-auto">
        <div>
          {/* START: 피드 영역 */}
          <ul>
            {feedList.map((feed) => (
              <FeedItem
                key={feed.id}
                data={feed}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onLike={handleLike}
              />
            ))}
          </ul>
          {/* END: 피드 영역 */}
        </div>
      </main>
      {/* START: 네비게이션 영역 */}
      <Nav />
      {/* END: 네비게이션 영역 */}
    </div>
  );
};

export default Home;