import { BLOG_LIST_FAIL, BLOG_LIST_REQUEST, BLOG_LIST_SUCCESS } from "../constants/blogConstants";
import axios from 'axios'

export const listBlogs = () => async (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
    try {
        dispatch({ type: BLOG_LIST_REQUEST });

        const { data } = await axios.get('/api/blogs/');

        dispatch({
            type: BLOG_LIST_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: BLOG_LIST_FAIL,
            payload: error.response && error.reponse.data.message ? error.response.data.messsage : error.message
        })
    }
}