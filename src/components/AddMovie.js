import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddMovie({props}) {
  console.log(props);
  const {setSho,setData,data}=props
  const [show, setShow] = useState(false);
  const handleClose = () => {setShow(false);setSho(false)};
  const handleShow = () => {setShow(true);setSho(true)}
  const [title,setTitle] = useState("");
  const [img,setImg] = useState("");
  const [desc,setDesc] = useState("");
  const [rat,setRat] = useState(0);
  
    const Add=()=>{
        let obj={title:title,img:img,description:desc,rating:rat}
        setData([...data,obj])
        handleClose()
    }
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{}}>
        Add a Movie
      </Button>
       
      <Modal show={show} onHide={handleClose} style= {{opacity:"0.8"}}>
      <div >
        <Modal.Header closeButton >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                placeholder="movie title"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Rating</Form.Label>
              <Form.Control
                type="number"
                onChange={(e)=>setRat(e.target.value)}

                placeholder="movie rating"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Descrption</Form.Label>
              <Form.Control
                type="text"
                placeholder="description"
                onChange={(e)=>setDesc(e.target.value)}
                autoFocus
              />
            </Form.Group >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Link Movie Image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e)=>setImg(e.target.value)}
                placeholder="Put your link here!"
                autoFocus
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </div>
      </Modal>
    </>
  );
}

export default AddMovie;