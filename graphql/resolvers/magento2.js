export default {
    post(args, req) {
        console.log(args.inputData.title);
        return {
            posts: {
                title: 'Magento',
                content: 'Magento Content'
            },
            totalPosts: 100
        }
    }
}