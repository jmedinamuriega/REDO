import { useState } from 'react';
import PropTypes from 'prop-types';
import { updatePost } from '../api';

const UpdatePostForm = ({ post, onPostUpdated }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(post.id, { title, body })
      .then(response => onPostUpdated(response.data))
      .catch(error => console.error('Error updating post:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      <button type="submit" className="update">Update Post</button>
    </form>
  );
};

UpdatePostForm.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  onPostUpdated: PropTypes.func.isRequired,
};

export default UpdatePostForm;
