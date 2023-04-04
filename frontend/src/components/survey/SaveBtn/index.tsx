import { StyledButton, ButtonText } from "./styles";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  firstState,
  secondState,
  thirdState,
  fourthState,
  fifthState,
} from "../../../recoil/SurveyState";
import { postSurveyApi } from "../../../recoil/Api";
import { useNavigate } from "react-router";
import { userState } from "../../../recoil/UserState";
import { UserType } from "../../../recoil/UserState";

interface SaveBtnProps {
  checkedIcCount: number;
}

const SaveBtn = ({ checkedIcCount }: SaveBtnProps) => {
  const isActive = checkedIcCount === 5;
  const firstStateValue = useRecoilValue(firstState);
  const secondStateValue = useRecoilValue(secondState);
  const thirdStateValue = useRecoilValue(thirdState);
  const fourthStateValue = useRecoilValue(fourthState);
  const fifthStateValue = useRecoilValue(fifthState);

  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);


  const postSurveyData = async () => {
    const surveyQuery = {
      barrier: firstStateValue.join(""),
      departure: secondStateValue,
      preferredTime: thirdStateValue,
      densePopulation: fourthStateValue,
      visitLocation: fifthStateValue,
    };
    const res = await postSurveyApi(surveyQuery);
    const data = await res;
  };

  const handleClick = () => {
    if (isActive) {
      postSurveyData();
      setUser((prev: UserType) => ({ ...prev, isSurvey: true }));
      alert("설문이 완료되었습니다! 🤗");
      navigate("/tourspot");  // 관광지 페이지로 이동
    } else {
      alert("설문을 완료해주세요! 😢");
    }
  };

  return (
    <StyledButton isActive={isActive} onClick={handleClick}>
      <ButtonText>저장</ButtonText>
    </StyledButton>
  );
};

export default SaveBtn;
