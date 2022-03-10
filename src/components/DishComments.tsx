import ListGroup from "react-bootstrap/ListGroup"
import { Pasta } from "../types/IMenu"

interface CommentsProps {
  selectedDish: Pasta | undefined
}

const DishComments = (props: CommentsProps) => (
  <ListGroup>
    {props.selectedDish ? (
      props.selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
