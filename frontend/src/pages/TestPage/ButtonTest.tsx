import DetailBtn from "../../components/common/DetailBtn";
import { useRecoilValue } from "recoil";
import { userState } from "../../recoil/UserState";

const ButtonTest = () => {
  const userData = useRecoilValue(userState);
  console.log("user 토큰은?", userData);
  return (
    <div>
      <DetailBtn icType={"ear"} text={"지체장애"} disable={1} />
      <DetailBtn icType={"oldman"} text={"노인"} disable={0} />
      <DetailBtn type={"info"} text={"노인"} />
    </div>
  );
};

export default ButtonTest;
