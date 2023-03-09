import logo from '../../../assets/images/sideroll.svg'
import { FooterSetting } from './styles';
const Footer = () => {
  return (
    <FooterSetting>
      <div>
        <p>
          &copy; 삼성 청년 SW 아카데미 8기 구미캠퍼스 D105 무여추 <img src={logo}></img>
        </p>
        <p>최예린 | 김정은 | 박희주 | 이준 | 이지예 | 이해솜</p>
      </div>
    </FooterSetting>
  );
};

export default Footer;
