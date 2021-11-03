import { Helmet } from "react-helmet-async";
import { PropTypes } from "prop-types";

const PageTitle = ({ title }) => (
  // title 안에 prop에서 받아온 title 넣어주기
  <Helmet>
    <title>{title} | Instaclone</title>
  </Helmet>
);

// title은 proptype으로 문자열 required 선언
PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
