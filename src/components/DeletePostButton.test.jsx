/* eslint-env jest */

import { render, screen, fireEvent, waitFor } from '@testing-library/react'; 
import '@testing-library/jest-dom/extend-expect'; 
import DeletePostButton from './DeletePostButton';
import { deletePost } from '../api';

jest.mock('../api');

test('deletes a post', async () => {
  const postId = 1;
  deletePost.mockResolvedValueOnce({});

  const handlePostDeleted = jest.fn();
  render(<DeletePostButton postId={postId} onPostDeleted={handlePostDeleted} />);

  fireEvent.click(screen.getByText('Delete Post'));

  await waitFor(() => expect(handlePostDeleted).toHaveBeenCalledWith(postId));
});
