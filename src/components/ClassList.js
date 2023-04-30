import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ClassCard from './ClassCard'

function ClassList() {
	return (
		<Container className='mt-4'>
			<Row>
				<Col>
					<ClassCard />
				</Col>
				<Col>
					<ClassCard />
				</Col>
				<Col xs={6}>
					<ClassCard />
				</Col>
				<Col>
					<ClassCard />
				</Col>
			</Row>
			<Row>
				<Col>
					<ClassCard />
				</Col>
				<Col xs={5}>
					<ClassCard />
				</Col>
				<Col>
					<ClassCard />
				</Col>
				<Col>
					<ClassCard />
				</Col>
			</Row>
		</Container>
	)
}

export default ClassList

