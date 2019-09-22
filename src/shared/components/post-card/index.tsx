import React from 'react';
import { Card, Button } from 'react-bootstrap';

import styles from '../../styles/main.module.scss';

export interface IPostCardProps {
  id: string;
  img: string;
  title: string;
  description: string;
  onViewClick?: React.MouseEventHandler;
}

const PostCard = ({ id, img, title, description, onViewClick }: IPostCardProps) => (
  <Card className={styles.postCard}>
    <Card.Img variant="top" src={img}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" onClick={onViewClick} value={id}>View</Button>
    </Card.Body>
  </Card>
);

export default PostCard;
