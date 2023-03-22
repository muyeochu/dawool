import DetailBtn from "../../components/common/DetailBtn";

const ButtonTest = () => {
  return (
    <div>
      <DetailBtn icType={"ear"} text={"지체장애"} disable={1} />
      <DetailBtn icType={"oldman"} text={"노인"} disable={0} />
      <DetailBtn type={"info"} text={"노인"} />
    </div>
  );
};

export default ButtonTest;
