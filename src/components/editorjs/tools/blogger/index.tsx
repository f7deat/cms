import '../../style.css';

type EditorProps = {
    data: BloggerType
}

type BloggerType = {
    blogger: {
        blogId: string;
        postId: string;
    }
}

class Blogger {

    data: BloggerType;

    constructor(props: EditorProps) {
        this.data = props.data
    }

    static get toolbox() {
        return {
            title: 'Blogger',
            icon: '📰'
        };
    }
    render() {
        const wrapper = document.createElement('div');
        wrapper.classList.add('form-group');
        const inputBlogId = document.createElement('input');
        inputBlogId.placeholder = 'Blog Id';
        inputBlogId.id = 'blogId';
        inputBlogId.value = this.data?.blogger?.blogId ?? '';
        inputBlogId.classList.add('form-control');

        const inputPostId = document.createElement('input');
        inputPostId.placeholder = 'Post Id'
        inputPostId.id = 'postId';
        inputPostId.value = this.data?.blogger?.postId ?? '';
        inputPostId.classList.add('form-control');

        wrapper.appendChild(inputBlogId);
        wrapper.appendChild(inputPostId);
        return wrapper as any;
    }

    save(e: any) {
        const blogId = e.querySelector('#blogId').value;
        const postId = e.querySelector('#postId').value;
        return {
            blogger: { blogId, postId }
        }
    }
}

export default Blogger