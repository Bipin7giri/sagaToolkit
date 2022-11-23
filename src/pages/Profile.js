import { useDispatch, useSelector } from 'react-redux'
import { signOut, getAllUser } from '../redux/slices/userSlice';
import './profile.css';
import { sagaActions } from '../redux/slices/saga/sagaActions';
import storage from 'redux-persist/lib/storage';
function Profile() {
  const { usersList } = useSelector((state) => state.user);
  console.log(usersList);

  const test = useSelector((state) => state.user);
  console.log(test);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className='center'>
      <button
        onClick={() => {
          dispatch({ type: sagaActions.FETCH_DATA_SAGA });
        }}>
        getAllusers
      </button>
      <ul>
        {usersList?.map((item) => {
          return <li>{item?.name}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          storage.removeItem('persist:posts');
        }}>
        remove
      </button>
      <div className='profile'>
        <h1>Profile</h1>
        <p>
          <strong>Name: </strong>
          {user?.name}
        </p>
        <p>
          <strong>Email: </strong>
          {`${user?.email}`}
        </p>
        <span onClick={handleSignOut}>Sign Out</span>
      </div>
    </div>
  );
}

export default Profile