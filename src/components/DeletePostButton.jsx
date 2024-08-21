
import PropTypes from 'prop-types';
import { deletePost } from '../api';

const DeletePostButton = ({ postId, onPostDeleted }) => {
  const handleDelete = () => {
    deletePost(postId)
      .then(() => onPostDeleted(postId))
      .catch(error => console.error('Error deleting post:', error));
  };

  return <button onClick={handleDelete} className="delete">Delete Post</button>;
};

DeletePostButton.propTypes = {
  postId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onPostDeleted: PropTypes.func.isRequired,
};

export default DeletePostButton;
