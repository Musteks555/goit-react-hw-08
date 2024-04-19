import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { requestContacts } from "../../services/api";
import { selectLoading } from "../../redux/contacts/selector";

import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);

    useEffect(() => {
        dispatch(requestContacts());
    }, [dispatch]);

    return (
        <>
            <DocumentTitle>Phonebook</DocumentTitle>
            <div>{isLoading && "Request in progress..."}</div>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </>
    );
};

export default ContactsPage;
