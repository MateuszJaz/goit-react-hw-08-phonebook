import { useEffect, lazy } from "react";
import { useDispatch} from "react-redux";
// import { selectIsLoadingStatus, selectErrorStatus } from "redux/selectors"
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

// import { fetchContacts } from "redux/operations";
// import ContactForm from "./ContactForm/ContactForm";
// import { Filter } from "./Filter/Filter";
// import ContactList from "./ContactList/ContactList";




const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));


const App = () => {
  // const isLoading = useSelector(selectIsLoadingStatus);
  // const error = useSelector(selectErrorStatus);

// 		useEffect(() => {
// dispatch(fetchContacts())
// 	}, [dispatch]);

// 	return (
// 		<div className={style.container}>
// 			<h1>Phonebook</h1>
// 			<ContactForm />
// 			<h2>Contacts</h2>
// 			<Filter />
//       {isLoading && !error ? <p>Loading...</p> : <ContactList />}
// 		</div>
// 	);
// };
	
	const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<PhonebookPage />} />
          }
        />
      </Route>
    </Routes>
  );
};


export default App;
