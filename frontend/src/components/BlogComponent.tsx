import { Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listBlogs } from '../actions/blogActions';


const BlogComponent = () => {
    const dispatch = useDispatch();
    const blogList = useSelector((state: any) => state.blogList);
    const { loading, error, blogs } = blogList;

    useEffect(() => {
        dispatch(listBlogs())
    }, [dispatch])

    return (
        <div>
            <h1>Latest Blogs</h1>
            {loading ? (
                <Spinner size="lg" />
            ) : error ? (
                <h3>{error}</h3>
            ) : (blogs.map((blog: any) => (
                <h1 key={blog._id}>{blog.title}</h1>
            )))}
            
        </div>
    )
}

export default BlogComponent
