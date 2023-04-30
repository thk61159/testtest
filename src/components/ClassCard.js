import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Figure from 'react-bootstrap/Figure'
import { AiFillStar } from 'react-icons/ai'

function ClassCard() {
	const image =
		'https://images.unsplash.com/photo-1682415239526-0f267340d194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60'
	return (
		<Card style={{ width: '14rem' }}>
			<Figure.Image height={135} alt='171x180' src={image} bsPrefix />

			<Card.Body>
				<h3 id='Hip' className='mt-1' style={{ fontSize: '1.2rem' }}>
					<a href='#Hip'>Hip hop street class</a>
				</h3>
				<p className='my-0' style={{ fontSize: '0.8rem' }}>
					老師
				</p>
				<p className='my-0' style={{ fontSize: '0.8rem' }}>
					{'5'}
					{Array.from({ length: 5 }, (v, i) => (
						<AiFillStar />
					))}
				</p>
				<p className='my-0' style={{ fontSize: '0.9rem' }}>
					＄＄＄＄
				</p>
			</Card.Body>
		</Card>
	)
}

export default ClassCard
