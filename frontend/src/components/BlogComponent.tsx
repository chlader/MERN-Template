import { Box, Flex, Heading, HStack, Spinner, VStack } from '@chakra-ui/react';
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
            <Flex>
                <VStack>
                    <HStack spacing={8}>
                        {loading ? (
                            <Spinner size="lg" />
                        ) : error ? (
                            <h3>{error}</h3>
                        ) : (blogs.map((blog: any) => (
                                <Box p="2">
                                    <p>{new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }).format(new Date(blog.date))}</p>
                                    <h3>
                                        {blog.title}
                                    </h3>
                                    <p>{blog.content}</p>
                                </Box>
                        )))}
                    </HStack>
                </VStack>
            </Flex>
        </div>
    )
}

export default BlogComponent
