import { Outlet, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

function Navigation() {
	return (
		<>
			<Navbar
				key={false}
				bg='dark'
				expand={false}
				variant='dark'>
				<Container fluid>
					<Navbar bg='dark' variant='dark'>
						<Container>
							<Navbar.Brand href='#home'>一起運動吧</Navbar.Brand>
							<Nav className='me-auto'>
								<Nav.Link href='#home'>首頁</Nav.Link>
								<Nav.Link href='#features'>活動中</Nav.Link>
								<Nav.Link href='#pricing'>課程</Nav.Link>
								<Nav.Link href='#pricing'>健康狀態</Nav.Link>
							</Nav>
						</Container>
					</Navbar>

					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-false`}
						aria-labelledby={`offcanvasNavbarLabel-expand-false`}
						placement='end'>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
								Offcanvas
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className='justify-content-end flex-grow-1 pe-3'>
								<Nav.Link href='#action1'>Home</Nav.Link>
								<Nav.Link href='#action2'>Link</Nav.Link>
								<NavDropdown
									title='Dropdown'
									id={`offcanvasNavbarDropdown-expand-false`}>
									<NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
									<NavDropdown.Item href='#action4'>
										Another action
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href='#action5'>
										Something else here
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
							<Form className='d-flex'>
								<Form.Control
									type='search'
									placeholder='Search'
									className='me-2'
									aria-label='Search'
								/>
								<Button variant='outline-success'>Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>

			<Outlet />
		</>
	)
}

export default Navigation
