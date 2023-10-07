import { Card, CardTitle, CardText, Button } from 'reactstrap'

const CompanyCard = ({symbol}) => {
    const value = Math.random() * 100 ;
    const color = ['danger', 'success'];
    const rancolor = color[Math.floor(Math.random()*2)]

    return (
        <Card
        className="my-2"
        color={rancolor}
        inverse
        style={{
        width: '18rem'
    }}
        >
            <CardTitle>
               <h5>{symbol}</h5>
               <h6>{"$" + value}</h6>
            </CardTitle>
        </Card>
    )
}

export default CompanyCard;