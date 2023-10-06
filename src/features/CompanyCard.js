import { Card, CardTitle, CardText, Button } from 'reactstrap'

const CompanyCard = ({symbol}) => {
    return (
        <Card>
            <CardTitle>
               <h5>{symbol}</h5>
            </CardTitle>
        </Card>
    )
}

export default CompanyCard;