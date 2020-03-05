import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {getAllArticles} from "../articles/selectors";
import {ThemedLayout} from "../../components/themedLayout";

const stateSelector = createStructuredSelector({
  authors: getAllArticles
});

const Authors = () => {
  const {authors} = useSelector(stateSelector);


  return (
    <ThemedLayout>
      All Authors Page
    </ThemedLayout>
  );
};



export default Authors;
