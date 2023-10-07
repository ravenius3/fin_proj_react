import { Col, Row } from 'reactstrap';
import CompanyCard from "./CompanyCard";

const CompanyCardList = ({companyData}) => {
    if(companyData) {
        return (
            <Row className="ma-auto">
                {companyData.map((symbol, index) => {
                    return(
                        <Col
                            md='3'
                            className="m-4"
                            key = {index}
                        >
                            <CompanyCard symbol={symbol} />
                        </Col>
                    )
                })}
            </Row>
        )
        }
    }

    export default CompanyCardList;
