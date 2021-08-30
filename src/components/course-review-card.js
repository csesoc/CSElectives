import { Card } from "semantic-ui-react"

// This footer will appear on all pages
const CourseReviewCard = (props) => {
  const { code } = props;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{code}</Card.Header>
        <Card.Meta>Introduction to Programming</Card.Meta>
        <Card.Description>
          This is a long description of the above course describing what the course entails and what to expect when you enroll in the course
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default CourseReviewCard;