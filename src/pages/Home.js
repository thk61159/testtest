import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { GrNext,GrPrevious } from 'react-icons/gr'


import Spotlight from '../components/Spotlight'
import ClassTabs from '../components/ClassTabs'
import ClassCard from '../components/ClassCard'
const Home = () => {
  return (
		<>
			<Spotlight />
			<Container
				fluid='md'
				className='mt-3'
				style={{ border: '1px solid black' }}>
				<ClassTabs />
				<Container>
					<h3 className='mt-3'>XX課程</h3>
					<p>
						Exercitation adipisicing qui id consequat ut consectetur adipisicing
						incididunt eu duis officia aliqua ex dolore. Et commodo commodo enim
						ea aliquip labore consectetur eu commodo magna sunt veniam mollit
						cupidatat. Aliquip aliquip Lorem minim aute ea anim dolore culpa
						sunt duis id.
					</p>
					<Button
						style={{ borderRadius: '50px', display: 'inline-block' }}
						variant='secondary'>
						<GrPrevious />
					</Button>
					<Row>
						{Array.from({ length: 5 }, (v, i) => (
							<Col>
								<ClassCard />
							</Col>
						))}
					</Row>
					<Button
						style={{ borderRadius: '50px', display: 'inline-block' }}
						variant='secondary'>
						<GrNext />
					</Button>
				</Container>
			</Container>
		</>
	)
}

export default Home