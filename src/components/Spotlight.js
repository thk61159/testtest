import Carousel from 'react-bootstrap/Carousel'
const image =
	'https://images.unsplash.com/photo-1682415239526-0f267340d194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60'
function Spotlight() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={image}
					alt='First slide'
					height={400}
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={image}
					alt='Second slide'
					height={400}
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className='d-block w-100'
					src={image}
					alt='Third slide'
					height={400}
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}

export default Spotlight
